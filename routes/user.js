const { Router } = require("express");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ data: "hello get" });
});
router.post("/", (req, res) => {
  res.send({ data: "hello post" });
});
router.put("/", (req, res) => {
  res.send({ data: "hello put" });
});

router.delete("/", (req, res) => {
  res.send({ data: "hello delete" });
});

module.exports = router;
