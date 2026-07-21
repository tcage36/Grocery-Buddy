const INGREDIENT_CATALOG = {
  "chicken thighs": {
    "label": "chicken thighs",
    "unit": "lb",
    "form": "boneless, skinless"
  },
  "chicken breast": {
    "label": "chicken breast",
    "unit": "lb",
    "form": "boneless, skinless"
  },
  "pork chops": {
    "label": "pork chops",
    "unit": "count",
    "form": "fresh, about 1 inch thick",
    "wholePurchase": true
  },
  "pork loin": {
    "label": "pork loin",
    "unit": "lb",
    "form": "fresh"
  },
  "ground beef": {
    "label": "ground beef",
    "unit": "lb",
    "form": "fresh"
  },
  "ground turkey": {
    "label": "ground turkey",
    "unit": "lb",
    "form": "fresh"
  },
  "smoked sausage": {
    "label": "smoked sausage",
    "unit": "oz",
    "form": "fully cooked",
    "packageSize": 14,
    "purchaseUnit": "package",
    "packageLabel": "14 oz package"
  },
  "shrimp": {
    "label": "shrimp",
    "unit": "lb",
    "form": "frozen, peeled and deveined"
  },
  "salmon fillets": {
    "label": "salmon fillets",
    "unit": "count",
    "form": "fresh or frozen, about 5 oz each",
    "wholePurchase": true
  },
  "canned tuna": {
    "label": "canned tuna",
    "unit": "can",
    "form": "5 oz cans, drained",
    "packageSize": 1,
    "purchaseUnit": "can",
    "packageLabel": "5 oz can"
  },
  "deli ham": {
    "label": "deli ham",
    "unit": "oz",
    "form": "sliced"
  },
  "beef strips": {
    "label": "beef strips",
    "unit": "lb",
    "form": "thin-sliced sirloin or stir-fry beef"
  },
  "frozen meatballs": {
    "label": "frozen meatballs",
    "unit": "oz",
    "form": "fully cooked",
    "packageSize": 22,
    "purchaseUnit": "bag",
    "packageLabel": "22 oz bag"
  },
  "rice": {
    "label": "rice",
    "unit": "oz",
    "form": "dry",
    "packageSize": 32,
    "purchaseUnit": "bag",
    "packageLabel": "2 lb bag"
  },
  "orzo": {
    "label": "orzo",
    "unit": "oz",
    "form": "dry",
    "packageSize": 12,
    "purchaseUnit": "box",
    "packageLabel": "12 oz box"
  },
  "pasta": {
    "label": "pasta",
    "unit": "oz",
    "form": "dry",
    "packageSize": 16,
    "purchaseUnit": "box",
    "packageLabel": "16 oz box"
  },
  "spaghetti": {
    "label": "spaghetti",
    "unit": "oz",
    "form": "dry",
    "packageSize": 16,
    "purchaseUnit": "box",
    "packageLabel": "16 oz box"
  },
  "egg noodles": {
    "label": "egg noodles",
    "unit": "oz",
    "form": "dry",
    "packageSize": 12,
    "purchaseUnit": "bag",
    "packageLabel": "12 oz bag"
  },
  "tortellini": {
    "label": "cheese tortellini",
    "unit": "oz",
    "form": "refrigerated",
    "packageSize": 20,
    "purchaseUnit": "package",
    "packageLabel": "20 oz package"
  },
  "ravioli": {
    "label": "cheese ravioli",
    "unit": "oz",
    "form": "refrigerated or frozen",
    "packageSize": 20,
    "purchaseUnit": "package",
    "packageLabel": "20 oz package"
  },
  "large tortillas": {
    "label": "large tortillas",
    "unit": "count",
    "form": "flour, burrito size",
    "packageSize": 8,
    "purchaseUnit": "package",
    "packageLabel": "8-count package",
    "plural": "large tortillas"
  },
  "corn tortillas": {
    "label": "corn tortillas",
    "unit": "count",
    "form": "fresh",
    "packageSize": 12,
    "purchaseUnit": "package",
    "packageLabel": "12-count package",
    "plural": "corn tortillas"
  },
  "pita bread": {
    "label": "pita bread",
    "unit": "count",
    "form": "fresh",
    "packageSize": 6,
    "purchaseUnit": "package",
    "packageLabel": "6-count package"
  },
  "flatbread": {
    "label": "flatbread",
    "unit": "count",
    "form": "naan or flatbread",
    "packageSize": 4,
    "purchaseUnit": "package",
    "packageLabel": "4-count package"
  },
  "hamburger buns": {
    "label": "hamburger buns",
    "unit": "count",
    "form": "fresh",
    "packageSize": 8,
    "purchaseUnit": "package",
    "packageLabel": "8-count package"
  },
  "hoagie rolls": {
    "label": "hoagie rolls",
    "unit": "count",
    "form": "fresh",
    "packageSize": 6,
    "purchaseUnit": "package",
    "packageLabel": "6-count package"
  },
  "bread": {
    "label": "bread",
    "unit": "slice",
    "form": "sandwich bread",
    "packageSize": 20,
    "purchaseUnit": "loaf",
    "packageLabel": "standard loaf"
  },
  "breadcrumbs": {
    "label": "breadcrumbs",
    "unit": "oz",
    "form": "plain or Italian",
    "packageSize": 15,
    "purchaseUnit": "container",
    "packageLabel": "15 oz container"
  },
  "biscuit dough": {
    "label": "refrigerated biscuit dough",
    "unit": "count",
    "form": "large biscuits",
    "packageSize": 8,
    "purchaseUnit": "can",
    "packageLabel": "8-count can"
  },
  "baking potatoes": {
    "label": "baking potatoes",
    "unit": "count",
    "form": "large russet",
    "wholePurchase": true
  },
  "potatoes": {
    "label": "potatoes",
    "unit": "lb",
    "form": "fresh russet, gold, or red"
  },
  "sweet potatoes": {
    "label": "sweet potatoes",
    "unit": "count",
    "form": "medium",
    "wholePurchase": true
  },
  "broccoli": {
    "label": "broccoli",
    "unit": "oz",
    "form": "fresh florets or frozen",
    "packageSize": 12,
    "purchaseUnit": "bag",
    "packageLabel": "12 oz bag"
  },
  "green beans": {
    "label": "green beans",
    "unit": "oz",
    "form": "fresh or frozen",
    "packageSize": 12,
    "purchaseUnit": "bag",
    "packageLabel": "12 oz bag"
  },
  "spinach": {
    "label": "spinach",
    "unit": "oz",
    "form": "fresh baby spinach",
    "packageSize": 5,
    "purchaseUnit": "bag",
    "packageLabel": "5 oz bag"
  },
  "lettuce": {
    "label": "lettuce",
    "unit": "head",
    "form": "fresh iceberg or romaine",
    "packageSize": 1,
    "purchaseUnit": "head",
    "packageLabel": "1 head"
  },
  "romaine lettuce": {
    "label": "romaine lettuce",
    "unit": "head",
    "form": "fresh",
    "packageSize": 1,
    "purchaseUnit": "head",
    "packageLabel": "1 head"
  },
  "bagged salad": {
    "label": "bagged salad",
    "unit": "bag",
    "form": "fresh salad kit or greens",
    "packageSize": 1,
    "purchaseUnit": "bag",
    "packageLabel": "1 bag"
  },
  "cucumber": {
    "label": "cucumber",
    "unit": "count",
    "form": "fresh",
    "wholePurchase": true,
    "plural": "cucumbers"
  },
  "tomatoes": {
    "label": "Roma tomatoes",
    "unit": "count",
    "form": "fresh",
    "wholePurchase": true,
    "plural": "Roma tomatoes"
  },
  "cherry tomatoes": {
    "label": "cherry tomatoes",
    "unit": "pint",
    "form": "fresh",
    "packageSize": 1,
    "purchaseUnit": "pint",
    "packageLabel": "1 pint"
  },
  "carrots": {
    "label": "carrots",
    "unit": "count",
    "form": "fresh",
    "wholePurchase": true
  },
  "onion": {
    "label": "yellow onion",
    "unit": "count",
    "form": "fresh",
    "wholePurchase": true,
    "plural": "yellow onions"
  },
  "red onion": {
    "label": "red onion",
    "unit": "count",
    "form": "fresh",
    "wholePurchase": true,
    "plural": "red onions"
  },
  "green onions": {
    "label": "green onions",
    "unit": "bunch",
    "form": "fresh",
    "packageSize": 1,
    "purchaseUnit": "bunch",
    "packageLabel": "1 bunch"
  },
  "garlic": {
    "label": "garlic",
    "unit": "clove",
    "form": "fresh",
    "packageSize": 10,
    "purchaseUnit": "bulb",
    "packageLabel": "about 10 cloves"
  },
  "lemon": {
    "label": "lemon",
    "unit": "count",
    "form": "fresh",
    "wholePurchase": true,
    "plural": "lemons"
  },
  "lime": {
    "label": "lime",
    "unit": "count",
    "form": "fresh",
    "wholePurchase": true,
    "plural": "limes"
  },
  "bell peppers": {
    "label": "bell peppers",
    "unit": "count",
    "form": "fresh",
    "wholePurchase": true
  },
  "mushrooms": {
    "label": "mushrooms",
    "unit": "oz",
    "form": "fresh, sliced",
    "packageSize": 8,
    "purchaseUnit": "package",
    "packageLabel": "8 oz package"
  },
  "cabbage": {
    "label": "green cabbage",
    "unit": "oz",
    "form": "fresh, shredded",
    "packageSize": 14,
    "purchaseUnit": "bag",
    "packageLabel": "14 oz slaw bag"
  },
  "avocado": {
    "label": "avocado",
    "unit": "count",
    "form": "fresh",
    "wholePurchase": true,
    "plural": "avocados"
  },
  "cilantro": {
    "label": "cilantro",
    "unit": "bunch",
    "form": "fresh",
    "packageSize": 1,
    "purchaseUnit": "bunch",
    "packageLabel": "1 bunch"
  },
  "zucchini": {
    "label": "zucchini",
    "unit": "count",
    "form": "fresh",
    "wholePurchase": true
  },
  "celery": {
    "label": "celery",
    "unit": "stalk",
    "form": "fresh",
    "packageSize": 10,
    "purchaseUnit": "bunch",
    "packageLabel": "1 bunch"
  },
  "frozen mixed vegetables": {
    "label": "mixed vegetables",
    "unit": "oz",
    "form": "frozen",
    "packageSize": 12,
    "purchaseUnit": "bag",
    "packageLabel": "12 oz bag"
  },
  "frozen corn": {
    "label": "corn",
    "unit": "oz",
    "form": "frozen",
    "packageSize": 12,
    "purchaseUnit": "bag",
    "packageLabel": "12 oz bag"
  },
  "frozen peas": {
    "label": "peas",
    "unit": "oz",
    "form": "frozen",
    "packageSize": 12,
    "purchaseUnit": "bag",
    "packageLabel": "12 oz bag"
  },
  "corn": {
    "label": "corn",
    "unit": "can",
    "form": "15 oz can, drained",
    "packageSize": 1,
    "purchaseUnit": "can",
    "packageLabel": "15 oz can"
  },
  "black beans": {
    "label": "black beans",
    "unit": "can",
    "form": "15 oz can, drained and rinsed",
    "packageSize": 1,
    "purchaseUnit": "can",
    "packageLabel": "15 oz can"
  },
  "white beans": {
    "label": "white beans",
    "unit": "can",
    "form": "15 oz can, drained and rinsed",
    "packageSize": 1,
    "purchaseUnit": "can",
    "packageLabel": "15 oz can"
  },
  "kidney beans": {
    "label": "kidney beans",
    "unit": "can",
    "form": "15 oz can, drained and rinsed",
    "packageSize": 1,
    "purchaseUnit": "can",
    "packageLabel": "15 oz can"
  },
  "baked beans": {
    "label": "baked beans",
    "unit": "can",
    "form": "28 oz can",
    "packageSize": 1,
    "purchaseUnit": "can",
    "packageLabel": "28 oz can"
  },
  "chickpeas": {
    "label": "chickpeas",
    "unit": "can",
    "form": "15 oz can, drained and rinsed",
    "packageSize": 1,
    "purchaseUnit": "can",
    "packageLabel": "15 oz can"
  },
  "diced tomatoes": {
    "label": "diced tomatoes",
    "unit": "can",
    "form": "14.5 oz can",
    "packageSize": 1,
    "purchaseUnit": "can",
    "packageLabel": "14.5 oz can"
  },
  "crushed tomatoes": {
    "label": "crushed tomatoes",
    "unit": "oz",
    "form": "canned",
    "packageSize": 28,
    "purchaseUnit": "can",
    "packageLabel": "28 oz can"
  },
  "tomato sauce": {
    "label": "tomato sauce",
    "unit": "oz",
    "form": "canned",
    "packageSize": 15,
    "purchaseUnit": "can",
    "packageLabel": "15 oz can"
  },
  "beef broth": {
    "label": "beef broth",
    "unit": "oz",
    "form": "carton",
    "packageSize": 32,
    "purchaseUnit": "carton",
    "packageLabel": "32 oz carton"
  },
  "chicken broth": {
    "label": "chicken broth",
    "unit": "oz",
    "form": "carton",
    "packageSize": 32,
    "purchaseUnit": "carton",
    "packageLabel": "32 oz carton"
  },
  "cream mushroom soup": {
    "label": "cream of mushroom soup",
    "unit": "can",
    "form": "10.5 oz can",
    "packageSize": 1,
    "purchaseUnit": "can",
    "packageLabel": "10.5 oz can"
  },
  "eggs": {
    "label": "eggs",
    "unit": "count",
    "form": "large",
    "packageSize": 12,
    "purchaseUnit": "dozen",
    "packageLabel": "12-count carton"
  },
  "plain Greek yogurt": {
    "label": "plain Greek yogurt",
    "unit": "oz",
    "form": "plain",
    "packageSize": 16,
    "purchaseUnit": "tub",
    "packageLabel": "16 oz tub"
  },
  "feta cheese": {
    "label": "feta cheese",
    "unit": "oz",
    "form": "crumbled",
    "packageSize": 6,
    "purchaseUnit": "container",
    "packageLabel": "6 oz container"
  },
  "shredded cheese": {
    "label": "shredded cheese",
    "unit": "oz",
    "form": "cheddar or Mexican blend",
    "packageSize": 8,
    "purchaseUnit": "bag",
    "packageLabel": "8 oz bag"
  },
  "parmesan cheese": {
    "label": "Parmesan cheese",
    "unit": "oz",
    "form": "grated or shredded",
    "packageSize": 5,
    "purchaseUnit": "container",
    "packageLabel": "5 oz container"
  },
  "ricotta cheese": {
    "label": "ricotta cheese",
    "unit": "oz",
    "form": "whole or part-skim",
    "packageSize": 15,
    "purchaseUnit": "tub",
    "packageLabel": "15 oz tub"
  },
  "mozzarella cheese": {
    "label": "mozzarella cheese",
    "unit": "oz",
    "form": "shredded",
    "packageSize": 8,
    "purchaseUnit": "bag",
    "packageLabel": "8 oz bag"
  },
  "provolone cheese": {
    "label": "provolone cheese",
    "unit": "slice",
    "form": "deli sliced",
    "packageSize": 8,
    "purchaseUnit": "package",
    "packageLabel": "8-slice package"
  },
  "cream cheese": {
    "label": "cream cheese",
    "unit": "oz",
    "form": "block",
    "packageSize": 8,
    "purchaseUnit": "block",
    "packageLabel": "8 oz block"
  },
  "sour cream": {
    "label": "sour cream",
    "unit": "oz",
    "form": "tub",
    "packageSize": 8,
    "purchaseUnit": "tub",
    "packageLabel": "8 oz tub"
  },
  "butter": {
    "label": "butter",
    "unit": "tbsp",
    "form": "salted or unsalted",
    "packageSize": 32,
    "purchaseUnit": "box",
    "packageLabel": "1 lb box"
  },
  "milk": {
    "label": "milk",
    "unit": "oz",
    "form": "dairy milk",
    "packageSize": 128,
    "purchaseUnit": "gallon",
    "packageLabel": "1 gallon"
  },
  "bacon bits": {
    "label": "bacon pieces",
    "unit": "oz",
    "form": "real bacon pieces",
    "packageSize": 3,
    "purchaseUnit": "bag",
    "packageLabel": "3 oz bag"
  },
  "pickles": {
    "label": "dill pickle slices",
    "unit": "oz",
    "form": "jarred",
    "packageSize": 16,
    "purchaseUnit": "jar",
    "packageLabel": "16 oz jar"
  },
  "pepperoncini": {
    "label": "pepperoncini",
    "unit": "oz",
    "form": "jarred, drained",
    "packageSize": 12,
    "purchaseUnit": "jar",
    "packageLabel": "12 oz jar"
  },
  "peanut butter": {
    "label": "peanut butter",
    "unit": "oz",
    "form": "creamy",
    "packageSize": 16,
    "purchaseUnit": "jar",
    "packageLabel": "16 oz jar"
  },
  "barbecue sauce": {
    "label": "barbecue sauce",
    "unit": "oz",
    "form": "bottled",
    "packageSize": 18,
    "purchaseUnit": "bottle",
    "packageLabel": "18 oz bottle"
  },
  "sloppy joe sauce": {
    "label": "sloppy joe sauce",
    "unit": "can",
    "form": "15 oz can",
    "packageSize": 1,
    "purchaseUnit": "can",
    "packageLabel": "15 oz can"
  },
  "ranch dressing": {
    "label": "ranch dressing",
    "unit": "oz",
    "form": "bottled",
    "packageSize": 16,
    "purchaseUnit": "bottle",
    "packageLabel": "16 oz bottle"
  },
  "ranch seasoning": {
    "label": "ranch seasoning",
    "unit": "packet",
    "form": "dry mix",
    "packageSize": 1,
    "purchaseUnit": "packet",
    "packageLabel": "1 packet"
  },
  "marinara sauce": {
    "label": "marinara sauce",
    "unit": "oz",
    "form": "jarred",
    "packageSize": 24,
    "purchaseUnit": "jar",
    "packageLabel": "24 oz jar"
  },
  "alfredo sauce": {
    "label": "Alfredo sauce",
    "unit": "oz",
    "form": "jarred",
    "packageSize": 15,
    "purchaseUnit": "jar",
    "packageLabel": "15 oz jar"
  },
  "enchilada sauce": {
    "label": "enchilada sauce",
    "unit": "oz",
    "form": "canned",
    "packageSize": 10,
    "purchaseUnit": "can",
    "packageLabel": "10 oz can"
  },
  "teriyaki sauce": {
    "label": "teriyaki sauce",
    "unit": "oz",
    "form": "bottled",
    "packageSize": 12,
    "purchaseUnit": "bottle",
    "packageLabel": "12 oz bottle"
  },
  "soy sauce": {
    "label": "soy sauce",
    "unit": "tbsp",
    "form": "bottled",
    "packageSize": 32,
    "purchaseUnit": "bottle",
    "packageLabel": "16 oz bottle"
  },
  "pesto": {
    "label": "pesto",
    "unit": "oz",
    "form": "jarred",
    "packageSize": 6,
    "purchaseUnit": "jar",
    "packageLabel": "6 oz jar"
  },
  "salsa": {
    "label": "salsa",
    "unit": "oz",
    "form": "jarred",
    "packageSize": 16,
    "purchaseUnit": "jar",
    "packageLabel": "16 oz jar"
  },
  "salsa verde": {
    "label": "salsa verde",
    "unit": "oz",
    "form": "jarred",
    "packageSize": 16,
    "purchaseUnit": "jar",
    "packageLabel": "16 oz jar"
  },
  "Italian dressing": {
    "label": "Italian dressing",
    "unit": "oz",
    "form": "bottled",
    "packageSize": 16,
    "purchaseUnit": "bottle",
    "packageLabel": "16 oz bottle"
  },
  "rice vinegar": {
    "label": "rice vinegar",
    "unit": "tbsp",
    "form": "bottled",
    "packageSize": 32,
    "purchaseUnit": "bottle",
    "packageLabel": "16 oz bottle"
  },
  "hummus": {
    "label": "hummus",
    "unit": "oz",
    "form": "refrigerated",
    "packageSize": 10,
    "purchaseUnit": "tub",
    "packageLabel": "10 oz tub"
  },
  "sweet chili sauce": {
    "label": "sweet chili sauce",
    "unit": "oz",
    "form": "bottled",
    "packageSize": 12,
    "purchaseUnit": "bottle",
    "packageLabel": "12 oz bottle"
  },
  "honey": {
    "label": "honey",
    "unit": "tbsp",
    "form": "bottled",
    "packageSize": 22,
    "purchaseUnit": "bottle",
    "packageLabel": "12 oz bottle"
  },
  "mustard": {
    "label": "yellow mustard",
    "unit": "tbsp",
    "form": "bottled",
    "packageSize": 24,
    "purchaseUnit": "bottle",
    "packageLabel": "12 oz bottle"
  },
  "Worcestershire sauce": {
    "label": "Worcestershire sauce",
    "unit": "tbsp",
    "form": "bottled",
    "packageSize": 24,
    "purchaseUnit": "bottle",
    "packageLabel": "10 oz bottle"
  },
  "mayonnaise": {
    "label": "mayonnaise",
    "unit": "oz",
    "form": "jarred",
    "packageSize": 15,
    "purchaseUnit": "jar",
    "packageLabel": "15 oz jar"
  },
  "ketchup": {
    "label": "ketchup",
    "unit": "oz",
    "form": "bottled",
    "packageSize": 20,
    "purchaseUnit": "bottle",
    "packageLabel": "20 oz bottle"
  },
  "olive oil": {
    "label": "olive oil",
    "unit": "tbsp",
    "form": "extra-virgin or regular",
    "packageSize": 34,
    "purchaseUnit": "bottle",
    "packageLabel": "17 oz bottle"
  },
  "salt": {
    "label": "salt",
    "unit": "tsp",
    "form": "table or kosher",
    "packageSize": 122,
    "purchaseUnit": "container",
    "packageLabel": "26 oz container"
  },
  "black pepper": {
    "label": "black pepper",
    "unit": "tsp",
    "form": "ground",
    "packageSize": 24,
    "purchaseUnit": "jar",
    "packageLabel": "small jar"
  },
  "Italian seasoning": {
    "label": "Italian seasoning",
    "unit": "tsp",
    "form": "dried",
    "packageSize": 20,
    "purchaseUnit": "jar",
    "packageLabel": "small jar"
  },
  "taco seasoning": {
    "label": "taco seasoning",
    "unit": "packet",
    "form": "dry mix",
    "packageSize": 1,
    "purchaseUnit": "packet",
    "packageLabel": "1 packet"
  },
  "cumin": {
    "label": "ground cumin",
    "unit": "tsp",
    "form": "dried",
    "packageSize": 20,
    "purchaseUnit": "jar",
    "packageLabel": "small jar"
  },
  "paprika": {
    "label": "paprika",
    "unit": "tsp",
    "form": "dried",
    "packageSize": 20,
    "purchaseUnit": "jar",
    "packageLabel": "small jar"
  },
  "oregano": {
    "label": "dried oregano",
    "unit": "tsp",
    "form": "dried",
    "packageSize": 20,
    "purchaseUnit": "jar",
    "packageLabel": "small jar"
  },
  "garlic powder": {
    "label": "garlic powder",
    "unit": "tsp",
    "form": "dried",
    "packageSize": 24,
    "purchaseUnit": "jar",
    "packageLabel": "small jar"
  },
  "chili powder": {
    "label": "chili powder",
    "unit": "tsp",
    "form": "dried",
    "packageSize": 20,
    "purchaseUnit": "jar",
    "packageLabel": "small jar"
  },
  "cornstarch": {
    "label": "cornstarch",
    "unit": "tbsp",
    "form": "dry",
    "packageSize": 32,
    "purchaseUnit": "box",
    "packageLabel": "16 oz box"
  },
  "flour": {
    "label": "all-purpose flour",
    "unit": "tbsp",
    "form": "dry",
    "packageSize": 64,
    "purchaseUnit": "bag",
    "packageLabel": "5 lb bag"
  },
  "garlic bread": {
    "label": "garlic bread",
    "unit": "loaf",
    "form": "frozen",
    "packageSize": 1,
    "purchaseUnit": "loaf",
    "packageLabel": "1 loaf"
  },
  "tortilla chips": {
    "label": "tortilla chips",
    "unit": "bag",
    "form": "10–13 oz bag",
    "packageSize": 1,
    "purchaseUnit": "bag",
    "packageLabel": "1 bag"
  },
  "frozen egg rolls": {
    "label": "egg rolls",
    "unit": "box",
    "form": "frozen, 6 count",
    "packageSize": 1,
    "purchaseUnit": "box",
    "packageLabel": "6-count box"
  }
};

