(function(root,factory){const api=factory();if(typeof module!=="undefined"&&module.exports)module.exports=api;root.GroceryBuddyPlanner=api;})(typeof globalThis!=="undefined"?globalThis:this,function(){
  const PROTEINS=[
    ["Chicken",/chicken/],["Beef",/beef|steak|sirloin/],["Pork",/pork|ham|bacon/],
    ["Seafood",/shrimp|salmon|tuna|fish|tilapia|cod/],["Turkey",/turkey/],["Sausage",/sausage|meatball/]
  ];
  const VEGETABLES=/broccoli|spinach|beans|tomato|pepper|zucchini|cabbage|carrot|cucumber|lettuce|peas|asparagus/;
  function ingredientText(recipe){return (recipe.ingredients||[]).map(line=>line.key).join(" ").toLowerCase();}
  function inferProtein(recipe){const text=(recipe.ingredients||[]).map(line=>line.key).filter(key=>!/broth|stock/.test(key)).join(" ").toLowerCase();const match=PROTEINS.find(([,pattern])=>pattern.test(text));return match?match[0]:"Vegetarian";}
  function inferCategory(recipe,protein=inferProtein(recipe)){
    const text=`${recipe.name} ${ingredientText(recipe)}`.toLowerCase();
    if(/soup|chili|stew/.test(recipe.name.toLowerCase()))return "Soup/Chili";
    if(/pasta|spaghetti|noodle|orzo|tortellini|lasagna|mac and cheese|ravioli/.test(text))return "Pasta";
    return ["Chicken","Beef","Pork","Seafood"].includes(protein)?protein:(protein==="Turkey"?"Chicken":recipe.style==="Comfort"?"Soup/Chili":"Pasta");
  }
  function enrichRecipe(recipe){
    const protein=inferProtein(recipe),category=inferCategory(recipe,protein),minutes=Number(recipe.minutes)||30,cost=Number(recipe.cost)||0;
    const name=recipe.name.toLowerCase(),ingredients=ingredientText(recipe),onePan=/skillet|sheet pan|one pan|one pot|foil packet/.test(name);
    const tags=[];
    if(minutes<=30)tags.push("Quick");if(cost<=9)tags.push("Cheap");if(VEGETABLES.test(ingredients))tags.push("Healthy");
    if(recipe.style==="Comfort")tags.push("Comfort Food");if(/slow cooker|crockpot/.test(name))tags.push("Slow Cooker");if(/grill|kebab|souvlaki/.test(name))tags.push("Grill");
    if(onePan)tags.push("One Pan","Minimal Cleanup");if(/chili|soup|stew|casserole|lasagna/.test(name))tags.push("Leftovers","Freezer Friendly");
    if(/taco|pizza|burger|sloppy joe|mac and cheese|quesadilla|meatball/.test(name))tags.push("Kid Friendly");
    if(!tags.length)tags.push("Family Dinner");
    const prepTime=Math.min(minutes<=30?10:15,Math.max(5,minutes-5));
    return Object.assign(recipe,{title:recipe.name,category,protein,servings:recipe.baseServings||3,prepTime,cookTime:Math.max(5,minutes-prepTime),difficulty:minutes<=30?"Easy":minutes<=45?"Moderate":"Involved",cleanupEffort:onePan?"Low":minutes>45?"High":"Medium",estimatedCost:cost,tags:[...new Set(tags)],suggestedSides:[]});
  }
  function daysSince(value,now){if(!value)return Infinity;const time=new Date(value).getTime();return Number.isFinite(time)?Math.max(0,(now-time)/86400000):Infinity;}
  function targetCounts(count){return {quick:Math.max(1,Math.round(count*2/7)),cheap:Math.max(1,Math.round(count*2/7)),pasta:Math.max(1,Math.round(count/7)),involved:count>=5?1:0};}
  function scoreRecipe(recipe,state,options){
    const history=options.history[recipe.name]||{},targets=options.targets,scoreParts=[];
    if(options.preference.style!=="all"&&recipe.style!==options.preference.style)scoreParts.push(-100);
    if(options.preference.quick&&recipe.minutes>30)scoreParts.push(-100);
    if(options.budget==="low"&&recipe.cost>10)scoreParts.push(-24);else if(options.budget==="balanced"&&recipe.cost>13)scoreParts.push(-14);
    if(options.favorites.has(recipe.name))scoreParts.push(14-state.favoriteCount*8);
    const recent=history.recentUsage||[];const lastUsed=recent[recent.length-1]||history.lastMade;
    const age=daysSince(lastUsed,options.now);if(age<7)scoreParts.push(-90);else if(age<14)scoreParts.push(-45);else if(age<28)scoreParts.push(-18);
    scoreParts.push(-Math.min(Number(history.timesCooked||history.countCooked||0)*1.5,12));
    scoreParts.push(-(state.proteins[recipe.protein]||0)*24,-(state.categories[recipe.category]||0)*13);
    if(state.lastProtein===recipe.protein)scoreParts.push(-32);
    if(recipe.minutes<=30)scoreParts.push(state.quick<targets.quick?18:-8);else if(state.involved<targets.involved)scoreParts.push(8);
    if(recipe.cost<=9)scoreParts.push(state.cheap<targets.cheap?10:-2);
    if(recipe.category==="Pasta")scoreParts.push(state.pasta<targets.pasta?14:-9);
    scoreParts.push((options.saleMatches(recipe)||[]).length*7);
    return scoreParts.reduce((sum,value)=>sum+value,0);
  }
  function buildBalancedPlan(recipes,count,preferences,options={}){
    recipes.forEach(enrichRecipe);const favorites=options.favorites||new Set(),history=options.history||{},now=options.now||Date.now();
    const state={proteins:{},categories:{},lastProtein:"",quick:0,cheap:0,pasta:0,involved:0,favoriteCount:0};const chosen=[];
    for(let index=0;index<count;index+=1){const preference=preferences[index]||{style:"all",quick:false};const pool=recipes.filter(recipe=>!chosen.includes(recipe.name));let eligible=pool;
      if(preference.style!=="all"){const styled=eligible.filter(recipe=>recipe.style===preference.style);if(styled.length)eligible=styled;}
      if(preference.quick){const quick=eligible.filter(recipe=>recipe.minutes<=30);if(quick.length)eligible=quick;}
      const ranked=eligible.map(recipe=>({recipe,score:scoreRecipe(recipe,state,{preference,budget:options.budget||"balanced",favorites,history,targets:targetCounts(count),now,saleMatches:options.saleMatches||(()=>[])}),tie:`${recipe.protein}|${recipe.name}`})).sort((a,b)=>b.score-a.score||a.tie.localeCompare(b.tie));
      const winner=ranked[0]?.recipe;if(!winner)break;chosen.push(winner.name);state.proteins[winner.protein]=(state.proteins[winner.protein]||0)+1;state.categories[winner.category]=(state.categories[winner.category]||0)+1;state.lastProtein=winner.protein;
      if(winner.minutes<=30)state.quick++;else state.involved++;if(winner.cost<=9)state.cheap++;if(winner.category==="Pasta")state.pasta++;if(favorites.has(winner.name))state.favoriteCount++;
    }
    return chosen.map(name=>recipes.find(recipe=>recipe.name===name));
  }
  return {enrichRecipe,buildBalancedPlan,inferProtein,inferCategory,targetCounts};
});
