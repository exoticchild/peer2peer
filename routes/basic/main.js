const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  if (!req.session.username) {
    res.redirect("/");
  } else {
    res.render("pages/main-room");
  }
});

module.exports = router;
