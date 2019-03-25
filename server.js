const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const lists = require("./routes/api/lists");

const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB config
const db = require("./config/keys").monogoURI;

//Connect to mongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("Erorr", err));

//passport middleware
app.use(passport.initialize());

//passport config
require("./config/passport")(passport);

//useing Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/lists", lists);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on port ${port}`));
