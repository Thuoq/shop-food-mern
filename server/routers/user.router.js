const express = require("express");
const router = express.Router();
const userValidation = require("../auth/user.auth");
const userController = require("../controllers/user.controller");
const userMiddlewares = require("../middlewares/userLogin.middleware");

router.post("/",userValidation.userAuth,userController.userSuccess);

router.post("/signIn",userMiddlewares.authUserLogin,userController.userLoginSuccess )

module.exports = router;