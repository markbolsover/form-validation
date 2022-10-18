const form = document.getElementById("form");

const firstNameInput = document.getElementById("firstname");
const firstNameError = document.getElementById("firstname-error");
const surnameInput = document.getElementById("surname");
const surnameError = document.getElementById("surname-error");
const usernameInput = document.getElementById("username");
const usernameError = document.getElementById("username-error");
const avatarInput = document.getElementById("avatar");
const avatarError = document.getElementById("avatar-error");

firstNameInput.addEventListener("blur", (event) => {
  const firstName = event.target.value;
  const firstNameIsValid = firstName.length >= 3;
  if (!firstNameIsValid) {
    firstNameError.innerText = "Must be more than 2 letters";
    event.target.classList.add("invalid");
    event.target.classList.remove("valid");
  } else {
    firstNameError.innerText = "";
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
  }
});

surnameInput.addEventListener("blur", (event) => {
  const surname = event.target.value;
  const surnameIsValid = surname.length >= 3;
  if (!surnameIsValid) {
    surnameError.innerText = "Must be more than 2 letters";
    event.target.classList.add("invalid");
    event.target.classList.remove("valid");
  } else {
    surnameError.innerText = "";
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
  }
});

usernameInput.addEventListener("blur", (event) => {
  const username = event.target.value;
  const usernameIsValid = username.length >= 3;
  if (/[a-zA-Z]/.test(username) && /[0-9]/.test(username) && usernameIsValid) {
    console.log("passed regex");
    usernameError.innerText = "";
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
  } else {
    usernameError.innerText = "Must contain letters and numbers";
    event.target.classList.add("invalid");
    event.target.classList.remove("valid");
  }
});

avatarInput.addEventListener("blur", (event) => {
  const avatar = event.target.value;
  const avatarIsValid = avatar.length >= 3;
  if (
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(
      avatar
    ) &&
    avatarIsValid
  ) {
    avatarError.innerText = "";
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
  } else {
    avatarError.innerText = "Must be a valid URL";
    event.target.classList.add("invalid");
    event.target.classList.remove("valid");
  }
});

form.addEventListener("submit", (event) => {
  const inputs = [...document.getElementsByClassName("input-field")];
  const areValid = inputs.every((input) => input.classList.contains("valid"));
  if (!areValid) {
    event.preventDefault();
  }
});
