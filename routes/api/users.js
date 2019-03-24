//everything related to authentication will be here
const express = require("express");
const router = express.Router();

// testing users route
// access Public
router.get("/test", (req, res) => res.json({ name: "users is working" }));

module.exports = router;
