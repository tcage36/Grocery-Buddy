const meals = [
  { name:"Greek Chicken Bowls", style:"Mediterranean", cost:13, minutes:30, budget:"balanced", ingredients:["chicken thighs","rice","cucumber","tomatoes","plain Greek yogurt","lemon","feta cheese"] },
  { name:"Mediterranean Chickpea Pasta", style:"Mediterranean", cost:9, minutes:25, budget:"low", ingredients:["pasta","chickpeas","diced tomatoes","spinach","garlic","parmesan cheese"] },
  { name:"Lemon Garlic Pork Chops", style:"Mediterranean", cost:12, minutes:30, budget:"balanced", ingredients:["pork chops","potatoes","green beans","lemon","garlic"] },
  { name:"Shrimp Orzo Skillet", style:"Mediterranean", cost:15, minutes:25, budget:"flexible", ingredients:["shrimp","orzo","spinach","diced tomatoes","lemon","feta cheese"] },
  { name:"Turkey Kofta Pitas", style:"Mediterranean", cost:12, minutes:35, budget:"balanced", ingredients:["ground turkey","pita bread","cucumber","tomatoes","plain Greek yogurt","onion"] },
  { name:"Baked Feta White Beans", style:"Mediterranean", cost:8, minutes:30, budget:"low", ingredients:["white beans","feta cheese","cherry tomatoes","spinach","bread"] },
  { name:"Mediterranean Tuna Pitas", style:"Mediterranean", cost:9, minutes:15, budget:"low", ingredients:["canned tuna","pita bread","cucumber","tomatoes","plain Greek yogurt","lemon"] },
  { name:"Chicken Souvlaki Flatbreads", style:"Mediterranean", cost:12, minutes:25, budget:"balanced", ingredients:["chicken breast","flatbread","cucumber","tomatoes","plain Greek yogurt","lemon"] },

  { name:"Cheeseburger Crunch Wraps", style:"American", cost:11, minutes:25, budget:"balanced", ingredients:["ground beef","large tortillas","shredded cheese","lettuce","tomatoes","pickles"] },
  { name:"Loaded Baked Potatoes", style:"American", cost:8, minutes:45, budget:"low", ingredients:["baking potatoes","shredded cheese","sour cream","bacon bits","green onions"] },
  { name:"BBQ Pork Chop Sheet Pan", style:"American", cost:11, minutes:35, budget:"balanced", ingredients:["pork chops","barbecue sauce","potatoes","broccoli"] },
  { name:"Turkey Sloppy Joes", style:"American", cost:9, minutes:25, budget:"low", ingredients:["ground turkey","hamburger buns","sloppy joe sauce","green beans"] },
  { name:"Chicken Bacon Ranch Flatbreads", style:"American", cost:12, minutes:25, budget:"balanced", ingredients:["flatbread","chicken breast","bacon bits","ranch dressing","shredded cheese"] },

  { name:"Creamy Sausage Pasta", style:"Italian", cost:10, minutes:25, budget:"balanced", ingredients:["smoked sausage","pasta","cream cheese","spinach","diced tomatoes"] },
  { name:"Skillet Lasagna", style:"Italian", cost:12, minutes:30, budget:"balanced", ingredients:["ground beef","pasta","marinara sauce","ricotta cheese","mozzarella cheese"] },
  { name:"Pesto Chicken Pasta", style:"Italian", cost:13, minutes:25, budget:"balanced", ingredients:["chicken breast","pasta","pesto","cherry tomatoes","parmesan cheese"] },
  { name:"Italian White Bean Soup", style:"Italian", cost:8, minutes:30, budget:"low", ingredients:["white beans","diced tomatoes","spinach","carrots","Italian seasoning","bread"] },

  { name:"Beef Taco Bowls", style:"Mexican", cost:11, minutes:25, budget:"balanced", ingredients:["ground beef","rice","black beans","corn","salsa","shredded cheese"] },
  { name:"Chicken Quesadillas", style:"Mexican", cost:10, minutes:20, budget:"balanced", ingredients:["chicken breast","large tortillas","shredded cheese","salsa","black beans"] },
  { name:"Black Bean Enchilada Skillet", style:"Mexican", cost:8, minutes:25, budget:"low", ingredients:["black beans","corn tortillas","enchilada sauce","corn","shredded cheese"] },
  { name:"Pork Carnitas Rice Bowls", style:"Mexican", cost:12, minutes:35, budget:"balanced", ingredients:["pork loin","rice","black beans","salsa","lime"] },

  { name:"Teriyaki Chicken Rice Bowls", style:"Asian-inspired", cost:11, minutes:25, budget:"balanced", ingredients:["chicken thighs","rice","broccoli","teriyaki sauce"] },
  { name:"Garlic Shrimp Fried Rice", style:"Asian-inspired", cost:13, minutes:20, budget:"balanced", ingredients:["shrimp","rice","frozen mixed vegetables","eggs","soy sauce","garlic"] },
  { name:"Ground Turkey Lettuce Wraps", style:"Asian-inspired", cost:10, minutes:25, budget:"balanced", ingredients:["ground turkey","lettuce","carrots","soy sauce","rice"] },
  { name:"Peanut Noodle Bowls", style:"Asian-inspired", cost:8, minutes:20, budget:"low", ingredients:["spaghetti","peanut butter","soy sauce","carrots","cucumber"] },

  { name:"Cowboy Bean Skillet", style:"Comfort", cost:9, minutes:30, budget:"low", ingredients:["ground beef","baked beans","corn","diced tomatoes","shredded cheese"] },
  { name:"Chicken Alfredo", style:"Comfort", cost:12, minutes:30, budget:"balanced", ingredients:["chicken breast","pasta","alfredo sauce","broccoli","parmesan cheese"] },
  { name:"Mississippi Chicken Sandwiches", style:"Comfort", cost:12, minutes:40, budget:"balanced", ingredients:["chicken breast","pepperoncini","ranch seasoning","hamburger buns","provolone cheese"] },
  { name:"One-Pot Chili Mac", style:"Comfort", cost:9, minutes:30, budget:"low", ingredients:["ground beef","pasta","kidney beans","diced tomatoes","shredded cheese"] }
];


