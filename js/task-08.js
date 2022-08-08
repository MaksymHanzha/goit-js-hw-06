const form = document.querySelector(".login-form");

form.addEventListener("submit", userSubmit);

function userSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Заповніть форму!");
  }

  const user = {
    Email: email.value,
    Password: password.value,
  };
  console.log(user);

  event.currentTarget.reset();
}
