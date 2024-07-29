const { Router } = require('express');
const { userAllChats, userLogin, userSignUp,userProfile, fetchUser } = require("../controller/user.controller.js");
const authenticateUserJwt = require('../utils/auth.user.js');
const { createPrivateChat } = require('../controller/chat.controller.js');
const { fetchMessage, sendPrivateMessage } = require('../controller/message.controller.js');
const userRouter = Router()

userRouter.route("/signup").post(userSignUp);
userRouter.route("/signin").post(userLogin);
userRouter.route("/me").get(authenticateUserJwt, userProfile);
userRouter.route("/all-chat").get(authenticateUserJwt, userAllChats);
userRouter.route("/fetch-users").get(authenticateUserJwt,fetchUser);
userRouter.route("/createChat").post(authenticateUserJwt,createPrivateChat);
userRouter.route("/message").get(authenticateUserJwt,fetchMessage);
userRouter.route("/send-message").post(authenticateUserJwt,sendPrivateMessage);

module.exports = { 
    userRouter
}