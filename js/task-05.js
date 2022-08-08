const inputName = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");

inputName.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    userName.textContent = "Anonymous";
  } else {
    userName.textContent = event.currentTarget.value;
  }
});
