//everything related to authentication will be here
const express = require("express");
const router = express.Router();

// testing lists route
// access Privet
router.get("/test", (req, res) => res.json({ name: "lists is working" }));

module.exports = router;
