var express = require("express");
var router = express.Router();
const oauthBffController = require("../controller/oauth_bff_controller")

router.post("/register", oauthBffController.initRegister)
router.post("/login", oauthBffController.userLogin400)

module.exports = router;
