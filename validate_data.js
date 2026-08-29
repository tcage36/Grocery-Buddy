const fs=require('fs'),vm=require('vm');
const path=require('path');
const source=fs.readFileSync(path.join(__dirname,'data.js'),'utf8');
const ctx={};vm.createContext(ctx);vm.runInContext(source+'\nthis.CAT=INGREDIENT_CATALOG;this.RECS=RECIPES;this.SIDES=SIDE_OPTIONS;',ctx);
const planner=require(path.join(__dirname,'planner-core.js'));
const errors=[];
for(const r of ctx.RECS){
  planner.enrichRecipe(r);
  if(!r.ingredients?.length)errors.push(`${r.name}: no ingredients`);
  for(const field of ['title','category','protein','servings','prepTime','cookTime','difficulty','cleanupEffort','estimatedCost','tags'])if(r[field]===undefined||r[field]===null)errors.push(`${r.name}: missing ${field}`);
  if(!Array.isArray(r.tags)||!r.tags.length)errors.push(`${r.name}: no tags`);
  for(const l of r.ingredients||[]){if(!ctx.CAT[l.key])errors.push(`${r.name}: missing ${l.key}`);if(!(Number(l.amount)>0))errors.push(`${r.name}: invalid amount ${l.key}`);}
  const text=(r.instructions||[]).join(' ').toLowerCase();
  if(text.includes('broth') && !(r.ingredients||[]).some(l=>String(l.key).includes('broth')))errors.push(`${r.name}: broth in instructions but not ingredients`);
}
for(const sides of Object.values(ctx.SIDES))for(const s of sides)for(const l of s.ingredients||[])if(!ctx.CAT[l.key])errors.push(`Side ${s.name}: missing ${l.key}`);
if(ctx.CAT['ground beef']?.purchaseIncrement!==1)errors.push('ground beef purchaseIncrement must be 1 lb');
const labels=new Map();for(const [key,item] of Object.entries(ctx.CAT)){const normalized=String(item.label||key).trim().toLowerCase();if(labels.has(normalized))errors.push(`duplicate grocery label ${normalized}: ${labels.get(normalized)} and ${key}`);else labels.set(normalized,key);}
const preferences=Array.from({length:7},()=>({style:'all',quick:false}));
const plan=planner.buildBalancedPlan(ctx.RECS,7,preferences,{favorites:new Set(ctx.RECS.slice(0,4).map(r=>r.name)),history:{},saleMatches:()=>[]});
if(plan.length!==7||new Set(plan.map(r=>r.name)).size!==7)errors.push('smart planner did not create seven unique meals');
if(new Set(plan.map(r=>r.protein)).size<4)errors.push('smart planner did not rotate enough protein types');
if(plan.filter(r=>r.minutes<=30).length<2)errors.push('smart planner did not include enough quick meals');
if(!plan.some(r=>r.category==='Pasta'))errors.push('smart planner did not include a pasta meal');
const favoriteCount=plan.filter(r=>ctx.RECS.slice(0,4).some(f=>f.name===r.name)).length;
if(favoriteCount<1||favoriteCount>3)errors.push('smart planner favorite preference is not balanced');
const preferencePlan=planner.buildBalancedPlan(ctx.RECS,2,[{style:'Mediterranean',quick:true},{style:'Italian',quick:false}],{history:{},saleMatches:()=>[]});
if(preferencePlan[0]?.style!=='Mediterranean'||preferencePlan[0]?.minutes>30)errors.push('smart planner did not honor a quick style preference');
if(preferencePlan[1]?.style!=='Italian')errors.push('smart planner did not honor a style preference');
if(errors.length){console.error(errors.join('\n'));process.exit(1);}console.log(`PASS: ${ctx.RECS.length} recipes validated; all ingredient references resolve; broth regression check passed.`);