const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const styles = ["all","Mediterranean","American","Italian","Mexican","Asian-inspired","Comfort"];
const styleLabels = { all:"Any style", Mediterranean:"Mediterranean", American:"American", Italian:"Italian", Mexican:"Mexican", "Asian-inspired":"Asian-inspired", Comfort:"Comfort food" };

const sideOptions = {
  Mediterranean: [
    { name:"No side", ingredients:[] },
    { name:"Greek salad", ingredients:["romaine lettuce","cucumber","tomatoes","feta cheese"] },
    { name:"Roasted lemon potatoes", ingredients:["potatoes","lemon"] },
    { name:"Pita and hummus", ingredients:["pita bread","hummus"] }
  ],
  American: [
    { name:"No side", ingredients:[] },
    { name:"Green beans", ingredients:["green beans"] },
    { name:"Roasted broccoli", ingredients:["broccoli"] },
    { name:"Bagged salad", ingredients:["bagged salad"] }
  ],
  Italian: [
    { name:"No side", ingredients:[] },
    { name:"Garlic bread", ingredients:["garlic bread"] },
    { name:"Italian salad", ingredients:["bagged salad","Italian dressing"] },
    { name:"Roasted broccoli", ingredients:["broccoli"] }
  ],
  Mexican: [
    { name:"No side", ingredients:[] },
    { name:"Chips and salsa", ingredients:["tortilla chips","salsa"] },
    { name:"Mexican-style corn", ingredients:["frozen corn","lime"] },
    { name:"Black beans", ingredients:["black beans"] }
  ],
  "Asian-inspired": [
    { name:"No side", ingredients:[] },
    { name:"Frozen egg rolls", ingredients:["frozen egg rolls"] },
    { name:"Steamed broccoli", ingredients:["broccoli"] },
    { name:"Cucumber salad", ingredients:["cucumber","rice vinegar"] }
  ],
  Comfort: [
    { name:"No side", ingredients:[] },
    { name:"Green beans", ingredients:["green beans"] },
    { name:"Bagged salad", ingredients:["bagged salad"] },
    { name:"Garlic bread", ingredients:["garlic bread"] }
  ]
};

