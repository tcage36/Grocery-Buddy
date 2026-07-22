const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const styles = ["all","Mediterranean","American","Italian","Mexican","Asian-inspired","Comfort"];
const styleLabels = { all:"Any style", Mediterranean:"Mediterranean", American:"American", Italian:"Italian", Mexican:"Mexican", "Asian-inspired":"Asian-inspired", Comfort:"Comfort food" };
const recipeByName = new Map(RECIPES.map(recipe => [recipe.name, recipe]));
const SHORTCUT_NAME = "Grocery to Kroger";
const SHORTCUT_RUN_URL = `shortcuts://run-shortcut?name=${encodeURIComponent(SHORTCUT_NAME)}`;

function defaultPreferences() { return days.map((day, index) => ({ day, style:index < 2 ? "Mediterranean" : "all", quick:false })); }
function loadObject(key, fallback) { try { return JSON.parse(localStorage.getItem(key) || "null") ?? fallback; } catch { return fallback; } }
function loadSelections() {
  const stored = loadObject("gb_selectedMeals", []);
  return stored.filter(item => item && recipeByName.has(item.name)).map((item, index) => ({
    name:item.name, day:item.day || days[index] || `Dinner ${index + 1}`,
    requestedStyle:item.requestedStyle || item.style || "all", requestedQuick:!!item.requestedQuick,
    side:item.side || "No side"
  }));
}

let selectedMeals = loadSelections();
let checkedItems = loadObject("gb_checkedItems", {});
let dayPreferences = loadObject("gb_dayPreferences", defaultPreferences());
let saleText = localStorage.getItem("gb_saleText") || "";
let saleStore = localStorage.getItem("gb_saleStore") || "";
let saleLines = [];
let pickerIndex = -1;

const mealList = document.getElementById("mealList");
const groceryList = document.getElementById("groceryList");
const mealTemplate = document.getElementById("mealTemplate");
const dayPlanner = document.getElementById("dayPlanner");
const recipeModal = document.getElementById("recipeModal");
const mealPickerModal = document.getElementById("mealPickerModal");
const shortcutModal = document.getElementById("shortcutModal");
const saleInput = document.getElementById("saleInput");
const saleStoreInput = document.getElementById("saleStore");

function save() {
  localStorage.setItem("gb_selectedMeals", JSON.stringify(selectedMeals));
  localStorage.setItem("gb_checkedItems", JSON.stringify(checkedItems));
  localStorage.setItem("gb_dayPreferences", JSON.stringify(dayPreferences));
  localStorage.setItem("gb_saleText", saleText);
  localStorage.setItem("gb_saleStore", saleStore);
}

function openModal(modal) { modal.hidden = false; document.body.classList.add("modal-open"); }
function closeModal(modal) { modal.hidden = true; if ([recipeModal, mealPickerModal, shortcutModal].every(item => item.hidden)) document.body.classList.remove("modal-open"); }

function renderDayPlanner() {
  const count = Number(document.getElementById("mealCount").value);
  dayPlanner.innerHTML = "";
  days.slice(0, count).forEach((day, index) => {
    const preference = dayPreferences[index] || { day, style:"all", quick:false };
    preference.day = day; dayPreferences[index] = preference;
    const row = document.createElement("div"); row.className = "day-row";
    const dayName = document.createElement("span"); dayName.className = "day-name"; dayName.textContent = day;
    const select = document.createElement("select"); select.setAttribute("aria-label", `${day} meal style`);
    styles.forEach(style => { const option=document.createElement("option"); option.value=style; option.textContent=styleLabels[style]; option.selected=preference.style===style; select.appendChild(option); });
    select.addEventListener("change", () => { dayPreferences[index].style = select.value; save(); });
    const quickLabel = document.createElement("label"); quickLabel.className = "quick-toggle";
    const quick = document.createElement("input"); quick.type="checkbox"; quick.checked=!!preference.quick; quick.setAttribute("aria-label", `Quick meal for ${day}`);
    quick.addEventListener("change", () => { dayPreferences[index].quick = quick.checked; save(); });
    const quickText = document.createElement("span"); quickText.textContent = "Quick";
    quickLabel.append(quick, quickText); row.append(dayName, select, quickLabel); dayPlanner.appendChild(row);
  });
  save();
}

