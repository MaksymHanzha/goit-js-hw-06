const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const wayToUl = document.querySelector("#ingredients");

const list = ingredients.map((item) => {
  const ingredient = document.createElement("li");
  ingredient.textContent = item;
  ingredient.class = "item";
  return ingredient;
});

wayToUl.append(...list);
