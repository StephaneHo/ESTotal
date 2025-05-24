"use strict";
// this is the code that powers the socket for the chat room
/** app for groupchat */

const express = require("express");
const app = express();

app.use(express.static("static/"));

/** Handle websocket chat */

const ChatUser = require("./ChatUser");

// allow for app.ws routes for websocket routes
// it is not a regular HTTP request
// you have a path like HTTP
// but it uses the web socket protocol
// it will be called once per client
// il will be persistent for that client
const wsExpress = require("express-ws")(app);
app.ws("/chat/:roomName", function (ws, req, next) {
  try {
    const user = new ChatUser(
      ws.send.bind(ws), // fn to call to message this user
      req.params.roomName // name of room for user
    );

    // register handlers for message-received, connection-closed

    ws.on("message", function (data) {
      try {
        user.handleMessage(data);
      } catch (err) {
        console.error(err);
      }
    });

    ws.on("close", function () {
      try {
        user.handleClose();
      } catch (err) {
        console.error(err);
      }
    });
  } catch (err) {
    console.error(err);
  }
});

// the flow ? we send out the html file when someone request any room nomae
// and in chat.js , we are going to open a ws connection using the ws route just above
app.get("/:roomName", function (req, res, next) {
  res.sendFile(`${__dirname}/chat.html`);
});

module.exports = app;