function sideForSelection(selection, recipe) {
  const options = SIDE_OPTIONS[recipe.style] || [{ name:"No side", ingredients:[], instructions:[] }];
  return options.find(side => side.name === selection.side) || options[0];
}
function scaledAmount(amount, baseServings=3) { return amount * Number(document.getElementById("servings").value || 3) / baseServings; }
function formatAmount(value) {
  const whole = Math.floor(value + 1e-9), remainder = value - whole;
  if (remainder < 0.03) return String(whole);
  const options = [[1/8,"⅛"],[1/6,"⅙"],[1/4,"¼"],[1/3,"⅓"],[3/8,"⅜"],[1/2,"½"],[5/8,"⅝"],[2/3,"⅔"],[3/4,"¾"],[5/6,"⅚"],[7/8,"⅞"]];
  let best = options[0]; for (const option of options) if (Math.abs(remainder-option[0]) < Math.abs(remainder-best[0])) best=option;
  if (remainder > 0.94) return String(whole + 1); return whole > 0 ? `${whole}${best[1]}` : best[1];
}
function pluralize(word, amount) {
  if (["oz","lb","tbsp","tsp"].includes(word)) return word;
  if (Math.abs(amount-1)<.001) return word;
  const irregular={can:"cans",head:"heads",bunch:"bunches",loaf:"loaves",box:"boxes",slice:"slices",clove:"cloves",packet:"packets",bag:"bags",pint:"pints",stalk:"stalks",count:"count",piece:"pieces",container:"containers",bottle:"bottles",jar:"jars",tub:"tubs",block:"blocks",carton:"cartons",dozen:"dozen",gallon:"gallons",package:"packages"};
  return irregular[word] || (word.endsWith("s") ? word : `${word}s`);
}
function recipeIngredientText(line, baseServings=3) {
  const item=INGREDIENT_CATALOG[line.key], amount=scaledAmount(line.amount,baseServings);
  if (item.unit === "count") { const noun=amount===1?item.label:(item.plural||item.label); return `${formatAmount(amount)} ${noun} — ${item.form}`; }
  return `${formatAmount(amount)} ${pluralize(item.unit,amount)} ${item.label} — ${item.form}`;
}

