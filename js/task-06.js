const input = document.querySelector("#validation-input");

input.addEventListener("blur", valueBlur);

function valueBlur(text) {
  if (text.currentTarget.value.length === 0) {
    input.classList.remove("valid");
    input.classList.remove("invalid");
  } else if (text.currentTarget.value.length !== Number(input.dataset.length)) {
    input.classList.remove("valid");
    input.classList.add("invalid");
  } else {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
}
