const express = require("express");
const { EmailController } = require("../controller/ContactController");
const router = express.Router();

router.post("/email", EmailController);

module.exports = router;
