const express = require('express');
const app = express();
const port = process.env.APPLICATION_PORT || 8080;

// Define your routes here
app.get('/', function (req, res) {
  res.status(200);
  res.sendFile('index.html', { root: __dirname });
});

// Serve static files from the root directory
app.use(express.static(__dirname));

// Start the server
const server = app.listen(port, () => {
  console.log(`App listening on ${port}`);
});

module.exports = { app, server };