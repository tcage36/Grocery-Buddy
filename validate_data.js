const fs=require('fs'),vm=require('vm');
const path=require('path');
const source=fs.readFileSync(path.join(__dirname,'..','data.js'),'utf8');
const ctx={};vm.createContext(ctx);vm.runInContext(source+'\nthis.CAT=INGREDIENT_CATALOG;this.RECS=RECIPES;this.SIDES=SIDE_OPTIONS;',ctx);
const errors=[];
for(const r of ctx.RECS){
  if(!r.ingredients?.length)errors.push(`${r.name}: no ingredients`);
  for(const l of r.ingredients||[]){if(!ctx.CAT[l.key])errors.push(`${r.name}: missing ${l.key}`);if(!(Number(l.amount)>0))errors.push(`${r.name}: invalid amount ${l.key}`);}
  const text=(r.instructions||[]).join(' ').toLowerCase();
  if(text.includes('broth') && !(r.ingredients||[]).some(l=>String(l.key).includes('broth')))errors.push(`${r.name}: broth in instructions but not ingredients`);
}
for(const sides of Object.values(ctx.SIDES))for(const s of sides)for(const l of s.ingredients||[])if(!ctx.CAT[l.key])errors.push(`Side ${s.name}: missing ${l.key}`);
if(ctx.CAT['ground beef']?.purchaseIncrement!==1)errors.push('ground beef purchaseIncrement must be 1 lb');
if(errors.length){console.error(errors.join('\n'));process.exit(1);}console.log(`PASS: ${ctx.RECS.length} recipes validated; all ingredient references resolve; broth regression check passed.`);
