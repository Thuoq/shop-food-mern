const express = require("express");
const router = express.Router();
const controllers = require("../controllers/shop.controller");

router.get("/" , controllers.getShops
	)
module.exports = router;