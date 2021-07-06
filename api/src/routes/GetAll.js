const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send("hola soy un PAIS");
});
module.exports = router;
