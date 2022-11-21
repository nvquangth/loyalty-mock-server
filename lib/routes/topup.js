var express = require("express");
var router = express.Router();
const topupController = require("../controller/topupController");

router.get("/vietmeta-money-packages", topupController.getMoneyPackages);
router.post("/checkout", topupController.checkout);

module.exports = router;