// Baseline quantities are sized for about three servings. The app scales them
// using the Servings control and combines matching items across meals and sides.
const ingredientDetails = {
  "chicken thighs": { amount:1.5, unit:"lb", form:"boneless, skinless" },
  "chicken breast": { amount:1.5, unit:"lb", form:"boneless, skinless" },
  "pork chops": { amount:3, unit:"count", form:"fresh, about 1 inch thick" },
  "pork loin": { amount:1.5, unit:"lb", form:"fresh" },
  "ground beef": { amount:1, unit:"lb", form:"fresh" },
  "ground turkey": { amount:1, unit:"lb", form:"fresh" },
  "smoked sausage": { amount:14, unit:"oz", form:"fully cooked" },
  "shrimp": { amount:1, unit:"lb", form:"frozen, peeled and deveined" },
  "canned tuna": { amount:2, unit:"cans", form:"5 oz cans, drained" },
  "rice": { amount:1.5, unit:"cups", form:"dry" },
  "orzo": { amount:12, unit:"oz", form:"dry" },
  "pasta": { amount:12, unit:"oz", form:"dry" },
  "spaghetti": { amount:12, unit:"oz", form:"dry" },
  "large tortillas": { amount:6, unit:"count", form:"flour, burrito size" },
  "corn tortillas": { amount:8, unit:"count", form:"fresh package" },
  "pita bread": { amount:6, unit:"count", form:"fresh" },
  "flatbread": { amount:3, unit:"count", form:"naan or flatbread" },
  "hamburger buns": { amount:6, unit:"count", form:"fresh" },
  "bread": { amount:1, unit:"loaf", form:"fresh" },
  "baking potatoes": { amount:3, unit:"count", form:"large russet" },
  "potatoes": { amount:1.5, unit:"lb", form:"fresh" },
  "broccoli": { amount:12, unit:"oz", form:"fresh florets or frozen" },
  "green beans": { amount:12, unit:"oz", form:"fresh or frozen" },
  "spinach": { amount:5, unit:"oz", form:"fresh baby spinach" },
  "lettuce": { amount:1, unit:"head", form:"fresh iceberg or romaine" },
  "romaine lettuce": { amount:1, unit:"head", form:"fresh" },
  "bagged salad": { amount:1, unit:"bag", form:"fresh salad kit or greens" },
  "cucumber": { amount:1, unit:"count", form:"fresh" },
  "tomatoes": { amount:3, unit:"count", form:"fresh Roma" },
  "cherry tomatoes": { amount:1, unit:"pint", form:"fresh" },
  "carrots": { amount:3, unit:"count", form:"fresh" },
  "onion": { amount:1, unit:"count", form:"fresh" },
  "green onions": { amount:1, unit:"bunch", form:"fresh" },
  "garlic": { amount:1, unit:"bulb", form:"fresh" },
  "lemon": { amount:2, unit:"count", form:"fresh" },
  "lime": { amount:2, unit:"count", form:"fresh" },
  "frozen mixed vegetables": { amount:12, unit:"oz", form:"frozen bag" },
  "frozen corn": { amount:12, unit:"oz", form:"frozen bag" },
  "corn": { amount:1, unit:"can", form:"15 oz can, drained" },
  "black beans": { amount:1, unit:"can", form:"15 oz can, drained and rinsed" },
  "white beans": { amount:2, unit:"cans", form:"15 oz cans, drained and rinsed" },
  "kidney beans": { amount:1, unit:"can", form:"15 oz can, drained and rinsed" },
  "baked beans": { amount:1, unit:"can", form:"28 oz can" },
  "chickpeas": { amount:1, unit:"can", form:"15 oz can, drained and rinsed" },
  "diced tomatoes": { amount:1, unit:"can", form:"14.5 oz can" },
  "eggs": { amount:3, unit:"count", form:"large" },
  "plain Greek yogurt": { amount:16, unit:"oz", form:"plain" },
  "feta cheese": { amount:6, unit:"oz", form:"crumbled" },
  "shredded cheese": { amount:8, unit:"oz", form:"shredded cheddar or blend" },
  "parmesan cheese": { amount:5, unit:"oz", form:"grated or shredded" },
  "ricotta cheese": { amount:8, unit:"oz", form:"whole or part-skim" },
  "mozzarella cheese": { amount:8, unit:"oz", form:"shredded" },
  "provolone cheese": { amount:6, unit:"slices", form:"deli sliced" },
  "cream cheese": { amount:8, unit:"oz", form:"block" },
  "sour cream": { amount:8, unit:"oz", form:"tub" },
  "bacon bits": { amount:3, unit:"oz", form:"real bacon pieces" },
  "pickles": { amount:16, unit:"oz", form:"dill slices" },
  "pepperoncini": { amount:12, unit:"oz", form:"jarred, drained" },
  "peanut butter": { amount:0.5, unit:"cup", form:"creamy" },
  "barbecue sauce": { amount:12, unit:"oz", form:"bottle" },
  "sloppy joe sauce": { amount:1, unit:"can", form:"15 oz can" },
  "ranch dressing": { amount:8, unit:"oz", form:"bottle" },
  "ranch seasoning": { amount:1, unit:"packet", form:"dry seasoning mix" },
  "marinara sauce": { amount:24, unit:"oz", form:"jar" },
  "alfredo sauce": { amount:15, unit:"oz", form:"jar" },
  "enchilada sauce": { amount:10, unit:"oz", form:"can" },
  "teriyaki sauce": { amount:10, unit:"oz", form:"bottle" },
  "soy sauce": { amount:5, unit:"oz", form:"bottle" },
  "pesto": { amount:6, unit:"oz", form:"jar" },
  "salsa": { amount:16, unit:"oz", form:"jar, refrigerated or shelf-stable" },
  "Italian dressing": { amount:8, unit:"oz", form:"bottle" },
  "rice vinegar": { amount:5, unit:"oz", form:"bottle" },
  "Italian seasoning": { amount:1, unit:"jar", form:"dried seasoning" },
  "hummus": { amount:10, unit:"oz", form:"refrigerated tub" },
  "garlic bread": { amount:1, unit:"loaf", form:"frozen" },
  "tortilla chips": { amount:1, unit:"bag", form:"10–13 oz" },
  "frozen egg rolls": { amount:1, unit:"box", form:"frozen, 6 count" }
};

