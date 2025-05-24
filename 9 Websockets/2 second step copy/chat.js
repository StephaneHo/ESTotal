// open websocket connection from the brozser to the server
// this is the client side JS code

// we set up our web socket as a nes WbSocket
// we specify a URL that begins with ws
// we choose for the moment to hard code the roomname

// the browser receives the response, it makes a new connection to ws://localhost:3000/chat/people
// and this is routed to the ws in app.js
// app.ws("/chat/:roomName", functi
// zhich creates a one time persistent connection
const socket = new WebSocket("ws://localhost:3000/chat/people");
socket.onmessage = (evt) => {
  console.log("MESSAGRE FROM WS,", evt.data);
};
// there are other events on web sockets
socket.onopen = (evt) => {
  console.log("message", evt.data);
};
// add in app.js
// setTimeout(() => {
// ws.close()})
socket.onclose = (evt) => console.log("web socket closed");
