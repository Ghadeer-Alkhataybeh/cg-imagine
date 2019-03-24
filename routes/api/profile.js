//everything related to creat the users profiles will be here
//everything related to authentication will be here
const express = require("express");
const router = express.Router();

// testing profile route
// access Privet
router.get("/test", (req, res) => res.json({ name: "profile is working" }));

module.exports = router;
