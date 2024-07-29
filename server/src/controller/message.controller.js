const Message = require('../model/message.model');
const { asyncHandler } = require('../utils/asynchandler');
const Chat = require('../model/chat.model.js');
const { ApiResponse } = require('../utils/apiResponse.js');

const fetchMessage = asyncHandler(async (req, res) => {
    const chat = await Chat.findById(req.headers.second).populate('message');
    const username = req.headers.username;
    res.json(
        new ApiResponse(200,{
            chat,username
        },"All message fetched successfully")
    );
})

const sendPrivateMessage = asyncHandler(async (req, res) => {
    const chatId = req.body.chat._id;
    const content = req.body.content;

    const message = await Message.create({
        chat: chatId,
        content: content
    })
    const chat = await Chat.findById(chatId);
    chat.message.push(message._id);
    await chat.save();
    res.json(
        new ApiResponse(
            200,
        {
            chat,message
        },
            "Message Successfully Sent"
        )
    );
})

module.exports = {
    fetchMessage,
    sendPrivateMessage
}