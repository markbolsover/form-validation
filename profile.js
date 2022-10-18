const searchStr = document.location.search;
const queries = new URLSearchParams(searchStr);

const firstName = queries.get("firstname");
const surname = queries.get("surname");
const username = queries.get("username");
const avatar = queries.get("avatar");

document.getElementById("welcome-message").innerText = `Welcome ${firstName}!`;
document.getElementById("firstname").innerText = firstName;
document.getElementById("surname").innerText = surname;
document.getElementById("username").innerText = username;
document.getElementById("avatar").src = avatar;
