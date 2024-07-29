const mongoose = require('mongoose');
const { Schema } = mongoose;

const chatSchema = new Schema({
    groupName: {
        type: String
    },
    isGroup: {
        type: Boolean,
        default: false
    },
    member: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    message: [{
        type: Schema.Types.ObjectId,
        ref: "Message"
    }]
})

const Chat = mongoose.model("Chat",chatSchema);
module.exports = Chat