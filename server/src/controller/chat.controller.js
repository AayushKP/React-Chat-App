const { User } = require("../model/user.model.js");
const { asyncHandler } = require("../utils/asynchandler.js");
const { ApiError } = require("../utils/apiError.js");
const { ApiResponse } = require("../utils/apiResponse.js");
const Chat = require("../model/chat.model.js");
const mongoose = require('mongoose');

const createPrivateChat = asyncHandler(async (req, res) => {
    const user1_id = req.body.user._id;
    const user2_id = req.body.secondUser._id;
    const user1 = await User.findById(user1_id);
    const user2 = await User.findById(user2_id);
    if(!user1){
        throw new ApiError(404, "User1 not Exist")
    }

    if(!user2){
        throw new ApiError(404, "User2 not Exist")
    }

    const chat = await Chat.create({
    });

    chat.member.push(user1._id);
    chat.member.push(user2._id);
    await chat.save();
    user1.chats.push(chat._id);
    user1.friends.push(user2._id);
    await user1.save();
    user2.chats.push(chat._id);
    user2.friends.push(user1._id);
    await user2.save();

    console.log(`user1 : ${user1} and user2: ${user2} chat created Successfully`);

    res.json(chat);
})

module.exports = {
    createPrivateChat
}