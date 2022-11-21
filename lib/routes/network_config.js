var express = require("express");
var router = express.Router();
const networkConfigController = require("../controller/network_controller");

router.get("/", networkConfigController.getNetworkConfig);

module.exports = router;
