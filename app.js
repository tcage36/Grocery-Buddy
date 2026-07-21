const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const styles = ["all","Mediterranean","American","Italian","Mexican","Asian-inspired","Comfort"];
const styleLabels = { all:"Any style", Mediterranean:"Mediterranean", American:"American", Italian:"Italian", Mexican:"Mexican", "Asian-inspired":"Asian-inspired", Comfort:"Comfort food" };
const recipeByName = new Map(RECIPES.map(recipe => [recipe.name, recipe]));

function defaultPreferences() {
  return days.map((day, index) => ({ day, style:index < 2 ? "Mediterranean" : "all", quick:false }));
}
function loadSelections() {
  let stored = [];
  try { stored = JSON.parse(localStorage.getItem("gb_selectedMeals") || "[]"); } catch { stored = []; }
  return stored.filter(item => item && recipeByName.has(item.name)).map((item, index) => ({
    name:item.name,
    day:item.day || days[index] || `Dinner ${index + 1}`,
    requestedStyle:item.requestedStyle || item.style || "all",
    requestedQuick:!!item.requestedQuick,
    side:item.side || "No side"
  }));
}
function loadObject(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key) || "null") || fallback; } catch { return fallback; }
}

let selectedMeals = loadSelections();
let checkedItems = loadObject("gb_checkedItems", {});
let dayPreferences = loadObject("gb_dayPreferences", defaultPreferences());

const mealList = document.getElementById("mealList");
const groceryList = document.getElementById("groceryList");
const mealTemplate = document.getElementById("mealTemplate");
const dayPlanner = document.getElementById("dayPlanner");
const recipeModal = document.getElementById("recipeModal");

function save() {
  localStorage.setItem("gb_selectedMeals", JSON.stringify(selectedMeals));
  localStorage.setItem("gb_checkedItems", JSON.stringify(checkedItems));
  localStorage.setItem("gb_dayPreferences", JSON.stringify(dayPreferences));
}

