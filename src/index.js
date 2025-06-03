function register() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch("http://localhost:3000/register", {
    method : "POST",
    body : JSON.stringify({username : username, password : password}),
    headers : {"Content-Type" : "application/json; charset=UTF-8"}
  })
      .then((response) => response.text())
      .then((text) => console.log(text));
}

let socket;

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch("http://localhost:3000/login", {
    method : "POST",
    body : JSON.stringify({username : username, password : password}),
    headers : {"Content-Type" : "application/json; charset=UTF-8"}
  })
      .then((response) => response.json())
      .then((json) => {
        console.log(json.token);

        socket = new WebSocket("ws://localhost:3000/ws?token=" + json.token);
        socket.onmessage = (event) => {
          const data = JSON.parse(event.data);
          document.getElementById("output").innerText +=
              data.username + ": " + data.message + "\n";
        };
      });
}

document.getElementById("register").addEventListener("click", register);
document.getElementById("login").addEventListener("click", login);

function send() {
  if (!socket)
    return;
  const message = document.getElementById("message").value;
  socket.send(message);
}

document.getElementById("send").addEventListener("click", send);
