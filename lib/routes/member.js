var express = require("express");
var router = express.Router();
const memberController = require("../controller/member_controller");

router.get("/", memberController.getMemberInfo);

module.exports = router;
