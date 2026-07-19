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
    select.addEventListener("change", () => {
      dayPreferences[index].style = select.value;
      save();
    });

    const quickLabel = document.createElement("label");
    quickLabel.className = "quick-toggle";
    const quick = document.createElement("input");
    quick.type = "checkbox";
    quick.checked = !!preference.quick;
    quick.setAttribute("aria-label", `Quick meal for ${day}`);
    quick.addEventListener("change", () => {
      dayPreferences[index].quick = quick.checked;
      save();
    });
    const quickText = document.createElement("span");
    quickText.textContent = "Quick";
    quickLabel.append(quick, quickText);

    row.append(dayName, select, quickLabel);
    dayPlanner.appendChild(row);
  });
  save();
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

  document.getElementById("mealTotal").textContent = selectedMeals.length ? "Price estimate ignored" : "No plan yet";

  const allIngredients = [...new Set(selectedMeals.flatMap(meal => meal.ingredients))].sort();
  groceryList.innerHTML = "";
  if (!allIngredients.length) {
    groceryList.innerHTML = '<div class="empty">Your grocery list will appear here.</div>';
  } else {
    allIngredients.forEach(item => {
      const row = document.createElement("label");
      row.className = "grocery-item" + (checkedItems[item] ? " done" : "");
      const check = document.createElement("input");
      check.type = "checkbox";
      check.checked = !!checkedItems[item];
      check.addEventListener("change", () => {
        checkedItems[item] = check.checked;
        save();
        render();
      });
      const text = document.createElement("span");
      text.textContent = item;
      row.append(check, text);
      groceryList.appendChild(row);
    });
  }
  document.getElementById("itemCount").textContent = `${allIngredients.length} items`;
}

function shuffled(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

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
    meals.filter(unused),
    meals
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
  const preference = dayPreferences[dayIndex >= 0 ? dayIndex : index] || {
    day: current.day,
    style: current.requestedStyle || "all",
    quick: !!current.requestedQuick
  };
  const budget = document.getElementById("budget").value;
  const usedNames = new Set(selectedMeals.map(meal => meal.name));
  usedNames.add(current.name);

  const replacement = chooseMeal(preference, usedNames, budget);
  if (!replacement || replacement.name === current.name) {
    alert("There are no other matching meals yet for this day. Try changing the style or turning Quick off.");
    return;
  }

  selectedMeals[index] = {
    ...replacement,
    day: current.day,
    requestedStyle: preference.style,
    requestedQuick: preference.quick
  };
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
      plan.push({ ...meal, day:days[index], requestedStyle:preference.style, requestedQuick:preference.quick });
    }
  }

  selectedMeals = plan;
  checkedItems = {};
  save();
  render();
}

function groceryItems() {
  return [...new Set(selectedMeals.flatMap(meal => meal.ingredients))].sort();
}

function groceryText() {
  return groceryItems().join("\n");
}

function mealPlanText() {
  return selectedMeals.map(meal => `${meal.day}: ${meal.name}`).join("\n");
}

function completePlanText() {
  const mealsText = mealPlanText();
  const groceriesText = groceryText();
  return `Grocery Buddy Meal Plan\n${mealsText}\n\nGrocery List\n${groceriesText}`;
}

async function sharePlainText(text, successLabel) {
  if (!text.trim()) {
    alert("Generate a meal plan first.");
    return;
  }

  if (navigator.share) {
    try {
      // Text only is intentional. Adding a web-share title caused iPhone
      // Shortcuts to receive the title instead of the individual list lines.
      await navigator.share({ text });
      return;
    } catch (error) {
      if (error && error.name === "AbortError") return;
    }
  }

  try {
    await navigator.clipboard.writeText(text);
    alert(`${successLabel} copied. Open Shortcuts and run Add Grocery Buddy List.`);
  } catch {
    alert("This browser could not share or copy the list.");
  }
}

document.getElementById("mealCount").addEventListener("change", renderDayPlanner);
document.getElementById("generateBtn").addEventListener("click", generatePlan);

document.getElementById("resetBtn").addEventListener("click", () => {
  selectedMeals = [];
  checkedItems = {};
  dayPreferences = days.map((day, index) => ({ day, style:index < 2 ? "Mediterranean" : "all", quick:false }));
  save();
  renderDayPlanner();
  render();
});

document.getElementById("copyBtn").addEventListener("click", async () => {
  if (!selectedMeals.length) {
    alert("Generate a meal plan first.");
    return;
  }
  await navigator.clipboard.writeText(completePlanText());
  alert("Complete meal plan and grocery list copied.");
});

document.getElementById("shareGroceriesBtn").addEventListener("click", () => {
  sharePlainText(groceryText(), "Grocery list");
});

document.getElementById("shareMealsBtn").addEventListener("click", () => {
  sharePlainText(mealPlanText(), "Meal plan");
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}

renderDayPlanner();
render();
