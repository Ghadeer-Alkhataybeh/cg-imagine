const express = require("express");
const mongoose = require("mongoose");
const app = express();

//DB config
const db = require("./config/keys").monogoURI;

//Connect to mongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("Erorr", err));

//simple route to get sth to run
app.get("/", (req, res) => res.send("Ghadeer"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on port ${port}`));
