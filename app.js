const meals = [
  {
    name: "Greek Chicken Bowls",
    style: "Mediterranean",
    cost: 13,
    minutes: 30,
    budget: "balanced",
    ingredients: ["chicken thighs", "rice", "cucumber", "tomatoes", "plain Greek yogurt", "lemon", "feta cheese"]
  },
  {
    name: "Mediterranean Chickpea Pasta",
    style: "Mediterranean",
    cost: 9,
    minutes: 25,
    budget: "low",
    ingredients: ["pasta", "chickpeas", "diced tomatoes", "spinach", "garlic", "parmesan cheese"]
  },
  {
    name: "Lemon Garlic Pork Chops",
    style: "Mediterranean",
    cost: 12,
    minutes: 30,
    budget: "balanced",
    ingredients: ["pork chops", "potatoes", "green beans", "lemon", "garlic"]
  },
  {
    name: "Shrimp Orzo Skillet",
    style: "Mediterranean",
    cost: 15,
    minutes: 25,
    budget: "flexible",
    ingredients: ["shrimp", "orzo", "spinach", "diced tomatoes", "lemon", "feta cheese"]
  },
  {
    name: "Turkey Kofta Pitas",
    style: "Mediterranean",
    cost: 12,
    minutes: 35,
    budget: "balanced",
    ingredients: ["ground turkey", "pita bread", "cucumber", "tomatoes", "plain Greek yogurt", "onion"]
  },
  {
    name: "Baked Feta White Beans",
    style: "Mediterranean",
    cost: 8,
    minutes: 30,
    budget: "low",
    ingredients: ["white beans", "feta cheese", "cherry tomatoes", "spinach", "bread"]
  },
  {
    name: "Cheeseburger Crunch Wraps",
    style: "Comfort",
    cost: 11,
    minutes: 25,
    budget: "balanced",
    ingredients: ["ground beef", "large tortillas", "shredded cheese", "lettuce", "tomatoes", "pickles"]
  },
  {
    name: "Loaded Baked Potatoes",
    style: "Comfort",
    cost: 8,
    minutes: 45,
    budget: "low",
    ingredients: ["baking potatoes", "shredded cheese", "sour cream", "bacon bits", "green onions"]
  },
  {
    name: "Creamy Sausage Pasta",
    style: "Quick",
    cost: 10,
    minutes: 25,
    budget: "balanced",
    ingredients: ["smoked sausage", "pasta", "cream cheese", "spinach", "diced tomatoes"]
  },
  {
    name: "BBQ Pork Chop Sheet Pan",
    style: "Quick",
    cost: 11,
    minutes: 35,
    budget: "balanced",
    ingredients: ["pork chops", "barbecue sauce", "potatoes", "broccoli"]
  }
];

let selectedMeals = JSON.parse(localStorage.getItem("gb_selectedMeals") || "[]");
let checkedItems = JSON.parse(localStorage.getItem("gb_checkedItems") || "{}");

const mealList = document.getElementById("mealList");
const groceryList = document.getElementById("groceryList");
const mealTemplate = document.getElementById("mealTemplate");

function save() {
  localStorage.setItem("gb_selectedMeals", JSON.stringify(selectedMeals));
  localStorage.setItem("gb_checkedItems", JSON.stringify(checkedItems));
}

function render() {
  mealList.innerHTML = "";
  if (!selectedMeals.length) {
    mealList.innerHTML = '<div class="empty">Generate a plan to get started.</div>';
  } else {
    selectedMeals.forEach((meal, index) => {
      const node = mealTemplate.content.cloneNode(true);
      node.querySelector("h3").textContent = meal.name;
      node.querySelector(".meta").textContent = `${meal.style} • about ${meal.minutes} minutes • $${meal.cost}`;
      node.querySelector(".ingredients").textContent = meal.ingredients.join(", ");
      node.querySelector(".remove").addEventListener("click", () => {
        selectedMeals.splice(index, 1);
        save();
        render();
      });
      mealList.appendChild(node);
    });
  }

  const total = selectedMeals.reduce((sum, m) => sum + m.cost, 0);
  document.getElementById("mealTotal").textContent = `$${total} estimated`;

  const allIngredients = [...new Set(selectedMeals.flatMap(m => m.ingredients))].sort();
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

function generatePlan() {
  const style = document.getElementById("styleFilter").value;
  const count = Number(document.getElementById("mealCount").value);
  const budget = document.getElementById("budget").value;

  let pool = meals.filter(m => style === "all" || m.style === style);

  if (budget === "low") {
    pool = pool.filter(m => m.cost <= 10);
  } else if (budget === "balanced") {
    pool = pool.filter(m => m.cost <= 13);
  }

  if (pool.length < count) {
    pool = meals.filter(m => style === "all" || m.style === style);
  }

  selectedMeals = [...pool].sort(() => Math.random() - 0.5).slice(0, count);
  checkedItems = {};
  save();
  render();
}

function listText() {
  const items = [...new Set(selectedMeals.flatMap(m => m.ingredients))].sort();
  const mealNames = selectedMeals.map((m, i) => `${i + 1}. ${m.name}`).join("\n");
  const groceryItems = items.map(i => `☐ ${i}`).join("\n");
  return `Grocery Buddy Meal Plan\n\n${mealNames}\n\nGrocery List\n${groceryItems}`;
}

document.getElementById("generateBtn").addEventListener("click", generatePlan);

document.getElementById("resetBtn").addEventListener("click", () => {
  selectedMeals = [];
  checkedItems = {};
  save();
  render();
});

document.getElementById("copyBtn").addEventListener("click", async () => {
  await navigator.clipboard.writeText(listText());
  alert("Grocery list copied.");
});

document.getElementById("shareBtn").addEventListener("click", async () => {
  const text = listText();
  if (navigator.share) {
    await navigator.share({ title: "Grocery Buddy", text });
  } else {
    await navigator.clipboard.writeText(text);
    alert("Sharing is not available here, so the list was copied.");
  }
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}

render();