const SALE_STOP_WORDS = new Set(["sale","digital","coupon","with","card","kroger","brand","select","varieties","assorted","fresh","frozen","boneless","skinless","each","ea","per","the","and","or","for","buy","get","save","regular","price","weekly","ad","package","pack","family","size","lb","lbs","pound","pounds","oz","ounce","ounces","ct","count"]);
function normalize(value) { return String(value || "").toLowerCase().replace(/[’']/g,"").replace(/[^a-z0-9]+/g," ").trim(); }
function stemToken(token) { if (token.length > 5 && token.endsWith("ies")) return token.slice(0,-3)+"y"; if (token.length > 4 && token.endsWith("es")) return token.slice(0,-2); if (token.length > 3 && token.endsWith("s")) return token.slice(0,-1); return token; }
function usefulTokens(value) { return normalize(value).split(" ").filter(Boolean).map(stemToken).filter(token => token.length > 2 && !SALE_STOP_WORDS.has(token) && !/^\d+$/.test(token)); }
function parseSaleLines(text) { return text.split(/\r?\n/).map(raw => raw.trim()).filter(Boolean).map(raw => ({raw, normalized:normalize(raw), tokens:new Set(usefulTokens(raw))})); }
function saleMatchFor(key, catalogItem=INGREDIENT_CATALOG[key]) {
  if (!saleLines.length || !catalogItem) return null;
  const directPhrases=[normalize(key),normalize(catalogItem.label)].filter(term=>term.length>2);
  const itemTokens=[...new Set(usefulTokens(`${key} ${catalogItem.label}`))];
  let best=null, bestScore=0;
  for (const line of saleLines) {
    if (directPhrases.some(phrase => phrase && line.normalized.includes(phrase))) return line;
    const overlap=itemTokens.filter(token=>line.tokens.has(token)).length;
    const score=itemTokens.length?overlap/itemTokens.length:0;
    const minimum=itemTokens.length<=1?1:Math.ceil(itemTokens.length*.6);
    if (overlap>=minimum && score>bestScore) { best=line; bestScore=score; }
  }
  return best;
}
function recipeSaleMatches(recipe) {
  const matches=[];
  recipe.ingredients.forEach(line => { const match=saleMatchFor(line.key); if(match && !matches.some(item=>item.raw===match.raw)) matches.push(match); });
  return matches;
}
function saleLabel(count) { return count===1?"1 sale match":`${count} sale matches`; }

function openRecipe(selection,index) {
  const recipe=recipeByName.get(selection.name); if(!recipe)return;
  const side=sideForSelection(selection,recipe), servings=Number(document.getElementById("servings").value||3);
  document.getElementById("recipeDay").textContent=selection.day||days[index]||`Dinner ${index+1}`;
  document.getElementById("recipeTitle").textContent=recipe.name;
  const saleCount=recipeSaleMatches(recipe).length;
  document.getElementById("recipeMeta").textContent=`${recipe.style} • about ${recipe.minutes} minutes • serves ${servings}${saleCount?` • ${saleLabel(saleCount)}`:""}`;
  const body=document.getElementById("recipeBody"); body.innerHTML="";
  const ingredientsSection=document.createElement("section"); ingredientsSection.className="recipe-section"; ingredientsSection.innerHTML="<h3>Exact ingredients</h3>";
  const ingredientList=document.createElement("ul"); ingredientList.className="recipe-list";
  recipe.ingredients.forEach(line=>{const li=document.createElement("li");li.textContent=recipeIngredientText(line,recipe.baseServings);const match=saleMatchFor(line.key);if(match){const badge=document.createElement("span");badge.className="sale-match";badge.textContent=`Kroger sale: ${match.raw}`;li.append(document.createElement("br"),badge);}ingredientList.appendChild(li);});
  ingredientsSection.appendChild(ingredientList); body.appendChild(ingredientsSection);
  const stepsSection=document.createElement("section");stepsSection.className="recipe-section";stepsSection.innerHTML="<h3>Prep & cooking instructions</h3>";
  const stepsList=document.createElement("ol");stepsList.className="instruction-list";recipe.instructions.forEach(step=>{const li=document.createElement("li");li.textContent=step;stepsList.appendChild(li);});stepsSection.appendChild(stepsList);body.appendChild(stepsSection);
  if(side.name!=="No side"){
    const sideSection=document.createElement("section");sideSection.className="recipe-section";const heading=document.createElement("h3");heading.textContent=`Selected side: ${side.name}`;sideSection.appendChild(heading);
    const sideIngredients=document.createElement("ul");sideIngredients.className="recipe-list";side.ingredients.forEach(line=>{const li=document.createElement("li");li.textContent=recipeIngredientText(line,3);sideIngredients.appendChild(li);});sideSection.appendChild(sideIngredients);
    const sideSteps=document.createElement("ol");sideSteps.className="instruction-list";side.instructions.forEach(step=>{const li=document.createElement("li");li.textContent=step;sideSteps.appendChild(li);});sideSection.appendChild(sideSteps);body.appendChild(sideSection);
  }
  const source=document.createElement("p");source.className="recipe-source";source.textContent=`${recipe.source}. This stored recipe is the source used to build the grocery quantities above.`;body.appendChild(source);
  openModal(recipeModal); document.getElementById("closeRecipeBtn").focus();
}

function render() {
  mealList.innerHTML="";
  if(!selectedMeals.length) mealList.innerHTML='<div class="empty">Generate a plan to get started.</div>';
  else selectedMeals.forEach((selection,index)=>{
    const recipe=recipeByName.get(selection.name);if(!recipe)return;const node=mealTemplate.content.cloneNode(true);const saleCount=recipeSaleMatches(recipe).length;
    node.querySelector(".meal-day").textContent=selection.day||days[index]||`Dinner ${index+1}`;node.querySelector("h3").textContent=recipe.name;
    node.querySelector(".meta").textContent=`${recipe.style} • about ${recipe.minutes} minutes • $${recipe.cost}${recipe.minutes<=30?" • Quick":""}${saleCount?` • ${saleLabel(saleCount)}`:""}`;
    node.querySelector(".ingredients").textContent=`Uses: ${recipe.ingredients.slice(0,7).map(line=>INGREDIENT_CATALOG[line.key].label).join(", ")}${recipe.ingredients.length>7?"…":""}`;
    const sideSelect=node.querySelector(".side-select");(SIDE_OPTIONS[recipe.style]||[]).forEach(side=>{const option=document.createElement("option");option.value=side.name;option.textContent=side.name;option.selected=side.name===(selection.side||"No side");sideSelect.appendChild(option);});
    sideSelect.addEventListener("change",()=>{selectedMeals[index].side=sideSelect.value;checkedItems={};save();render();});
    node.querySelector(".recipe-link").addEventListener("click",()=>openRecipe(selection,index));
    node.querySelector(".choose-meal").addEventListener("click",()=>openMealPicker(index));
    node.querySelector(".remove").addEventListener("click",()=>{selectedMeals.splice(index,1);checkedItems={};save();render();});mealList.appendChild(node);
  });
  document.getElementById("mealTotal").textContent=selectedMeals.length?`${selectedMeals.length} meals • ${RECIPES.length} available`:"No plan yet";
  const activeItems=groceryItems(false);groceryList.innerHTML="";
  if(!activeItems.length) groceryList.innerHTML=selectedMeals.length?'<div class="empty">Everything is checked off. Checked items will not be sent to Reminders.</div>':'<div class="empty">Your grocery list will appear here.</div>';
  else activeItems.forEach(item=>{
    const row=document.createElement("label");row.className="grocery-item";const check=document.createElement("input");check.type="checkbox";check.setAttribute("aria-label",`Already have ${item.label}`);check.addEventListener("change",()=>{checkedItems[item.key]=true;save();render();});
    const textWrap=document.createElement("span"),name=document.createElement("strong");name.textContent=item.label;const detail=document.createElement("small");detail.textContent=item.detail;textWrap.append(name,detail);
    if(item.sale){const badge=document.createElement("span");badge.className="sale-match";badge.textContent=`Kroger sale: ${item.sale.raw}`;textWrap.appendChild(badge);}row.append(check,textWrap);groceryList.appendChild(row);
  });
  const validKeys=new Set(groceryItems(true).map(item=>item.key));const hiddenCount=Object.keys(checkedItems).filter(key=>checkedItems[key]&&validKeys.has(key)).length;
  document.getElementById("itemCount").textContent=hiddenCount?`${activeItems.length} to buy • ${hiddenCount} have`:`${activeItems.length} items`;
  document.getElementById("restoreCheckedBtn").hidden=hiddenCount===0;
  renderSaleStatus();
}

function renderSaleStatus() {
  const status=document.getElementById("saleStatus");
  if(!saleLines.length){status.textContent="No sales loaded";return;}
  const matches=groceryItems(true).filter(item=>item.sale).length;
  status.textContent=`${saleLines.length} sales • ${matches} list matches`;
}
function shuffled(items){return [...items].sort(()=>Math.random()-.5);}
function budgetPool(items,budget){if(budget==="low")return items.filter(r=>r.cost<=10);if(budget==="balanced")return items.filter(r=>r.cost<=13);return items;}
function weightedChoice(items){
  if(!items.length)return null;const weighted=[];items.forEach(recipe=>{const weight=1+recipeSaleMatches(recipe).length*2;for(let i=0;i<weight;i+=1)weighted.push(recipe);});return weighted[Math.floor(Math.random()*weighted.length)];
}
function chooseMeal(preference,usedNames,budget){
  const styleMatch=r=>preference.style==="all"||r.style===preference.style,quickMatch=r=>!preference.quick||r.minutes<=30,unused=r=>!usedNames.has(r.name);
  const attempts=[RECIPES.filter(r=>styleMatch(r)&&quickMatch(r)&&unused(r)),RECIPES.filter(r=>styleMatch(r)&&quickMatch(r)),RECIPES.filter(r=>styleMatch(r)&&unused(r)),RECIPES.filter(styleMatch),RECIPES.filter(r=>quickMatch(r)&&unused(r)),RECIPES.filter(unused),RECIPES];
  for(const attempt of attempts){const within=budgetPool(attempt,budget),pool=within.length?within:attempt;if(pool.length)return weightedChoice(pool);}return null;
}
function generatePlan(){
  const count=Number(document.getElementById("mealCount").value),budget=document.getElementById("budget").value,usedNames=new Set(),plan=[];
  for(let index=0;index<count;index+=1){const preference=dayPreferences[index]||{day:days[index],style:"all",quick:false};const recipe=chooseMeal(preference,usedNames,budget);if(recipe){usedNames.add(recipe.name);plan.push({name:recipe.name,day:days[index],requestedStyle:preference.style,requestedQuick:preference.quick,side:"No side"});}}
  selectedMeals=plan;checkedItems={};save();render();
}

function populatePickerStyles(){const select=document.getElementById("pickerStyle");select.innerHTML="";styles.forEach(style=>{const option=document.createElement("option");option.value=style;option.textContent=styleLabels[style];select.appendChild(option);});}
function openMealPicker(index){
  pickerIndex=index;const selection=selectedMeals[index],dayIndex=days.indexOf(selection.day),preference=dayPreferences[dayIndex>=0?dayIndex:index]||{style:"all",quick:false};
  document.getElementById("pickerDay").textContent=selection.day||`Dinner ${index+1}`;document.getElementById("mealSearch").value="";document.getElementById("pickerStyle").value=preference.style||"all";document.getElementById("pickerQuick").checked=!!preference.quick;renderMealChoices();openModal(mealPickerModal);document.getElementById("mealSearch").focus();
}
function renderMealChoices(){
  if(pickerIndex<0)return;const search=normalize(document.getElementById("mealSearch").value),style=document.getElementById("pickerStyle").value,quick=document.getElementById("pickerQuick").checked,current=selectedMeals[pickerIndex]?.name;
  const matches=RECIPES.filter(recipe=>{
    if(style!=="all"&&recipe.style!==style)return false;if(quick&&recipe.minutes>30)return false;
    const haystack=normalize(`${recipe.name} ${recipe.style} ${recipe.minutes<=30?"quick":""} ${recipe.ingredients.map(line=>INGREDIENT_CATALOG[line.key].label).join(" ")}`);return !search||haystack.includes(search)||usefulTokens(search).every(token=>usefulTokens(haystack).includes(token));
  }).sort((a,b)=>{const saleDiff=recipeSaleMatches(b).length-recipeSaleMatches(a).length;if(saleDiff)return saleDiff;return a.name.localeCompare(b.name);});
  document.getElementById("pickerCount").textContent=`${matches.length} matching meals`;const container=document.getElementById("mealChoices");container.innerHTML="";
  if(!matches.length){container.innerHTML='<div class="empty">No meals match those filters.</div>';return;}
  matches.forEach(recipe=>{const button=document.createElement("button");button.type="button";button.className=`meal-choice${recipe.name===current?" current":""}`;const title=document.createElement("h3");title.textContent=recipe.name;const meta=document.createElement("p");meta.textContent=`${recipe.style} • ${recipe.minutes} min • about $${recipe.cost}`;const uses=document.createElement("p");uses.textContent=`Uses: ${recipe.ingredients.slice(0,5).map(line=>INGREDIENT_CATALOG[line.key].label).join(", ")}${recipe.ingredients.length>5?"…":""}`;button.append(title,meta,uses);const sales=recipeSaleMatches(recipe);if(sales.length){const badge=document.createElement("span");badge.className="sale-match";badge.textContent=`${saleLabel(sales.length)}: ${sales.slice(0,2).map(item=>item.raw).join(" • ")}`;button.appendChild(badge);}button.addEventListener("click",()=>selectMealFromPicker(recipe));container.appendChild(button);});
}
function selectMealFromPicker(recipe){const current=selectedMeals[pickerIndex];if(!current)return;selectedMeals[pickerIndex]={name:recipe.name,day:current.day,requestedStyle:document.getElementById("pickerStyle").value,requestedQuick:document.getElementById("pickerQuick").checked,side:"No side"};checkedItems={};save();render();closeModal(mealPickerModal);}

function purchaseDetail(item,total){
  const useText=`${formatAmount(total)} ${pluralize(item.unit,total)}`;
  if(item.packageSize){const packages=Math.ceil(total/item.packageSize),noun=pluralize(item.purchaseUnit||"package",packages);return `Buy ${packages} ${noun}${item.packageLabel?` (${item.packageLabel}${packages>1?" each":""})`:""} • recipes use ${useText} • ${item.form}`;}
  const buyAmount=item.wholePurchase?Math.ceil(total):total;if(item.unit==="count")return `Buy ${formatAmount(buyAmount)} • ${item.form}${Math.abs(buyAmount-total)>.001?` • recipes use ${formatAmount(total)}`:""}`;
  return `Buy ${formatAmount(buyAmount)} ${pluralize(item.unit,buyAmount)} • ${item.form}${Math.abs(buyAmount-total)>.001?` • recipes use ${useText}`:""}`;
}
function groceryItems(includeChecked=false){
  const combined=new Map();selectedMeals.forEach(selection=>{const recipe=recipeByName.get(selection.name);if(!recipe)return;const side=sideForSelection(selection,recipe);[...recipe.ingredients,...side.ingredients].forEach(line=>{const catalogItem=INGREDIENT_CATALOG[line.key],amount=scaledAmount(line.amount,recipe.baseServings||3);if(!combined.has(line.key))combined.set(line.key,{key:line.key,label:catalogItem.label,amount:0,catalogItem});combined.get(line.key).amount+=amount;});});
  return [...combined.values()].map(item=>({...item,detail:purchaseDetail(item.catalogItem,item.amount),sale:saleMatchFor(item.key,item.catalogItem)})).filter(item=>includeChecked||!checkedItems[item.key]).sort((a,b)=>a.label.localeCompare(b.label));
}
function groceryText(){return groceryItems(false).map(item=>`${item.label} — ${item.detail}${item.sale?` • KROGER SALE: ${item.sale.raw}`:""}`).join("\n");}
function mealPlanText(){return selectedMeals.map(item=>`${item.day}: ${item.name}${item.side&&item.side!=="No side"?` + ${item.side}`:""}`).join("\n");}
function completePlanText(){const store=saleStore?`\nKroger store/area: ${saleStore}`:"";return `Grocery Buddy Meal Plan${store}\n${mealPlanText()}\n\nGrocery List\n${groceryText()}`;}
async function sharePlainText(text,successLabel){if(!text.trim()){alert("There are no unchecked items to share.");return;}if(navigator.share){try{await navigator.share({text});return;}catch(error){if(error&&error.name==="AbortError")return;}}try{await navigator.clipboard.writeText(text);alert(`${successLabel} copied. Open Shortcuts and run Add Grocery Buddy List.`);}catch{alert("This browser could not share or copy the list.");}}
function applySales(){saleText=saleInput.value.trim();saleStore=saleStoreInput.value.trim();saleLines=parseSaleLines(saleText);save();render();if(saleLines.length)alert(`${saleLines.length} Kroger sale lines saved. Meal generation and grocery labels will now use them.`);}
function clearSales(){saleText="";saleStore="";saleLines=[];saleInput.value="";saleStoreInput.value="";save();render();}
function runKrogerShortcut(){if(!groceryItems(false).length){alert("Send or prepare an unchecked grocery list before running the Kroger shortcut.");return;}window.location.href=SHORTCUT_RUN_URL;}

saleInput.value=saleText;saleStoreInput.value=saleStore;saleLines=parseSaleLines(saleText);populatePickerStyles();
document.getElementById("mealCount").addEventListener("change",renderDayPlanner);
document.getElementById("servings").addEventListener("change",()=>{checkedItems={};save();render();});
document.getElementById("generateBtn").addEventListener("click",generatePlan);
document.getElementById("restoreCheckedBtn").addEventListener("click",()=>{checkedItems={};save();render();});
document.getElementById("resetBtn").addEventListener("click",()=>{selectedMeals=[];checkedItems={};dayPreferences=defaultPreferences();save();renderDayPlanner();render();});
document.getElementById("copyBtn").addEventListener("click",async()=>{if(!selectedMeals.length){alert("Generate a meal plan first.");return;}await navigator.clipboard.writeText(completePlanText());alert("Complete meal plan and unchecked grocery list copied.");});
document.getElementById("shareGroceriesBtn").addEventListener("click",()=>sharePlainText(groceryText(),"Grocery list"));
document.getElementById("shareMealsBtn").addEventListener("click",()=>sharePlainText(mealPlanText(),"Meal plan"));
document.getElementById("applySalesBtn").addEventListener("click",applySales);
document.getElementById("clearSalesBtn").addEventListener("click",clearSales);
document.getElementById("openWeeklyAdBtn").addEventListener("click",()=>window.open("https://www.kroger.com/weeklyad","_blank","noopener"));
document.getElementById("runKrogerShortcutBtn").addEventListener("click",runKrogerShortcut);
document.getElementById("shortcutSetupBtn").addEventListener("click",()=>openModal(shortcutModal));
document.getElementById("createShortcutBtn").addEventListener("click",()=>{window.location.href="shortcuts://create-shortcut";});
document.getElementById("runShortcutFromSetupBtn").addEventListener("click",runKrogerShortcut);
document.getElementById("mealSearch").addEventListener("input",renderMealChoices);
document.getElementById("pickerStyle").addEventListener("change",renderMealChoices);
document.getElementById("pickerQuick").addEventListener("change",renderMealChoices);
document.getElementById("closeRecipeBtn").addEventListener("click",()=>closeModal(recipeModal));
document.querySelector("[data-close-recipe]").addEventListener("click",()=>closeModal(recipeModal));
document.getElementById("closePickerBtn").addEventListener("click",()=>closeModal(mealPickerModal));
document.querySelector("[data-close-picker]").addEventListener("click",()=>closeModal(mealPickerModal));
document.getElementById("closeShortcutBtn").addEventListener("click",()=>closeModal(shortcutModal));
document.querySelector("[data-close-shortcut]").addEventListener("click",()=>closeModal(shortcutModal));
document.addEventListener("keydown",event=>{if(event.key!=="Escape")return;if(!recipeModal.hidden)closeModal(recipeModal);else if(!mealPickerModal.hidden)closeModal(mealPickerModal);else if(!shortcutModal.hidden)closeModal(shortcutModal);});
if("serviceWorker" in navigator)navigator.serviceWorker.register("service-worker.js");
renderDayPlanner();render();
