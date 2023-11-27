const express = require('express');
const app = express();
const port = process.env.APPLICATION_PORT || 8080;

app.get('/', function (req, res) {
  res.status(200);
  res.sendFile('index.html', { root: __dirname });
});
const server = app.listen(port, () => {
  console.log(`App listening on ${port}`);
});

module.exports = { app, server }; 