function renderDayPlanner() {
  const count = Number(document.getElementById("mealCount").value);
  dayPlanner.innerHTML = "";
  days.slice(0, count).forEach((day, index) => {
    const preference = dayPreferences[index] || { day, style:"all", quick:false };
    preference.day = day;
    dayPreferences[index] = preference;
    const row = document.createElement("div"); row.className = "day-row";
    const dayName = document.createElement("span"); dayName.className = "day-name"; dayName.textContent = day;
    const select = document.createElement("select"); select.setAttribute("aria-label", `${day} meal style`);
    styles.forEach(style => {
      const option = document.createElement("option"); option.value = style; option.textContent = styleLabels[style]; option.selected = preference.style === style; select.appendChild(option);
    });
    select.addEventListener("change", () => { dayPreferences[index].style = select.value; save(); });
    const quickLabel = document.createElement("label"); quickLabel.className = "quick-toggle";
    const quick = document.createElement("input"); quick.type = "checkbox"; quick.checked = !!preference.quick; quick.setAttribute("aria-label", `Quick meal for ${day}`);
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
function scaledAmount(amount, baseServings=3) {
  const servings = Number(document.getElementById("servings").value || 3);
  return amount * servings / baseServings;
}
function formatAmount(value) {
  const whole = Math.floor(value + 1e-9);
  const remainder = value - whole;
  if (remainder < 0.03) return String(whole);
  const options = [
    [1/8,"⅛"],[1/6,"⅙"],[1/4,"¼"],[1/3,"⅓"],[3/8,"⅜"],
    [1/2,"½"],[5/8,"⅝"],[2/3,"⅔"],[3/4,"¾"],[5/6,"⅚"],[7/8,"⅞"]
  ];
  let best = options[0];
  for (const option of options) if (Math.abs(remainder - option[0]) < Math.abs(remainder - best[0])) best = option;
  if (remainder > 0.94) return String(whole + 1);
  return whole > 0 ? `${whole}${best[1]}` : best[1];
}
function pluralize(word, amount) {
  if (["oz","lb","tbsp","tsp"].includes(word)) return word;
  if (Math.abs(amount - 1) < 0.001) return word;
  const irregular = { can:"cans", head:"heads", bunch:"bunches", loaf:"loaves", box:"boxes", slice:"slices", clove:"cloves", packet:"packets", bag:"bags", pint:"pints", stalk:"stalks", count:"count" };
  return irregular[word] || (word.endsWith("s") ? word : `${word}s`);
}
function recipeIngredientText(line, baseServings=3) {
  const item = INGREDIENT_CATALOG[line.key];
  const amount = scaledAmount(line.amount, baseServings);
  if (item.unit === "count") {
    const noun = amount === 1 ? item.label : (item.plural || item.label);
    return `${formatAmount(amount)} ${noun} — ${item.form}`;
  }
  return `${formatAmount(amount)} ${pluralize(item.unit, amount)} ${item.label} — ${item.form}`;
}

function openRecipe(selection, index) {
  const recipe = recipeByName.get(selection.name); if (!recipe) return;
  const side = sideForSelection(selection, recipe);
  const servings = Number(document.getElementById("servings").value || 3);
  document.getElementById("recipeDay").textContent = selection.day || days[index] || `Dinner ${index + 1}`;
  document.getElementById("recipeTitle").textContent = recipe.name;
  document.getElementById("recipeMeta").textContent = `${recipe.style} • about ${recipe.minutes} minutes • serves ${servings}`;
  const body = document.getElementById("recipeBody"); body.innerHTML = "";

  const ingredientsSection = document.createElement("section"); ingredientsSection.className = "recipe-section";
  ingredientsSection.innerHTML = "<h3>Exact ingredients</h3>";
  const ingredientList = document.createElement("ul"); ingredientList.className = "recipe-list";
  recipe.ingredients.forEach(line => { const li=document.createElement("li"); li.textContent=recipeIngredientText(line, recipe.baseServings); ingredientList.appendChild(li); });
  ingredientsSection.appendChild(ingredientList); body.appendChild(ingredientsSection);

  const stepsSection = document.createElement("section"); stepsSection.className = "recipe-section"; stepsSection.innerHTML = "<h3>Prep & cooking instructions</h3>";
  const stepsList = document.createElement("ol"); stepsList.className = "instruction-list";
  recipe.instructions.forEach(step => { const li=document.createElement("li"); li.textContent=step; stepsList.appendChild(li); });
  stepsSection.appendChild(stepsList); body.appendChild(stepsSection);

  if (side.name !== "No side") {
    const sideSection = document.createElement("section"); sideSection.className = "recipe-section";
    const heading = document.createElement("h3"); heading.textContent = `Selected side: ${side.name}`; sideSection.appendChild(heading);
    const sideIngredients = document.createElement("ul"); sideIngredients.className = "recipe-list";
    side.ingredients.forEach(line => { const li=document.createElement("li"); li.textContent=recipeIngredientText(line, 3); sideIngredients.appendChild(li); });
    sideSection.appendChild(sideIngredients);
    const sideSteps = document.createElement("ol"); sideSteps.className = "instruction-list";
    side.instructions.forEach(step => { const li=document.createElement("li"); li.textContent=step; sideSteps.appendChild(li); });
    sideSection.appendChild(sideSteps); body.appendChild(sideSection);
  }
  const source = document.createElement("p"); source.className = "recipe-source"; source.textContent = `${recipe.source}. This stored recipe is the source used to build the grocery quantities above.`; body.appendChild(source);
  recipeModal.hidden = false; document.body.classList.add("modal-open"); document.getElementById("closeRecipeBtn").focus();
}
function closeRecipe() { recipeModal.hidden = true; document.body.classList.remove("modal-open"); }

function render() {
  mealList.innerHTML = "";
  if (!selectedMeals.length) {
    mealList.innerHTML = '<div class="empty">Generate a plan to get started.</div>';
  } else {
    selectedMeals.forEach((selection, index) => {
      const recipe = recipeByName.get(selection.name); if (!recipe) return;
      const node = mealTemplate.content.cloneNode(true);
      node.querySelector(".meal-day").textContent = selection.day || days[index] || `Dinner ${index + 1}`;
      node.querySelector("h3").textContent = recipe.name;
      node.querySelector(".meta").textContent = `${recipe.style} • about ${recipe.minutes} minutes • $${recipe.cost}${recipe.minutes <= 30 ? " • Quick" : ""}`;
      node.querySelector(".ingredients").textContent = `Uses: ${recipe.ingredients.slice(0,7).map(line => INGREDIENT_CATALOG[line.key].label).join(", ")}${recipe.ingredients.length > 7 ? "…" : ""}`;
      const sideSelect = node.querySelector(".side-select");
      (SIDE_OPTIONS[recipe.style] || []).forEach(side => {
        const option = document.createElement("option"); option.value = side.name; option.textContent = side.name; option.selected = side.name === (selection.side || "No side"); sideSelect.appendChild(option);
      });
      sideSelect.addEventListener("change", () => { selectedMeals[index].side = sideSelect.value; checkedItems = {}; save(); render(); });
      node.querySelector(".recipe-link").addEventListener("click", () => openRecipe(selection, index));
      node.querySelector(".swap").addEventListener("click", () => swapMeal(index));
      node.querySelector(".remove").addEventListener("click", () => { selectedMeals.splice(index,1); checkedItems={}; save(); render(); });
      mealList.appendChild(node);
    });
  }

  document.getElementById("mealTotal").textContent = selectedMeals.length ? `${selectedMeals.length} meals` : "No plan yet";
  const activeItems = groceryItems(false); groceryList.innerHTML = "";
  if (!activeItems.length) {
    groceryList.innerHTML = selectedMeals.length ? '<div class="empty">Everything is checked off. Checked items will not be sent to Reminders.</div>' : '<div class="empty">Your grocery list will appear here.</div>';
  } else {
    activeItems.forEach(item => {
      const row=document.createElement("label"); row.className="grocery-item";
      const check=document.createElement("input"); check.type="checkbox"; check.setAttribute("aria-label",`Already have ${item.label}`);
      check.addEventListener("change",()=>{checkedItems[item.key]=true;save();render();});
      const textWrap=document.createElement("span"); const name=document.createElement("strong"); name.textContent=item.label;
      const detail=document.createElement("small"); detail.textContent=item.detail; textWrap.append(name,detail); row.append(check,textWrap); groceryList.appendChild(row);
    });
  }
  const validKeys = new Set(groceryItems(true).map(item => item.key));
  const hiddenCount = Object.keys(checkedItems).filter(key => checkedItems[key] && validKeys.has(key)).length;
  document.getElementById("itemCount").textContent = hiddenCount ? `${activeItems.length} to buy • ${hiddenCount} have` : `${activeItems.length} items`;
  document.getElementById("restoreCheckedBtn").hidden = hiddenCount === 0;
}

function shuffled(items) { return [...items].sort(() => Math.random() - 0.5); }
function budgetPool(items,budget) { if (budget === "low") return items.filter(r=>r.cost<=10); if (budget === "balanced") return items.filter(r=>r.cost<=13); return items; }
function chooseMeal(preference,usedNames,budget) {
  const styleMatch = r => preference.style === "all" || r.style === preference.style;
  const quickMatch = r => !preference.quick || r.minutes <= 30;
  const unused = r => !usedNames.has(r.name);
  const attempts=[RECIPES.filter(r=>styleMatch(r)&&quickMatch(r)&&unused(r)),RECIPES.filter(r=>styleMatch(r)&&quickMatch(r)),RECIPES.filter(r=>styleMatch(r)&&unused(r)),RECIPES.filter(styleMatch),RECIPES.filter(r=>quickMatch(r)&&unused(r)),RECIPES.filter(unused),RECIPES];
  for (const attempt of attempts) { const within=budgetPool(attempt,budget); const pool=within.length?within:attempt; if(pool.length)return shuffled(pool)[0]; }
  return null;
}
function swapMeal(index) {
  const current=selectedMeals[index]; if(!current)return;
  const dayIndex=days.indexOf(current.day); const preference=dayPreferences[dayIndex>=0?dayIndex:index]||{day:current.day,style:current.requestedStyle||"all",quick:!!current.requestedQuick};
  const usedNames=new Set(selectedMeals.map(item=>item.name)); usedNames.add(current.name);
  const replacement=chooseMeal(preference,usedNames,document.getElementById("budget").value);
  if(!replacement||replacement.name===current.name){alert("There are no other matching meals for this day. Try changing the style or turning Quick off.");return;}
  selectedMeals[index]={name:replacement.name,day:current.day,requestedStyle:preference.style,requestedQuick:preference.quick,side:"No side"}; checkedItems={}; save(); render();
}
function generatePlan() {
  const count=Number(document.getElementById("mealCount").value); const budget=document.getElementById("budget").value; const usedNames=new Set(); const plan=[];
  for(let index=0;index<count;index+=1){const preference=dayPreferences[index]||{day:days[index],style:"all",quick:false}; const recipe=chooseMeal(preference,usedNames,budget); if(recipe){usedNames.add(recipe.name);plan.push({name:recipe.name,day:days[index],requestedStyle:preference.style,requestedQuick:preference.quick,side:"No side"});}}
  selectedMeals=plan;checkedItems={};save();render();
}

function purchaseDetail(item,total) {
  const useText = `${formatAmount(total)} ${pluralize(item.unit,total)}`;
  if (item.packageSize) {
    const packages=Math.ceil(total/item.packageSize); const noun=pluralize(item.purchaseUnit||"package",packages);
    return `Buy ${packages} ${noun}${item.packageLabel?` (${item.packageLabel}${packages>1?" each":""})`:""} • recipes use ${useText} • ${item.form}`;
  }
  const buyAmount=item.wholePurchase?Math.ceil(total):total;
  if (item.unit === "count") {
    return `Buy ${formatAmount(buyAmount)} • ${item.form}${Math.abs(buyAmount-total)>.001?` • recipes use ${formatAmount(total)}`:""}`;
  }
  return `Buy ${formatAmount(buyAmount)} ${pluralize(item.unit,buyAmount)} • ${item.form}${Math.abs(buyAmount-total)>.001?` • recipes use ${useText}`:""}`;
}
function groceryItems(includeChecked=false) {
  const combined=new Map();
  selectedMeals.forEach(selection=>{
    const recipe=recipeByName.get(selection.name); if(!recipe)return;
    const side=sideForSelection(selection,recipe);
    [...recipe.ingredients,...side.ingredients].forEach(line=>{
      const catalogItem=INGREDIENT_CATALOG[line.key]; const amount=scaledAmount(line.amount, recipe.baseServings || 3);
      if(!combined.has(line.key))combined.set(line.key,{key:line.key,label:catalogItem.label,amount:0,catalogItem}); combined.get(line.key).amount+=amount;
    });
  });
  return [...combined.values()].map(item=>({...item,detail:purchaseDetail(item.catalogItem,item.amount)})).filter(item=>includeChecked||!checkedItems[item.key]).sort((a,b)=>a.label.localeCompare(b.label));
}
function groceryText(){return groceryItems(false).map(item=>`${item.label} — ${item.detail}`).join("\n");}
function mealPlanText(){return selectedMeals.map(item=>`${item.day}: ${item.name}${item.side&&item.side!=="No side"?` + ${item.side}`:""}`).join("\n");}
function completePlanText(){return `Grocery Buddy Meal Plan\n${mealPlanText()}\n\nGrocery List\n${groceryText()}`;}
async function sharePlainText(text,successLabel){if(!text.trim()){alert("There are no unchecked items to share.");return;}if(navigator.share){try{await navigator.share({text});return;}catch(error){if(error&&error.name==="AbortError")return;}}try{await navigator.clipboard.writeText(text);alert(`${successLabel} copied. Open Shortcuts and run Add Grocery Buddy List.`);}catch{alert("This browser could not share or copy the list.");}}

// Changing servings changes exact recipe and grocery quantities, so hidden-item choices reset.
document.getElementById("mealCount").addEventListener("change",renderDayPlanner);
document.getElementById("servings").addEventListener("change",()=>{checkedItems={};save();render();});
document.getElementById("generateBtn").addEventListener("click",generatePlan);
document.getElementById("restoreCheckedBtn").addEventListener("click",()=>{checkedItems={};save();render();});
document.getElementById("resetBtn").addEventListener("click",()=>{selectedMeals=[];checkedItems={};dayPreferences=defaultPreferences();save();renderDayPlanner();render();});
document.getElementById("copyBtn").addEventListener("click",async()=>{if(!selectedMeals.length){alert("Generate a meal plan first.");return;}await navigator.clipboard.writeText(completePlanText());alert("Complete meal plan and unchecked grocery list copied.");});
document.getElementById("shareGroceriesBtn").addEventListener("click",()=>sharePlainText(groceryText(),"Grocery list"));
document.getElementById("shareMealsBtn").addEventListener("click",()=>sharePlainText(mealPlanText(),"Meal plan"));
document.getElementById("closeRecipeBtn").addEventListener("click",closeRecipe);
document.querySelector("[data-close-recipe]").addEventListener("click",closeRecipe);
document.addEventListener("keydown",event=>{if(event.key==="Escape"&&!recipeModal.hidden)closeRecipe();});
if("serviceWorker" in navigator)navigator.serviceWorker.register("service-worker.js");
renderDayPlanner();render();
