const express = require("express");
const app = express();

//simple route to get sth to run
app.get("/", (req, res) => res.send("Ghadeer"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on port ${port}`));
