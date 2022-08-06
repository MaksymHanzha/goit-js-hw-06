// const list = document.querySelectorAll("li.item");
// console.log(`Number of categories: ${list.length}`);

const categoriesList = document.querySelector("#categories");
const elementsItem = categoriesList.querySelectorAll("li.item");

console.log(`Number of categories: ${categoriesList.children.length} 
        `);
elementsItem.forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}
        `);
});