const RECIPES = [
  {
    "name": "Greek Chicken Bowls",
    "style": "Mediterranean",
    "cost": 13,
    "minutes": 30,
    "budget": "balanced",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "chicken thighs",
        "amount": 1.25
      },
      {
        "key": "rice",
        "amount": 6
      },
      {
        "key": "cucumber",
        "amount": 1
      },
      {
        "key": "tomatoes",
        "amount": 2
      },
      {
        "key": "plain Greek yogurt",
        "amount": 6
      },
      {
        "key": "lemon",
        "amount": 1
      },
      {
        "key": "feta cheese",
        "amount": 3
      },
      {
        "key": "garlic",
        "amount": 2
      },
      {
        "key": "olive oil",
        "amount": 1
      },
      {
        "key": "oregano",
        "amount": 1
      },
      {
        "key": "salt",
        "amount": 0.5
      },
      {
        "key": "black pepper",
        "amount": 0.25
      }
    ],
    "instructions": [
      "Cook the rice according to its package directions.",
      "Cut the chicken into bite-size pieces. Toss with olive oil, oregano, half the lemon juice, garlic, salt, and pepper.",
      "Cook the chicken in a large skillet over medium-high heat until browned and cooked through, about 8–10 minutes.",
      "Stir the remaining lemon juice into the yogurt. Divide rice, chicken, chopped cucumber, tomatoes, feta, and yogurt sauce among bowls."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Mediterranean Chickpea Pasta",
    "style": "Mediterranean",
    "cost": 9,
    "minutes": 25,
    "budget": "low",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "pasta",
        "amount": 10
      },
      {
        "key": "chickpeas",
        "amount": 1
      },
      {
        "key": "diced tomatoes",
        "amount": 1
      },
      {
        "key": "spinach",
        "amount": 4
      },
      {
        "key": "garlic",
        "amount": 2
      },
      {
        "key": "parmesan cheese",
        "amount": 2
      },
      {
        "key": "olive oil",
        "amount": 1
      },
      {
        "key": "Italian seasoning",
        "amount": 1
      },
      {
        "key": "salt",
        "amount": 0.5
      },
      {
        "key": "black pepper",
        "amount": 0.25
      }
    ],
    "instructions": [
      "Boil the pasta until al dente; reserve 1/2 cup pasta water and drain.",
      "Warm olive oil in the pot. Cook garlic for 30 seconds, then add chickpeas, tomatoes, Italian seasoning, salt, and pepper. Simmer 5 minutes.",
      "Stir in spinach until wilted. Add pasta and enough reserved water to loosen the sauce.",
      "Serve with Parmesan."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Lemon Garlic Pork Chops",
    "style": "Mediterranean",
    "cost": 12,
    "minutes": 30,
    "budget": "balanced",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "pork chops",
        "amount": 3
      },
      {
        "key": "potatoes",
        "amount": 1.25
      },
      {
        "key": "green beans",
        "amount": 10
      },
      {
        "key": "lemon",
        "amount": 1
      },
      {
        "key": "garlic",
        "amount": 3
      },
      {
        "key": "olive oil",
        "amount": 2
      },
      {
        "key": "oregano",
        "amount": 1
      },
      {
        "key": "salt",
        "amount": 0.75
      },
      {
        "key": "black pepper",
        "amount": 0.5
      }
    ],
    "instructions": [
      "Heat the oven to 425°F. Cut potatoes into small wedges and place on a sheet pan with 1 tablespoon oil, half the salt, and half the oregano. Roast 12 minutes.",
      "Add green beans to the pan. Rub pork chops with remaining oil, garlic, oregano, salt, pepper, and half the lemon juice.",
      "Place chops on the pan and roast 12–15 minutes, until the pork reaches 145°F and the potatoes are tender.",
      "Rest pork 3 minutes and finish everything with the remaining lemon juice."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Shrimp Orzo Skillet",
    "style": "Mediterranean",
    "cost": 15,
    "minutes": 25,
    "budget": "flexible",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "shrimp",
        "amount": 1
      },
      {
        "key": "orzo",
        "amount": 8
      },
      {
        "key": "spinach",
        "amount": 4
      },
      {
        "key": "diced tomatoes",
        "amount": 1
      },
      {
        "key": "lemon",
        "amount": 1
      },
      {
        "key": "feta cheese",
        "amount": 3
      },
      {
        "key": "garlic",
        "amount": 2
      },
      {
        "key": "chicken broth",
        "amount": 16
      },
      {
        "key": "olive oil",
        "amount": 1
      },
      {
        "key": "salt",
        "amount": 0.5
      },
      {
        "key": "black pepper",
        "amount": 0.25
      }
    ],
    "instructions": [
      "Heat olive oil in a deep skillet. Cook garlic for 30 seconds, then stir in orzo.",
      "Add tomatoes and broth. Simmer uncovered, stirring often, until the orzo is nearly tender, about 10 minutes.",
      "Add shrimp and cook 3–4 minutes, until pink and opaque. Stir in spinach until wilted.",
      "Finish with lemon juice, feta, salt, and pepper."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Turkey Kofta Pitas",
    "style": "Mediterranean",
    "cost": 12,
    "minutes": 35,
    "budget": "balanced",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "ground turkey",
        "amount": 1
      },
      {
        "key": "pita bread",
        "amount": 3
      },
      {
        "key": "cucumber",
        "amount": 1
      },
      {
        "key": "tomatoes",
        "amount": 2
      },
      {
        "key": "plain Greek yogurt",
        "amount": 6
      },
      {
        "key": "onion",
        "amount": 0.5
      },
      {
        "key": "garlic",
        "amount": 2
      },
      {
        "key": "lemon",
        "amount": 1
      },
      {
        "key": "cumin",
        "amount": 1
      },
      {
        "key": "oregano",
        "amount": 1
      },
      {
        "key": "olive oil",
        "amount": 1
      },
      {
        "key": "salt",
        "amount": 0.75
      },
      {
        "key": "black pepper",
        "amount": 0.25
      }
    ],
    "instructions": [
      "Mix turkey with grated onion, half the garlic, cumin, oregano, 1/2 teaspoon salt, and pepper. Shape into 6 small oblong patties.",
      "Heat olive oil in a skillet and cook kofta 4–5 minutes per side, until cooked through.",
      "Mix yogurt with remaining garlic, half the lemon juice, and a pinch of salt.",
      "Warm pitas and fill with kofta, chopped cucumber, tomatoes, and yogurt sauce."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Baked Feta White Beans",
    "style": "Mediterranean",
    "cost": 8,
    "minutes": 30,
    "budget": "low",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "white beans",
        "amount": 2
      },
      {
        "key": "feta cheese",
        "amount": 6
      },
      {
        "key": "cherry tomatoes",
        "amount": 1
      },
      {
        "key": "spinach",
        "amount": 4
      },
      {
        "key": "bread",
        "amount": 6
      },
      {
        "key": "garlic",
        "amount": 2
      },
      {
        "key": "olive oil",
        "amount": 1
      },
      {
        "key": "oregano",
        "amount": 1
      },
      {
        "key": "black pepper",
        "amount": 0.25
      }
    ],
    "instructions": [
      "Heat the oven to 400°F. Add drained beans, tomatoes, garlic, olive oil, oregano, and pepper to a baking dish.",
      "Place the block or crumbled feta in the center and bake 20 minutes, until tomatoes soften.",
      "Stir everything together, then fold in spinach until wilted.",
      "Toast the bread and serve alongside the beans."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Mediterranean Tuna Pitas",
    "style": "Mediterranean",
    "cost": 9,
    "minutes": 15,
    "budget": "low",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "canned tuna",
        "amount": 2
      },
      {
        "key": "pita bread",
        "amount": 3
      },
      {
        "key": "cucumber",
        "amount": 1
      },
      {
        "key": "tomatoes",
        "amount": 2
      },
      {
        "key": "plain Greek yogurt",
        "amount": 4
      },
      {
        "key": "lemon",
        "amount": 1
      },
      {
        "key": "red onion",
        "amount": 0.25
      },
      {
        "key": "olive oil",
        "amount": 0.5
      },
      {
        "key": "salt",
        "amount": 0.25
      },
      {
        "key": "black pepper",
        "amount": 0.25
      }
    ],
    "instructions": [
      "Drain tuna well. Mix with yogurt, olive oil, lemon juice, finely chopped red onion, salt, and pepper.",
      "Chop cucumber and tomatoes.",
      "Warm or toast the pitas, cut them open, and fill with tuna salad and vegetables."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Chicken Souvlaki Flatbreads",
    "style": "Mediterranean",
    "cost": 12,
    "minutes": 25,
    "budget": "balanced",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "chicken breast",
        "amount": 1.25
      },
      {
        "key": "flatbread",
        "amount": 3
      },
      {
        "key": "cucumber",
        "amount": 1
      },
      {
        "key": "tomatoes",
        "amount": 2
      },
      {
        "key": "plain Greek yogurt",
        "amount": 6
      },
      {
        "key": "lemon",
        "amount": 1
      },
      {
        "key": "garlic",
        "amount": 2
      },
      {
        "key": "olive oil",
        "amount": 1
      },
      {
        "key": "oregano",
        "amount": 1
      },
      {
        "key": "salt",
        "amount": 0.5
      },
      {
        "key": "black pepper",
        "amount": 0.25
      }
    ],
    "instructions": [
      "Slice chicken thinly. Toss with olive oil, oregano, half the garlic, half the lemon juice, salt, and pepper.",
      "Cook chicken in a hot skillet for 6–8 minutes, until browned and cooked through.",
      "Mix yogurt with remaining garlic and lemon juice.",
      "Warm flatbreads and top with chicken, chopped cucumber, tomatoes, and yogurt sauce."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Cheeseburger Crunch Wraps",
    "style": "American",
    "cost": 11,
    "minutes": 25,
    "budget": "balanced",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "ground beef",
        "amount": 1
      },
      {
        "key": "large tortillas",
        "amount": 3
      },
      {
        "key": "shredded cheese",
        "amount": 4
      },
      {
        "key": "lettuce",
        "amount": 0.25
      },
      {
        "key": "tomatoes",
        "amount": 1
      },
      {
        "key": "pickles",
        "amount": 4
      },
      {
        "key": "ketchup",
        "amount": 2
      },
      {
        "key": "mustard",
        "amount": 1
      },
      {
        "key": "salt",
        "amount": 0.5
      },
      {
        "key": "black pepper",
        "amount": 0.25
      }
    ],
    "instructions": [
      "Brown the beef in a skillet with salt and pepper; drain excess fat. Stir in ketchup and mustard.",
      "Place beef, cheese, chopped pickles, tomato, and lettuce in the center of each tortilla.",
      "Fold the tortilla edges toward the center to form a closed round packet.",
      "Cook seam-side down in a dry skillet for 2–3 minutes per side, until crisp and sealed."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Loaded Baked Potatoes",
    "style": "American",
    "cost": 8,
    "minutes": 45,
    "budget": "low",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "baking potatoes",
        "amount": 3
      },
      {
        "key": "shredded cheese",
        "amount": 4
      },
      {
        "key": "sour cream",
        "amount": 4
      },
      {
        "key": "bacon bits",
        "amount": 2
      },
      {
        "key": "green onions",
        "amount": 0.5
      },
      {
        "key": "butter",
        "amount": 2
      },
      {
        "key": "salt",
        "amount": 0.5
      },
      {
        "key": "black pepper",
        "amount": 0.25
      }
    ],
    "instructions": [
      "Heat the oven to 425°F. Scrub potatoes, pierce with a fork, and bake directly on the rack for 40–50 minutes until soft.",
      "Split each potato and fluff the inside with butter, salt, and pepper.",
      "Top with cheese, sour cream, bacon pieces, and sliced green onions."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "BBQ Pork Chop Sheet Pan",
    "style": "American",
    "cost": 11,
    "minutes": 35,
    "budget": "balanced",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "pork chops",
        "amount": 3
      },
      {
        "key": "barbecue sauce",
        "amount": 6
      },
      {
        "key": "potatoes",
        "amount": 1.25
      },
      {
        "key": "broccoli",
        "amount": 10
      },
      {
        "key": "olive oil",
        "amount": 1.5
      },
      {
        "key": "salt",
        "amount": 0.5
      },
      {
        "key": "black pepper",
        "amount": 0.25
      }
    ],
    "instructions": [
      "Heat the oven to 425°F. Toss diced potatoes with 1 tablespoon oil, salt, and pepper. Roast 12 minutes.",
      "Add broccoli tossed with remaining oil. Place pork chops on the pan and brush with half the barbecue sauce.",
      "Roast 12–15 minutes, until pork reaches 145°F. Brush with remaining sauce and rest 3 minutes."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Turkey Sloppy Joes",
    "style": "American",
    "cost": 9,
    "minutes": 25,
    "budget": "low",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "ground turkey",
        "amount": 1
      },
      {
        "key": "hamburger buns",
        "amount": 3
      },
      {
        "key": "sloppy joe sauce",
        "amount": 1
      },
      {
        "key": "green beans",
        "amount": 10
      },
      {
        "key": "olive oil",
        "amount": 1
      },
      {
        "key": "salt",
        "amount": 0.25
      },
      {
        "key": "black pepper",
        "amount": 0.25
      }
    ],
    "instructions": [
      "Heat olive oil in a skillet and brown the turkey, breaking it into crumbles.",
      "Stir in sloppy joe sauce and simmer 8 minutes.",
      "Steam or microwave green beans until tender; season with salt and pepper.",
      "Spoon the turkey mixture onto buns and serve with green beans."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Chicken Bacon Ranch Flatbreads",
    "style": "American",
    "cost": 12,
    "minutes": 25,
    "budget": "balanced",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "flatbread",
        "amount": 3
      },
      {
        "key": "chicken breast",
        "amount": 1
      },
      {
        "key": "bacon bits",
        "amount": 2
      },
      {
        "key": "ranch dressing",
        "amount": 4
      },
      {
        "key": "shredded cheese",
        "amount": 5
      },
      {
        "key": "green onions",
        "amount": 0.25
      },
      {
        "key": "olive oil",
        "amount": 0.5
      },
      {
        "key": "salt",
        "amount": 0.25
      },
      {
        "key": "black pepper",
        "amount": 0.25
      }
    ],
    "instructions": [
      "Heat the oven to 425°F. Cut chicken into small pieces and cook in a skillet with olive oil, salt, and pepper until done.",
      "Spread ranch dressing over the flatbreads. Top with chicken, cheese, bacon pieces, and sliced green onions.",
      "Bake directly on a sheet pan for 8–10 minutes, until crisp and melted."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Turkey Meatloaf Muffins",
    "style": "American",
    "cost": 10,
    "minutes": 35,
    "budget": "low",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "ground turkey",
        "amount": 1
      },
      {
        "key": "breadcrumbs",
        "amount": 3
      },
      {
        "key": "eggs",
        "amount": 1
      },
      {
        "key": "onion",
        "amount": 0.5
      },
      {
        "key": "ketchup",
        "amount": 4
      },
      {
        "key": "Worcestershire sauce",
        "amount": 1
      },
      {
        "key": "garlic powder",
        "amount": 1
      },
      {
        "key": "salt",
        "amount": 0.5
      },
      {
        "key": "black pepper",
        "amount": 0.25
      }
    ],
    "instructions": [
      "Heat the oven to 400°F and lightly grease 6 muffin cups.",
      "Mix turkey, breadcrumbs, egg, finely chopped onion, 2 ounces ketchup, Worcestershire, garlic powder, salt, and pepper.",
      "Divide among muffin cups and top with remaining ketchup.",
      "Bake 20–24 minutes, until the centers reach 165°F."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "BBQ Chicken Stuffed Sweet Potatoes",
    "style": "American",
    "cost": 11,
    "minutes": 35,
    "budget": "balanced",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "sweet potatoes",
        "amount": 3
      },
      {
        "key": "chicken breast",
        "amount": 1
      },
      {
        "key": "barbecue sauce",
        "amount": 6
      },
      {
        "key": "shredded cheese",
        "amount": 3
      },
      {
        "key": "green onions",
        "amount": 0.25
      },
      {
        "key": "olive oil",
        "amount": 0.5
      },
      {
        "key": "salt",
        "amount": 0.25
      },
      {
        "key": "black pepper",
        "amount": 0.25
      }
    ],
    "instructions": [
      "Microwave pierced sweet potatoes 7–10 minutes, turning once, until tender.",
      "Dice chicken and cook in olive oil with salt and pepper until done. Stir in barbecue sauce.",
      "Split the potatoes, fluff the centers, and fill with BBQ chicken.",
      "Top with cheese and green onions; microwave or broil briefly to melt."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Philly Cheesesteak Sloppy Joes",
    "style": "American",
    "cost": 13,
    "minutes": 30,
    "budget": "balanced",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "ground beef",
        "amount": 1
      },
      {
        "key": "hamburger buns",
        "amount": 3
      },
      {
        "key": "bell peppers",
        "amount": 1
      },
      {
        "key": "onion",
        "amount": 0.5
      },
      {
        "key": "mushrooms",
        "amount": 4
      },
      {
        "key": "provolone cheese",
        "amount": 3
      },
      {
        "key": "beef broth",
        "amount": 4
      },
      {
        "key": "Worcestershire sauce",
        "amount": 1
      },
      {
        "key": "cornstarch",
        "amount": 1
      },
      {
        "key": "olive oil",
        "amount": 1
      },
      {
        "key": "salt",
        "amount": 0.5
      },
      {
        "key": "black pepper",
        "amount": 0.25
      }
    ],
    "instructions": [
      "Cook chopped pepper, onion, and mushrooms in olive oil until softened. Add beef and brown; drain if needed.",
      "Stir broth, Worcestershire, and cornstarch together, then pour into the skillet. Simmer until thickened.",
      "Season with salt and pepper. Spoon onto buns and top with provolone."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Creamy Sausage Pasta",
    "style": "Italian",
    "cost": 10,
    "minutes": 25,
    "budget": "balanced",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "smoked sausage",
        "amount": 14
      },
      {
        "key": "pasta",
        "amount": 10
      },
      {
        "key": "cream cheese",
        "amount": 4
      },
      {
        "key": "spinach",
        "amount": 4
      },
      {
        "key": "diced tomatoes",
        "amount": 1
      },
      {
        "key": "garlic",
        "amount": 2
      },
      {
        "key": "chicken broth",
        "amount": 8
      },
      {
        "key": "Italian seasoning",
        "amount": 1
      },
      {
        "key": "olive oil",
        "amount": 0.5
      },
      {
        "key": "black pepper",
        "amount": 0.25
      }
    ],
    "instructions": [
      "Boil pasta until al dente and drain.",
      "Slice sausage and brown it in olive oil. Add garlic and Italian seasoning for 30 seconds.",
      "Add tomatoes, broth, and cream cheese. Stir until smooth, then fold in spinach.",
      "Add pasta and toss until coated. Season with pepper."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Skillet Lasagna",
    "style": "Italian",
    "cost": 12,
    "minutes": 30,
    "budget": "balanced",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "ground beef",
        "amount": 1
      },
      {
        "key": "pasta",
        "amount": 10
      },
      {
        "key": "marinara sauce",
        "amount": 18
      },
      {
        "key": "ricotta cheese",
        "amount": 6
      },
      {
        "key": "mozzarella cheese",
        "amount": 5
      },
      {
        "key": "onion",
        "amount": 0.5
      },
      {
        "key": "garlic",
        "amount": 2
      },
      {
        "key": "Italian seasoning",
        "amount": 1
      },
      {
        "key": "salt",
        "amount": 0.5
      },
      {
        "key": "black pepper",
        "amount": 0.25
      }
    ],
    "instructions": [
      "Brown beef and chopped onion in a deep skillet. Add garlic, Italian seasoning, salt, and pepper.",
      "Stir in marinara, 2 cups water, and dry pasta. Cover and simmer, stirring occasionally, until pasta is tender.",
      "Drop spoonfuls of ricotta over the pasta and sprinkle with mozzarella. Cover 3 minutes to melt."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Pesto Chicken Pasta",
    "style": "Italian",
    "cost": 13,
    "minutes": 25,
    "budget": "balanced",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "chicken breast",
        "amount": 1.25
      },
      {
        "key": "pasta",
        "amount": 10
      },
      {
        "key": "pesto",
        "amount": 4
      },
      {
        "key": "cherry tomatoes",
        "amount": 1
      },
      {
        "key": "parmesan cheese",
        "amount": 2
      },
      {
        "key": "olive oil",
        "amount": 1
      },
      {
        "key": "salt",
        "amount": 0.5
      },
      {
        "key": "black pepper",
        "amount": 0.25
      }
    ],
    "instructions": [
      "Boil pasta until al dente; reserve 1/2 cup pasta water and drain.",
      "Cut chicken into small pieces, season with salt and pepper, and cook in olive oil until browned and done.",
      "Add tomatoes and cook 2 minutes. Stir in pasta, pesto, and enough reserved water to coat.",
      "Serve with Parmesan."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Italian White Bean Soup",
    "style": "Italian",
    "cost": 8,
    "minutes": 30,
    "budget": "low",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "white beans",
        "amount": 2
      },
      {
        "key": "diced tomatoes",
        "amount": 1
      },
      {
        "key": "spinach",
        "amount": 4
      },
      {
        "key": "carrots",
        "amount": 2
      },
      {
        "key": "onion",
        "amount": 0.5
      },
      {
        "key": "garlic",
        "amount": 2
      },
      {
        "key": "chicken broth",
        "amount": 24
      },
      {
        "key": "Italian seasoning",
        "amount": 1
      },
      {
        "key": "olive oil",
        "amount": 1
      },
      {
        "key": "bread",
        "amount": 6
      },
      {
        "key": "salt",
        "amount": 0.5
      },
      {
        "key": "black pepper",
        "amount": 0.25
      }
    ],
    "instructions": [
      "Cook chopped onion and carrots in olive oil for 5 minutes. Add garlic and Italian seasoning for 30 seconds.",
      "Add beans, tomatoes, and broth. Simmer 15 minutes.",
      "Stir in spinach until wilted. Season with salt and pepper and serve with toasted bread."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Sausage and Pepper Pasta",
    "style": "Italian",
    "cost": 11,
    "minutes": 30,
    "budget": "balanced",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "smoked sausage",
        "amount": 14
      },
      {
        "key": "pasta",
        "amount": 10
      },
      {
        "key": "bell peppers",
        "amount": 2
      },
      {
        "key": "onion",
        "amount": 0.5
      },
      {
        "key": "marinara sauce",
        "amount": 12
      },
      {
        "key": "garlic",
        "amount": 2
      },
      {
        "key": "olive oil",
        "amount": 1
      },
      {
        "key": "Italian seasoning",
        "amount": 1
      },
      {
        "key": "parmesan cheese",
        "amount": 2
      }
    ],
    "instructions": [
      "Boil pasta until al dente and drain.",
      "Slice sausage, peppers, and onion. Cook in olive oil until browned and softened.",
      "Add garlic and Italian seasoning, then stir in marinara and simmer 5 minutes.",
      "Toss with pasta and serve with Parmesan."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Tomato Spinach Tortellini",
    "style": "Italian",
    "cost": 12,
    "minutes": 20,
    "budget": "balanced",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "tortellini",
        "amount": 20
      },
      {
        "key": "diced tomatoes",
        "amount": 1
      },
      {
        "key": "spinach",
        "amount": 4
      },
      {
        "key": "cream cheese",
        "amount": 3
      },
      {
        "key": "garlic",
        "amount": 2
      },
      {
        "key": "parmesan cheese",
        "amount": 2
      },
      {
        "key": "olive oil",
        "amount": 1
      },
      {
        "key": "Italian seasoning",
        "amount": 1
      },
      {
        "key": "black pepper",
        "amount": 0.25
      }
    ],
    "instructions": [
      "Cook tortellini according to package directions and drain.",
      "Warm olive oil in the pot and cook garlic for 30 seconds. Add tomatoes, cream cheese, Italian seasoning, and pepper.",
      "Stir until creamy, fold in spinach, then return tortellini to the pot.",
      "Serve with Parmesan."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Chicken Parmesan Sheet Pan",
    "style": "Italian",
    "cost": 14,
    "minutes": 35,
    "budget": "flexible",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "chicken breast",
        "amount": 1.25
      },
      {
        "key": "breadcrumbs",
        "amount": 4
      },
      {
        "key": "eggs",
        "amount": 1
      },
      {
        "key": "marinara sauce",
        "amount": 8
      },
      {
        "key": "mozzarella cheese",
        "amount": 4
      },
      {
        "key": "parmesan cheese",
        "amount": 2
      },
      {
        "key": "broccoli",
        "amount": 10
      },
      {
        "key": "olive oil",
        "amount": 1
      },
      {
        "key": "Italian seasoning",
        "amount": 1
      },
      {
        "key": "salt",
        "amount": 0.5
      },
      {
        "key": "black pepper",
        "amount": 0.25
      }
    ],
    "instructions": [
      "Heat the oven to 425°F. Slice chicken into 3 thin cutlets.",
      "Beat the egg. Mix breadcrumbs with Parmesan and Italian seasoning. Dip chicken in egg, then crumbs, and place on an oiled sheet pan.",
      "Add broccoli tossed with remaining oil, salt, and pepper. Bake 15 minutes.",
      "Top chicken with marinara and mozzarella and bake 5–7 minutes more, until chicken reaches 165°F."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Baked Ravioli",
    "style": "Italian",
    "cost": 11,
    "minutes": 35,
    "budget": "balanced",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "ravioli",
        "amount": 20
      },
      {
        "key": "marinara sauce",
        "amount": 18
      },
      {
        "key": "mozzarella cheese",
        "amount": 6
      },
      {
        "key": "parmesan cheese",
        "amount": 2
      },
      {
        "key": "spinach",
        "amount": 3
      },
      {
        "key": "Italian seasoning",
        "amount": 1
      }
    ],
    "instructions": [
      "Heat the oven to 400°F. Spread a thin layer of marinara in a baking dish.",
      "Layer half the ravioli, half the remaining sauce, spinach, and half the mozzarella. Repeat.",
      "Sprinkle with Parmesan and Italian seasoning. Cover and bake 20 minutes, then uncover and bake 8 minutes."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Beef Taco Bowls",
    "style": "Mexican",
    "cost": 11,
    "minutes": 25,
    "budget": "balanced",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "ground beef",
        "amount": 1
      },
      {
        "key": "rice",
        "amount": 6
      },
      {
        "key": "black beans",
        "amount": 1
      },
      {
        "key": "corn",
        "amount": 1
      },
      {
        "key": "salsa",
        "amount": 6
      },
      {
        "key": "shredded cheese",
        "amount": 4
      },
      {
        "key": "taco seasoning",
        "amount": 1
      },
      {
        "key": "lime",
        "amount": 1
      }
    ],
    "instructions": [
      "Cook rice according to package directions.",
      "Brown beef in a skillet, drain if needed, and stir in taco seasoning with 1/3 cup water. Simmer 3 minutes.",
      "Warm beans and corn. Divide rice among bowls and top with beef, beans, corn, salsa, cheese, and lime."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Chicken Quesadillas",
    "style": "Mexican",
    "cost": 10,
    "minutes": 20,
    "budget": "balanced",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "chicken breast",
        "amount": 1
      },
      {
        "key": "large tortillas",
        "amount": 3
      },
      {
        "key": "shredded cheese",
        "amount": 6
      },
      {
        "key": "salsa",
        "amount": 6
      },
      {
        "key": "black beans",
        "amount": 1
      },
      {
        "key": "taco seasoning",
        "amount": 0.5
      },
      {
        "key": "olive oil",
        "amount": 0.5
      }
    ],
    "instructions": [
      "Dice chicken and cook in olive oil with taco seasoning until done.",
      "Place cheese, chicken, and drained beans on half of each tortilla. Fold closed.",
      "Cook in a dry skillet 2–3 minutes per side until golden and melted.",
      "Cut into wedges and serve with salsa."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Black Bean Enchilada Skillet",
    "style": "Mexican",
    "cost": 8,
    "minutes": 25,
    "budget": "low",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "black beans",
        "amount": 2
      },
      {
        "key": "corn tortillas",
        "amount": 6
      },
      {
        "key": "enchilada sauce",
        "amount": 10
      },
      {
        "key": "corn",
        "amount": 1
      },
      {
        "key": "shredded cheese",
        "amount": 5
      },
      {
        "key": "onion",
        "amount": 0.5
      },
      {
        "key": "olive oil",
        "amount": 1
      },
      {
        "key": "cumin",
        "amount": 1
      }
    ],
    "instructions": [
      "Cook chopped onion in olive oil until softened. Stir in beans, corn, cumin, and half the enchilada sauce.",
      "Cut tortillas into strips and fold them into the skillet with remaining sauce.",
      "Top with cheese, cover, and cook over low heat 5 minutes until melted and heated through."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Pork Carnitas Rice Bowls",
    "style": "Mexican",
    "cost": 12,
    "minutes": 35,
    "budget": "balanced",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "pork loin",
        "amount": 1.25
      },
      {
        "key": "rice",
        "amount": 6
      },
      {
        "key": "black beans",
        "amount": 1
      },
      {
        "key": "salsa",
        "amount": 6
      },
      {
        "key": "lime",
        "amount": 1
      },
      {
        "key": "onion",
        "amount": 0.5
      },
      {
        "key": "cumin",
        "amount": 1
      },
      {
        "key": "chili powder",
        "amount": 1
      },
      {
        "key": "olive oil",
        "amount": 1
      },
      {
        "key": "salt",
        "amount": 0.5
      }
    ],
    "instructions": [
      "Cook rice according to package directions.",
      "Cut pork into small pieces and toss with cumin, chili powder, and salt. Brown in olive oil until cooked through.",
      "Add chopped onion and 1/4 cup water. Cook until onion softens and pork edges crisp.",
      "Serve over rice with beans, salsa, and lime."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Turkey Taco Skillet",
    "style": "Mexican",
    "cost": 9,
    "minutes": 25,
    "budget": "low",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "ground turkey",
        "amount": 1
      },
      {
        "key": "black beans",
        "amount": 1
      },
      {
        "key": "corn",
        "amount": 1
      },
      {
        "key": "diced tomatoes",
        "amount": 1
      },
      {
        "key": "shredded cheese",
        "amount": 4
      },
      {
        "key": "taco seasoning",
        "amount": 1
      },
      {
        "key": "olive oil",
        "amount": 1
      },
      {
        "key": "tortilla chips",
        "amount": 0.5
      }
    ],
    "instructions": [
      "Brown turkey in olive oil. Stir in taco seasoning.",
      "Add beans, corn, and tomatoes. Simmer 8 minutes.",
      "Top with cheese, cover until melted, and serve with tortilla chips."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Salsa Verde Chicken Tostadas",
    "style": "Mexican",
    "cost": 11,
    "minutes": 25,
    "budget": "balanced",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "chicken breast",
        "amount": 1
      },
      {
        "key": "corn tortillas",
        "amount": 6
      },
      {
        "key": "salsa verde",
        "amount": 8
      },
      {
        "key": "black beans",
        "amount": 1
      },
      {
        "key": "shredded cheese",
        "amount": 4
      },
      {
        "key": "lettuce",
        "amount": 0.25
      },
      {
        "key": "tomatoes",
        "amount": 1
      },
      {
        "key": "olive oil",
        "amount": 1
      }
    ],
    "instructions": [
      "Heat the oven to 425°F. Brush tortillas lightly with oil and bake 5–7 minutes per side until crisp.",
      "Dice chicken and cook in a skillet until done. Stir in salsa verde.",
      "Spread tostadas with mashed warm black beans. Top with chicken, cheese, lettuce, and tomato."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Beef and Bean Burritos",
    "style": "Mexican",
    "cost": 10,
    "minutes": 30,
    "budget": "low",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "ground beef",
        "amount": 1
      },
      {
        "key": "large tortillas",
        "amount": 3
      },
      {
        "key": "black beans",
        "amount": 1
      },
      {
        "key": "rice",
        "amount": 4
      },
      {
        "key": "salsa",
        "amount": 6
      },
      {
        "key": "shredded cheese",
        "amount": 4
      },
      {
        "key": "taco seasoning",
        "amount": 1
      }
    ],
    "instructions": [
      "Cook rice according to package directions. Brown beef and stir in taco seasoning.",
      "Warm beans and tortillas. Divide rice, beef, beans, salsa, and cheese among tortillas.",
      "Fold in the sides, roll tightly, and toast seam-side down in a skillet if desired."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Shrimp Fajita Bowls",
    "style": "Mexican",
    "cost": 14,
    "minutes": 25,
    "budget": "flexible",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "shrimp",
        "amount": 1
      },
      {
        "key": "rice",
        "amount": 6
      },
      {
        "key": "bell peppers",
        "amount": 2
      },
      {
        "key": "onion",
        "amount": 0.5
      },
      {
        "key": "lime",
        "amount": 1
      },
      {
        "key": "chili powder",
        "amount": 1
      },
      {
        "key": "cumin",
        "amount": 1
      },
      {
        "key": "olive oil",
        "amount": 1
      },
      {
        "key": "salsa",
        "amount": 4
      },
      {
        "key": "salt",
        "amount": 0.5
      }
    ],
    "instructions": [
      "Cook rice according to package directions.",
      "Slice peppers and onion; cook in half the oil until tender-crisp.",
      "Toss shrimp with chili powder, cumin, and salt. Cook in remaining oil 3–4 minutes until opaque.",
      "Serve shrimp and vegetables over rice with salsa and lime."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Teriyaki Chicken Rice Bowls",
    "style": "Asian-inspired",
    "cost": 11,
    "minutes": 25,
    "budget": "balanced",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "chicken thighs",
        "amount": 1.25
      },
      {
        "key": "rice",
        "amount": 6
      },
      {
        "key": "broccoli",
        "amount": 10
      },
      {
        "key": "teriyaki sauce",
        "amount": 6
      },
      {
        "key": "olive oil",
        "amount": 1
      }
    ],
    "instructions": [
      "Cook rice according to package directions.",
      "Cut chicken into pieces and cook in olive oil until browned and cooked through.",
      "Steam broccoli until crisp-tender. Add teriyaki sauce to the chicken and simmer 2 minutes.",
      "Serve chicken and broccoli over rice."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Garlic Shrimp Fried Rice",
    "style": "Asian-inspired",
    "cost": 13,
    "minutes": 20,
    "budget": "balanced",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "shrimp",
        "amount": 1
      },
      {
        "key": "rice",
        "amount": 6
      },
      {
        "key": "frozen mixed vegetables",
        "amount": 10
      },
      {
        "key": "eggs",
        "amount": 2
      },
      {
        "key": "soy sauce",
        "amount": 2
      },
      {
        "key": "garlic",
        "amount": 3
      },
      {
        "key": "olive oil",
        "amount": 1.5
      },
      {
        "key": "black pepper",
        "amount": 0.25
      }
    ],
    "instructions": [
      "Cook rice ahead or use cooled freshly cooked rice.",
      "Scramble eggs in half the oil and remove. Cook shrimp and garlic in remaining oil until shrimp is opaque.",
      "Add vegetables and rice; stir-fry until hot. Stir in soy sauce, pepper, and eggs."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Ground Turkey Lettuce Wraps",
    "style": "Asian-inspired",
    "cost": 10,
    "minutes": 25,
    "budget": "balanced",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "ground turkey",
        "amount": 1
      },
      {
        "key": "lettuce",
        "amount": 1
      },
      {
        "key": "carrots",
        "amount": 2
      },
      {
        "key": "soy sauce",
        "amount": 2
      },
      {
        "key": "rice",
        "amount": 4
      },
      {
        "key": "garlic",
        "amount": 2
      },
      {
        "key": "honey",
        "amount": 1
      },
      {
        "key": "rice vinegar",
        "amount": 1
      },
      {
        "key": "olive oil",
        "amount": 1
      }
    ],
    "instructions": [
      "Cook rice according to package directions.",
      "Brown turkey in olive oil. Add garlic and shredded carrots; cook 3 minutes.",
      "Stir in soy sauce, honey, and rice vinegar. Simmer 2 minutes.",
      "Spoon turkey and rice into separated lettuce leaves."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Peanut Noodle Bowls",
    "style": "Asian-inspired",
    "cost": 8,
    "minutes": 20,
    "budget": "low",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "spaghetti",
        "amount": 10
      },
      {
        "key": "peanut butter",
        "amount": 4
      },
      {
        "key": "soy sauce",
        "amount": 2
      },
      {
        "key": "carrots",
        "amount": 2
      },
      {
        "key": "cucumber",
        "amount": 1
      },
      {
        "key": "rice vinegar",
        "amount": 1
      },
      {
        "key": "honey",
        "amount": 1
      },
      {
        "key": "garlic",
        "amount": 1
      }
    ],
    "instructions": [
      "Cook spaghetti until tender, drain, and rinse briefly with cool water.",
      "Whisk peanut butter, soy sauce, rice vinegar, honey, garlic, and 1/4 cup warm water until smooth.",
      "Toss noodles with sauce. Top with shredded carrots and sliced cucumber."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Honey Garlic Pork Noodles",
    "style": "Asian-inspired",
    "cost": 12,
    "minutes": 25,
    "budget": "balanced",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "pork loin",
        "amount": 1.25
      },
      {
        "key": "spaghetti",
        "amount": 10
      },
      {
        "key": "broccoli",
        "amount": 10
      },
      {
        "key": "honey",
        "amount": 2
      },
      {
        "key": "soy sauce",
        "amount": 3
      },
      {
        "key": "garlic",
        "amount": 3
      },
      {
        "key": "cornstarch",
        "amount": 1
      },
      {
        "key": "olive oil",
        "amount": 1
      }
    ],
    "instructions": [
      "Cook spaghetti and add broccoli during the final 3 minutes; drain.",
      "Slice pork thinly and cook in olive oil until browned and done.",
      "Whisk honey, soy sauce, garlic, cornstarch, and 1/3 cup water. Add to pork and simmer until glossy.",
      "Toss with noodles and broccoli."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Beef Broccoli Rice Bowls",
    "style": "Asian-inspired",
    "cost": 14,
    "minutes": 25,
    "budget": "flexible",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "beef strips",
        "amount": 1
      },
      {
        "key": "rice",
        "amount": 6
      },
      {
        "key": "broccoli",
        "amount": 10
      },
      {
        "key": "soy sauce",
        "amount": 3
      },
      {
        "key": "honey",
        "amount": 1
      },
      {
        "key": "garlic",
        "amount": 2
      },
      {
        "key": "cornstarch",
        "amount": 1
      },
      {
        "key": "olive oil",
        "amount": 1
      }
    ],
    "instructions": [
      "Cook rice according to package directions.",
      "Whisk soy sauce, honey, cornstarch, and 1/3 cup water.",
      "Cook beef in hot oil until browned; remove. Steam broccoli in the same skillet with a splash of water.",
      "Return beef, add sauce, and simmer until thickened. Serve over rice."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Turkey Egg Roll Bowls",
    "style": "Asian-inspired",
    "cost": 10,
    "minutes": 25,
    "budget": "balanced",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "ground turkey",
        "amount": 1
      },
      {
        "key": "cabbage",
        "amount": 14
      },
      {
        "key": "carrots",
        "amount": 2
      },
      {
        "key": "soy sauce",
        "amount": 2
      },
      {
        "key": "rice vinegar",
        "amount": 1
      },
      {
        "key": "garlic",
        "amount": 2
      },
      {
        "key": "green onions",
        "amount": 0.5
      },
      {
        "key": "olive oil",
        "amount": 1
      }
    ],
    "instructions": [
      "Brown turkey in olive oil. Add garlic and cook 30 seconds.",
      "Add cabbage and shredded carrots. Cook, stirring, until tender-crisp.",
      "Stir in soy sauce and rice vinegar. Top with sliced green onions."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Sweet Chili Salmon Rice Bowls",
    "style": "Asian-inspired",
    "cost": 16,
    "minutes": 30,
    "budget": "flexible",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "salmon fillets",
        "amount": 3
      },
      {
        "key": "rice",
        "amount": 6
      },
      {
        "key": "broccoli",
        "amount": 10
      },
      {
        "key": "sweet chili sauce",
        "amount": 5
      },
      {
        "key": "soy sauce",
        "amount": 1
      },
      {
        "key": "lime",
        "amount": 1
      },
      {
        "key": "olive oil",
        "amount": 1
      }
    ],
    "instructions": [
      "Heat the oven to 425°F. Place salmon and broccoli on a sheet pan; drizzle broccoli with oil.",
      "Mix sweet chili sauce, soy sauce, and half the lime juice. Brush half over salmon.",
      "Bake 12–15 minutes, until salmon flakes and broccoli is tender. Brush with remaining sauce.",
      "Serve over cooked rice with remaining lime."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Cowboy Bean Skillet",
    "style": "Comfort",
    "cost": 9,
    "minutes": 30,
    "budget": "low",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "ground beef",
        "amount": 1
      },
      {
        "key": "baked beans",
        "amount": 1
      },
      {
        "key": "corn",
        "amount": 1
      },
      {
        "key": "diced tomatoes",
        "amount": 1
      },
      {
        "key": "shredded cheese",
        "amount": 4
      },
      {
        "key": "onion",
        "amount": 0.5
      },
      {
        "key": "chili powder",
        "amount": 1
      },
      {
        "key": "olive oil",
        "amount": 1
      }
    ],
    "instructions": [
      "Cook chopped onion and beef in olive oil until beef is browned. Drain if needed.",
      "Stir in baked beans, corn, tomatoes, and chili powder. Simmer 10 minutes.",
      "Top with cheese and cover until melted."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Chicken Alfredo",
    "style": "Comfort",
    "cost": 12,
    "minutes": 30,
    "budget": "balanced",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "chicken breast",
        "amount": 1.25
      },
      {
        "key": "pasta",
        "amount": 10
      },
      {
        "key": "alfredo sauce",
        "amount": 15
      },
      {
        "key": "broccoli",
        "amount": 10
      },
      {
        "key": "parmesan cheese",
        "amount": 2
      },
      {
        "key": "olive oil",
        "amount": 1
      },
      {
        "key": "salt",
        "amount": 0.5
      },
      {
        "key": "black pepper",
        "amount": 0.25
      }
    ],
    "instructions": [
      "Boil pasta; add broccoli during the final 3 minutes. Drain.",
      "Cut chicken into pieces, season with salt and pepper, and cook in olive oil until done.",
      "Add Alfredo sauce and warm gently. Stir in pasta and broccoli.",
      "Serve with Parmesan."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Mississippi Chicken Sandwiches",
    "style": "Comfort",
    "cost": 12,
    "minutes": 40,
    "budget": "balanced",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "chicken breast",
        "amount": 1.5
      },
      {
        "key": "pepperoncini",
        "amount": 6
      },
      {
        "key": "ranch seasoning",
        "amount": 1
      },
      {
        "key": "hamburger buns",
        "amount": 3
      },
      {
        "key": "provolone cheese",
        "amount": 3
      },
      {
        "key": "butter",
        "amount": 2
      },
      {
        "key": "chicken broth",
        "amount": 8
      }
    ],
    "instructions": [
      "Place chicken, ranch seasoning, pepperoncini, butter, and broth in a covered skillet or Dutch oven.",
      "Simmer gently for 25–30 minutes, turning once, until chicken reaches 165°F.",
      "Shred chicken in the pan and stir into the cooking liquid.",
      "Pile onto buns and top with provolone."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "One-Pot Chili Mac",
    "style": "Comfort",
    "cost": 9,
    "minutes": 30,
    "budget": "low",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "ground beef",
        "amount": 1
      },
      {
        "key": "pasta",
        "amount": 10
      },
      {
        "key": "kidney beans",
        "amount": 1
      },
      {
        "key": "diced tomatoes",
        "amount": 1
      },
      {
        "key": "shredded cheese",
        "amount": 4
      },
      {
        "key": "onion",
        "amount": 0.5
      },
      {
        "key": "chili powder",
        "amount": 1
      },
      {
        "key": "beef broth",
        "amount": 16
      },
      {
        "key": "olive oil",
        "amount": 1
      }
    ],
    "instructions": [
      "Brown beef and chopped onion in olive oil. Drain if needed.",
      "Add chili powder, tomatoes, beans, broth, and dry pasta.",
      "Cover and simmer, stirring occasionally, until pasta is tender, about 12 minutes.",
      "Stir in cheese until melted."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Chicken Pot Pie Skillet",
    "style": "Comfort",
    "cost": 12,
    "minutes": 35,
    "budget": "balanced",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "chicken breast",
        "amount": 1.25
      },
      {
        "key": "frozen mixed vegetables",
        "amount": 10
      },
      {
        "key": "chicken broth",
        "amount": 12
      },
      {
        "key": "milk",
        "amount": 6
      },
      {
        "key": "flour",
        "amount": 3
      },
      {
        "key": "butter",
        "amount": 2
      },
      {
        "key": "biscuit dough",
        "amount": 6
      },
      {
        "key": "salt",
        "amount": 0.5
      },
      {
        "key": "black pepper",
        "amount": 0.25
      }
    ],
    "instructions": [
      "Heat the oven to 400°F. Cut chicken into pieces and cook in an oven-safe skillet until done; remove.",
      "Melt butter in the skillet. Stir in flour for 1 minute, then slowly whisk in broth and milk.",
      "Add vegetables, chicken, salt, and pepper. Simmer until slightly thickened.",
      "Arrange biscuits on top and bake 15–18 minutes, until biscuits are golden."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Beef Stroganoff",
    "style": "Comfort",
    "cost": 13,
    "minutes": 30,
    "budget": "balanced",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "ground beef",
        "amount": 1
      },
      {
        "key": "egg noodles",
        "amount": 10
      },
      {
        "key": "mushrooms",
        "amount": 8
      },
      {
        "key": "onion",
        "amount": 0.5
      },
      {
        "key": "beef broth",
        "amount": 12
      },
      {
        "key": "sour cream",
        "amount": 5
      },
      {
        "key": "Worcestershire sauce",
        "amount": 1
      },
      {
        "key": "flour",
        "amount": 2
      },
      {
        "key": "butter",
        "amount": 1
      },
      {
        "key": "salt",
        "amount": 0.5
      },
      {
        "key": "black pepper",
        "amount": 0.25
      }
    ],
    "instructions": [
      "Cook egg noodles and drain.",
      "Brown beef with chopped onion and mushrooms; drain if needed. Add butter and flour and stir 1 minute.",
      "Slowly add broth and Worcestershire. Simmer until thickened.",
      "Remove from heat, stir in sour cream, salt, and pepper, then toss with noodles."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Tuna Noodle Skillet",
    "style": "Comfort",
    "cost": 9,
    "minutes": 25,
    "budget": "low",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "canned tuna",
        "amount": 2
      },
      {
        "key": "egg noodles",
        "amount": 10
      },
      {
        "key": "frozen peas",
        "amount": 8
      },
      {
        "key": "cream mushroom soup",
        "amount": 1
      },
      {
        "key": "milk",
        "amount": 6
      },
      {
        "key": "shredded cheese",
        "amount": 3
      },
      {
        "key": "black pepper",
        "amount": 0.25
      }
    ],
    "instructions": [
      "Cook noodles and peas together until noodles are tender; drain.",
      "Return to the pot and stir in tuna, soup, milk, and pepper.",
      "Warm over low heat until creamy, then stir in cheese until melted."
    ],
    "source": "Grocery Buddy in-app recipe"
  },
  {
    "name": "Creamy Ham Potato Soup",
    "style": "Comfort",
    "cost": 10,
    "minutes": 35,
    "budget": "low",
    "baseServings": 3,
    "ingredients": [
      {
        "key": "deli ham",
        "amount": 8
      },
      {
        "key": "potatoes",
        "amount": 1.25
      },
      {
        "key": "carrots",
        "amount": 2
      },
      {
        "key": "celery",
        "amount": 2
      },
      {
        "key": "onion",
        "amount": 0.5
      },
      {
        "key": "chicken broth",
        "amount": 20
      },
      {
        "key": "milk",
        "amount": 8
      },
      {
        "key": "flour",
        "amount": 2
      },
      {
        "key": "butter",
        "amount": 2
      },
      {
        "key": "salt",
        "amount": 0.5
      },
      {
        "key": "black pepper",
        "amount": 0.25
      }
    ],
    "instructions": [
      "Cook chopped onion, carrots, and celery in butter for 5 minutes. Stir in flour for 1 minute.",
      "Slowly add broth. Add diced potatoes and simmer 15 minutes, until tender.",
      "Stir in ham and milk. Warm gently without boiling, then season with salt and pepper."
    ],
    "source": "Grocery Buddy in-app recipe"
  }
];

