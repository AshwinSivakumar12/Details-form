const express = require("express");
const UserRoute = express.Router();
const userController = require("../../controller/user.controller");

UserRoute.route("/form").post(userController.registerData);


module.exports = UserRoute;