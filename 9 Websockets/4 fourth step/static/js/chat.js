// CLIENT SIDE JS CODE

// let s ask for the name
const username = prompt("Enter your username, please do not use spaces ");

const socket = new WebSocket("ws://localhost:3000/chat/people");

socket.onopen = (evt) => {
  console.log("message", evt.data);
  const data = {
    type: "join",
    name: username,
  };
  socket.send(JSON.stringify(data));
};

socket.onmessage = (evt) => {
  console.log("MESSAGRE FROM WS,", evt.data);
  let msg = JSON.parse(evt.data);
  // check the server app to verify that we need to have the type to note
  // we create a 
  if (msg.type === "note") {
    const item = document.createElement("li");
    https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/i
    // because it is not a "true" message, we cheat a bit on the css, and we use the i tag
    // this is not a best practice
    const text = document.createElement("i");
    text.textContent = msg.text;
    item.appendChild(text);
    document.querySelector("#messages").appendChild(item);
  }
   else if (msg.type === "chat") {
    const item = document.createElement("li");
    item.innerHTML = `<b>${msg.name}:</b> ${msg.text}`;
    document.querySelector("#messages").appendChild(item);
  }
};

socket.onclose = (evt) => console.log("web socket closed");


document.querySelector("#msg-form").addEventListener("submit", (evt) => {
  // select the element
  const input = document.querySelector("#messageInput");
  evt.preventDefault();
  console.log(input.value);
  //reminder: we want to have a type property
  const payload = JSON.stringify({ type: "chat", text: input.value });
  socket.send(payload);
  input.value = "";
});
