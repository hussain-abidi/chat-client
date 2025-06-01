function register() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch("http://localhost:3000/register", {
    method : "POST",
    body : JSON.stringify({username : username, password : password}),
    headers : {"Content-Type" : "application/json; chartset=UTF-8"}
  })
      .then((response) => response.text())
      .then((text) => console.log(text));
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch("http://localhost:3000/login", {
    method : "POST",
    body : JSON.stringify({username : username, password : password}),
    headers : {"Content-Type" : "application/json; chartset=UTF-8"}
  })
      .then((response) => response.text())
      .then((text) => console.log(text));
}

document.getElementById("register").addEventListener("click", register);
document.getElementById("login").addEventListener("click", login);
