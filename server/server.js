const express = require('express');
const path = require("path");
const db = require('./models/database');
const app = express();
const PORT = 3000;





// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
})

module.exports = app;