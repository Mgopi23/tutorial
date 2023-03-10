const express = require("express");
const app = express();
app.get("/", (request, response) => {
  respond.send("Express JS");
});
module.exports = app;