const SIDE_OPTIONS = {
  "Mediterranean": [
    {
      "name": "No side",
      "ingredients": [],
      "instructions": []
    },
    {
      "name": "Greek salad",
      "ingredients": [
        {
          "key": "romaine lettuce",
          "amount": 0.5
        },
        {
          "key": "cucumber",
          "amount": 0.5
        },
        {
          "key": "tomatoes",
          "amount": 2
        },
        {
          "key": "feta cheese",
          "amount": 2
        },
        {
          "key": "olive oil",
          "amount": 1
        },
        {
          "key": "lemon",
          "amount": 0.5
        },
        {
          "key": "oregano",
          "amount": 0.5
        }
      ],
      "instructions": [
        "Chop the vegetables and toss with feta, olive oil, lemon juice, and oregano."
      ]
    },
    {
      "name": "Roasted lemon potatoes",
      "ingredients": [
        {
          "key": "potatoes",
          "amount": 1
        },
        {
          "key": "lemon",
          "amount": 0.5
        },
        {
          "key": "olive oil",
          "amount": 1
        },
        {
          "key": "oregano",
          "amount": 0.5
        },
        {
          "key": "salt",
          "amount": 0.25
        }
      ],
      "instructions": [
        "Roast potato wedges at 425°F with oil, oregano, and salt for 25–30 minutes; finish with lemon."
      ]
    },
    {
      "name": "Pita and hummus",
      "ingredients": [
        {
          "key": "pita bread",
          "amount": 3
        },
        {
          "key": "hummus",
          "amount": 6
        }
      ],
      "instructions": [
        "Warm or toast the pitas and serve with hummus."
      ]
    }
  ],
  "American": [
    {
      "name": "No side",
      "ingredients": [],
      "instructions": []
    },
    {
      "name": "Green beans",
      "ingredients": [
        {
          "key": "green beans",
          "amount": 10
        },
        {
          "key": "butter",
          "amount": 1
        },
        {
          "key": "salt",
          "amount": 0.25
        },
        {
          "key": "black pepper",
          "amount": 0.125
        }
      ],
      "instructions": [
        "Steam green beans until tender and toss with butter, salt, and pepper."
      ]
    },
    {
      "name": "Roasted broccoli",
      "ingredients": [
        {
          "key": "broccoli",
          "amount": 10
        },
        {
          "key": "olive oil",
          "amount": 1
        },
        {
          "key": "salt",
          "amount": 0.25
        },
        {
          "key": "black pepper",
          "amount": 0.125
        }
      ],
      "instructions": [
        "Roast broccoli at 425°F with oil, salt, and pepper for 15–18 minutes."
      ]
    },
    {
      "name": "Bagged salad",
      "ingredients": [
        {
          "key": "bagged salad",
          "amount": 1
        }
      ],
      "instructions": [
        "Prepare the salad according to the package directions."
      ]
    }
  ],
  "Italian": [
    {
      "name": "No side",
      "ingredients": [],
      "instructions": []
    },
    {
      "name": "Garlic bread",
      "ingredients": [
        {
          "key": "garlic bread",
          "amount": 1
        }
      ],
      "instructions": [
        "Bake the garlic bread according to the package directions."
      ]
    },
    {
      "name": "Italian salad",
      "ingredients": [
        {
          "key": "bagged salad",
          "amount": 1
        },
        {
          "key": "Italian dressing",
          "amount": 3
        }
      ],
      "instructions": [
        "Toss the salad with Italian dressing just before serving."
      ]
    },
    {
      "name": "Roasted broccoli",
      "ingredients": [
        {
          "key": "broccoli",
          "amount": 10
        },
        {
          "key": "olive oil",
          "amount": 1
        },
        {
          "key": "Italian seasoning",
          "amount": 0.5
        },
        {
          "key": "salt",
          "amount": 0.25
        }
      ],
      "instructions": [
        "Roast broccoli at 425°F with oil, Italian seasoning, and salt for 15–18 minutes."
      ]
    }
  ],
  "Mexican": [
    {
      "name": "No side",
      "ingredients": [],
      "instructions": []
    },
    {
      "name": "Chips and salsa",
      "ingredients": [
        {
          "key": "tortilla chips",
          "amount": 1
        },
        {
          "key": "salsa",
          "amount": 8
        }
      ],
      "instructions": [
        "Serve tortilla chips with salsa."
      ]
    },
    {
      "name": "Mexican-style corn",
      "ingredients": [
        {
          "key": "frozen corn",
          "amount": 10
        },
        {
          "key": "lime",
          "amount": 0.5
        },
        {
          "key": "shredded cheese",
          "amount": 2
        },
        {
          "key": "chili powder",
          "amount": 0.5
        }
      ],
      "instructions": [
        "Heat corn, then toss with lime juice, cheese, and chili powder."
      ]
    },
    {
      "name": "Black beans",
      "ingredients": [
        {
          "key": "black beans",
          "amount": 1
        },
        {
          "key": "cumin",
          "amount": 0.5
        },
        {
          "key": "lime",
          "amount": 0.5
        }
      ],
      "instructions": [
        "Warm beans with cumin and finish with lime juice."
      ]
    }
  ],
  "Asian-inspired": [
    {
      "name": "No side",
      "ingredients": [],
      "instructions": []
    },
    {
      "name": "Frozen egg rolls",
      "ingredients": [
        {
          "key": "frozen egg rolls",
          "amount": 1
        }
      ],
      "instructions": [
        "Bake or air-fry egg rolls according to the package directions."
      ]
    },
    {
      "name": "Steamed broccoli",
      "ingredients": [
        {
          "key": "broccoli",
          "amount": 10
        },
        {
          "key": "soy sauce",
          "amount": 1
        }
      ],
      "instructions": [
        "Steam broccoli until tender-crisp and drizzle with soy sauce."
      ]
    },
    {
      "name": "Cucumber salad",
      "ingredients": [
        {
          "key": "cucumber",
          "amount": 1
        },
        {
          "key": "rice vinegar",
          "amount": 2
        },
        {
          "key": "soy sauce",
          "amount": 0.5
        },
        {
          "key": "honey",
          "amount": 0.5
        }
      ],
      "instructions": [
        "Thinly slice cucumber and toss with rice vinegar, soy sauce, and honey."
      ]
    }
  ],
  "Comfort": [
    {
      "name": "No side",
      "ingredients": [],
      "instructions": []
    },
    {
      "name": "Green beans",
      "ingredients": [
        {
          "key": "green beans",
          "amount": 10
        },
        {
          "key": "butter",
          "amount": 1
        },
        {
          "key": "salt",
          "amount": 0.25
        },
        {
          "key": "black pepper",
          "amount": 0.125
        }
      ],
      "instructions": [
        "Steam green beans until tender and toss with butter, salt, and pepper."
      ]
    },
    {
      "name": "Bagged salad",
      "ingredients": [
        {
          "key": "bagged salad",
          "amount": 1
        }
      ],
      "instructions": [
        "Prepare the salad according to the package directions."
      ]
    },
    {
      "name": "Garlic bread",
      "ingredients": [
        {
          "key": "garlic bread",
          "amount": 1
        }
      ],
      "instructions": [
        "Bake the garlic bread according to the package directions."
      ]
    }
  ]
};