let selectedMeals = JSON.parse(localStorage.getItem("gb_selectedMeals") || "[]");
let checkedItems = JSON.parse(localStorage.getItem("gb_checkedItems") || "{}");
let dayPreferences = JSON.parse(localStorage.getItem("gb_dayPreferences") || "null") || days.map((day, index) => ({ day, style:index < 2 ? "Mediterranean" : "all", quick:false }));

const mealList = document.getElementById("mealList");
const groceryList = document.getElementById("groceryList");
const mealTemplate = document.getElementById("mealTemplate");
const dayPlanner = document.getElementById("dayPlanner");

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
    const row = document.createElement("div");
    row.className = "day-row";
    const dayName = document.createElement("span");
    dayName.className = "day-name";
    dayName.textContent = day;
    const select = document.createElement("select");
    select.setAttribute("aria-label", `${day} meal style`);
    styles.forEach(style => {
      const option = document.createElement("option");
      option.value = style;
      option.textContent = styleLabels[style];
      option.selected = preference.style === style;
      select.appendChild(option);
    });
    select.addEventListener("change", () => { dayPreferences[index].style = select.value; save(); });
    const quickLabel = document.createElement("label");
    quickLabel.className = "quick-toggle";
    const quick = document.createElement("input");
    quick.type = "checkbox";
    quick.checked = !!preference.quick;
    quick.setAttribute("aria-label", `Quick meal for ${day}`);
    quick.addEventListener("change", () => { dayPreferences[index].quick = quick.checked; save(); });
    const quickText = document.createElement("span");
    quickText.textContent = "Quick";
    quickLabel.append(quick, quickText);
    row.append(dayName, select, quickLabel);
    dayPlanner.appendChild(row);
  });
  save();
}

function recipeUrl(mealName) {
  return `https://www.google.com/search?q=${encodeURIComponent(mealName + " easy recipe instructions")}`;
}

function sideForMeal(meal) {
  const options = sideOptions[meal.style] || [{ name:"No side", ingredients:[] }];
  return options.find(side => side.name === meal.side) || options[0];
}

