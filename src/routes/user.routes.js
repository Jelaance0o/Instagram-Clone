const express = require("express")
const userController = require("../controllers/user.controller")
const identifyUser = require("../middlewares/auth.middleware")
const userRouter = express.Router();

/* 
*@route post /api/users/follow/:userid
*@description follow a user
*access private
*/

userRouter.post('/follow/:username',identifyUser , userController.followUserController)

module.exports = userRouter;