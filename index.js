const firstNameInput = document.getElementById("firstname");
const firstNameError = document.getElementById("firstname-error");
const surnameInput = document.getElementById("surname");
const usernameInput = document.getElementById("username");
const avatarInput = document.getElementById("avatar");

firstNameInput.addEventListener("blur", (event) => {
  const firstName = event.target.value;
  const firstNameIsValid = firstName.length >= 3;
  if (!firstNameIsValid) {
    firstNameError.innerText = "First name must be more than 2 letters";
  }
});
