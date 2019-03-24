const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const lists = require("./routes/api/lists");

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

//useing Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/lists", lists);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on port ${port}`));
