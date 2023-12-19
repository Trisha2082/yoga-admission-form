 
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello, this is the Express server!");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
