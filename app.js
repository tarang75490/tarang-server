const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT


app.get("/", (req, res) => {
  res.redirect("/ping");
});

app.get("/ping", (req, res) => {
  res.ok({ message: "Aapka sawgat hai tarang ke server par" });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
