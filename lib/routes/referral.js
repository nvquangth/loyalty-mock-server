var express = require("express");
var router = express.Router();

const referralController = require("../controller/referral_controller");

router.post("/", referralController.getReferralCode);

module.exports = router;