function render() {
  mealList.innerHTML = "";
  if (!selectedMeals.length) {
    mealList.innerHTML = '<div class="empty">Generate a plan to get started.</div>';
  } else {
    selectedMeals.forEach((meal, index) => {
      const node = mealTemplate.content.cloneNode(true);
      node.querySelector(".meal-day").textContent = meal.day || days[index] || `Dinner ${index + 1}`;
      node.querySelector("h3").textContent = meal.name;
      node.querySelector(".meta").textContent = `${meal.style} • about ${meal.minutes} minutes • $${meal.cost}${meal.minutes <= 30 ? " • Quick" : ""}`;
      node.querySelector(".ingredients").textContent = meal.ingredients.join(", ");
      const sideSelect = node.querySelector(".side-select");
      (sideOptions[meal.style] || []).forEach(side => {
        const option = document.createElement("option");
        option.value = side.name;
        option.textContent = side.name;
        option.selected = side.name === (meal.side || "No side");
        sideSelect.appendChild(option);
      });
      sideSelect.addEventListener("change", () => {
        selectedMeals[index].side = sideSelect.value;
        checkedItems = {};
        save();
        render();
      });
      const recipeLink = node.querySelector(".recipe-link");
      recipeLink.href = recipeUrl(meal.name);
      node.querySelector(".swap").addEventListener("click", () => swapMeal(index));
      node.querySelector(".remove").addEventListener("click", () => {
        selectedMeals.splice(index, 1);
        checkedItems = {};
        save();
        render();
      });
      mealList.appendChild(node);
    });
  }

  document.getElementById("mealTotal").textContent = selectedMeals.length ? `${selectedMeals.length} meals` : "No plan yet";
  const activeItems = groceryItems(false);
  groceryList.innerHTML = "";
  if (!activeItems.length) {
    groceryList.innerHTML = selectedMeals.length
      ? '<div class="empty">Everything is checked off. Checked items will not be sent to Reminders.</div>'
      : '<div class="empty">Your grocery list will appear here.</div>';
  } else {
    activeItems.forEach(item => {
      const row = document.createElement("label");
      row.className = "grocery-item";
      const check = document.createElement("input");
      check.type = "checkbox";
      check.setAttribute("aria-label", `Already have ${item.label}`);
      check.addEventListener("change", () => {
        checkedItems[item.key] = true;
        save();
        render();
      });
      const textWrap = document.createElement("span");
      const name = document.createElement("strong");
      name.textContent = item.label;
      const detail = document.createElement("small");
      detail.textContent = item.detail;
      textWrap.append(name, detail);
      row.append(check, textWrap);
      groceryList.appendChild(row);
    });
  }
  const hiddenCount = Object.keys(checkedItems).filter(key => checkedItems[key]).length;
  document.getElementById("itemCount").textContent = hiddenCount ? `${activeItems.length} to buy • ${hiddenCount} have` : `${activeItems.length} items`;
  document.getElementById("restoreCheckedBtn").hidden = hiddenCount === 0;
}

function shuffled(items) { return [...items].sort(() => Math.random() - 0.5); }
function budgetPool(items, budget) {
  if (budget === "low") return items.filter(meal => meal.cost <= 10);
  if (budget === "balanced") return items.filter(meal => meal.cost <= 13);
  return items;
}
function chooseMeal(preference, usedNames, budget) {
  const styleMatch = meal => preference.style === "all" || meal.style === preference.style;
  const quickMatch = meal => !preference.quick || meal.minutes <= 30;
  const unused = meal => !usedNames.has(meal.name);
  const attempts = [
    meals.filter(meal => styleMatch(meal) && quickMatch(meal) && unused(meal)),
    meals.filter(meal => styleMatch(meal) && quickMatch(meal)),
    meals.filter(meal => styleMatch(meal) && unused(meal)),
    meals.filter(meal => styleMatch(meal)),
    meals.filter(meal => quickMatch(meal) && unused(meal)),
    meals.filter(unused), meals
  ];
  for (const attempt of attempts) {
    const withinBudget = budgetPool(attempt, budget);
    const pool = withinBudget.length ? withinBudget : attempt;
    if (pool.length) return shuffled(pool)[0];
  }
  return null;
}

function swapMeal(index) {
  const current = selectedMeals[index];
  if (!current) return;
  const dayIndex = days.indexOf(current.day);
  const preference = dayPreferences[dayIndex >= 0 ? dayIndex : index] || { day:current.day, style:current.requestedStyle || "all", quick:!!current.requestedQuick };
  const budget = document.getElementById("budget").value;
  const usedNames = new Set(selectedMeals.map(meal => meal.name));
  usedNames.add(current.name);
  const replacement = chooseMeal(preference, usedNames, budget);
  if (!replacement || replacement.name === current.name) {
    alert("There are no other matching meals yet for this day. Try changing the style or turning Quick off.");
    return;
  }
  selectedMeals[index] = { ...replacement, day:current.day, requestedStyle:preference.style, requestedQuick:preference.quick, side:"No side" };
  checkedItems = {};
  save();
  render();
}

