"use strict";

/** app for groupchat */

const express = require("express");
const app = express();

// serve stuff in static/ folder

app.use(express.static("static/"));

/** Handle websocket chat */

const ChatUser = require("./ChatUser");

/** Handle a persistent connection to /chat/[roomName]
 *
 * Note that this is only called *once* per client --- not every time
 * a particular websocket chat is sent.
 *
 * `ws` becomes the socket for the client; it is specific to that visitor.
 * The `ws.send` method is how we'll send messages back to that socket.
 */

// allow for app.ws routes for websocket routes
const wsExpress = require("express-ws")(app);
app.ws("/chat/:roomName", function (ws, req, next) {});

/** serve homepage --- just static HTML
 *
 * Allow any roomName to come after homepage --- client JS will find the
 * room name in the URL.
 *
 * */

app.get("/:roomName", function (req, res, next) {
  res.sendFile(`${__dirname}/chat.html`);
});

module.exports = app;
