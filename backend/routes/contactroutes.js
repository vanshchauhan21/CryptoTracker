const express = require("express");
const {
  EmailController,
  NewsLetterEmailController,
} = require("../controller/ContactController");
const router = express.Router();

router.post("/email", EmailController);
router.post("/newsletter", NewsLetterEmailController);

module.exports = router;
