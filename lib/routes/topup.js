var express = require("express");
var router = express.Router();
const topupController = require("../controller/topupController");

router.get("/vietmeta-money-packages", topupController.getMoneyPackages);
router.post("/checkout", topupController.checkout);
router.get("/trigger", topupController.eventTrigger);

module.exports = router;
