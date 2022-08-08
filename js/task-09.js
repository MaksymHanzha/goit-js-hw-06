function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector(".change-color");
const colorValue = document.querySelector("span.color");

btnChangeColor.addEventListener("click", () => {
  let color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorValue.textContent = color;
});