function generatePlan() {
  const count = Number(document.getElementById("mealCount").value);
  const budget = document.getElementById("budget").value;
  const usedNames = new Set();
  const plan = [];
  for (let index = 0; index < count; index += 1) {
    const preference = dayPreferences[index] || { day:days[index], style:"all", quick:false };
    const meal = chooseMeal(preference, usedNames, budget);
    if (meal) {
      usedNames.add(meal.name);
      plan.push({ ...meal, day:days[index], requestedStyle:preference.style, requestedQuick:preference.quick, side:"No side" });
    }
  }
  selectedMeals = plan;
  checkedItems = {};
  save();
  render();
}

function roundAmount(value) {
  const rounded = Math.round(value * 4) / 4;
  return Number.isInteger(rounded) ? String(rounded) : String(rounded).replace(".25", "¼").replace(".5", "½").replace(".75", "¾");
}

function groceryItems(includeChecked = false) {
  const servings = Number(document.getElementById("servings").value || 3);
  const scale = servings / 3;
  const combined = new Map();
  selectedMeals.forEach(meal => {
    const side = sideForMeal(meal);
    [...meal.ingredients, ...side.ingredients].forEach(key => {
      const base = ingredientDetails[key] || { amount:1, unit:"package", form:"check recipe" };
      const id = `${key}|${base.unit}|${base.form}`;
      if (!combined.has(id)) combined.set(id, { key:id, label:key, amount:0, unit:base.unit, form:base.form });
      combined.get(id).amount += base.amount * scale;
    });
  });
  return [...combined.values()]
    .map(item => ({ ...item, detail:`${roundAmount(item.amount)} ${item.unit} • ${item.form}` }))
    .filter(item => includeChecked || !checkedItems[item.key])
    .sort((a,b) => a.label.localeCompare(b.label));
}

function groceryText() {
  return groceryItems(false).map(item => `${item.label} — ${item.detail}`).join("\n");
}
function mealPlanText() {
  return selectedMeals.map(meal => `${meal.day}: ${meal.name}${meal.side && meal.side !== "No side" ? ` + ${meal.side}` : ""}`).join("\n");
}
function completePlanText() {
  return `Grocery Buddy Meal Plan\n${mealPlanText()}\n\nGrocery List\n${groceryText()}`;
}
async function sharePlainText(text, successLabel) {
  if (!text.trim()) { alert("There are no unchecked items to share."); return; }
  if (navigator.share) {
    try { await navigator.share({ text }); return; }
    catch (error) { if (error && error.name === "AbortError") return; }
  }
  try {
    await navigator.clipboard.writeText(text);
    alert(`${successLabel} copied. Open Shortcuts and run Add Grocery Buddy List.`);
  } catch { alert("This browser could not share or copy the list."); }
}

document.getElementById("mealCount").addEventListener("change", renderDayPlanner);
document.getElementById("servings").addEventListener("change", render);
document.getElementById("generateBtn").addEventListener("click", generatePlan);
document.getElementById("restoreCheckedBtn").addEventListener("click", () => { checkedItems = {}; save(); render(); });
document.getElementById("resetBtn").addEventListener("click", () => {
  selectedMeals = [];
  checkedItems = {};
  dayPreferences = days.map((day, index) => ({ day, style:index < 2 ? "Mediterranean" : "all", quick:false }));
  save(); renderDayPlanner(); render();
});
document.getElementById("copyBtn").addEventListener("click", async () => {
  if (!selectedMeals.length) { alert("Generate a meal plan first."); return; }
  await navigator.clipboard.writeText(completePlanText());
  alert("Complete meal plan and unchecked grocery list copied.");
});
document.getElementById("shareGroceriesBtn").addEventListener("click", () => sharePlainText(groceryText(), "Grocery list"));
document.getElementById("shareMealsBtn").addEventListener("click", () => sharePlainText(mealPlanText(), "Meal plan"));
if ("serviceWorker" in navigator) navigator.serviceWorker.register("service-worker.js");
renderDayPlanner();
render();
