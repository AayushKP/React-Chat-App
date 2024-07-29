const mongoose = require('mongoose');
const { Schema } = mongoose;

const messageSchema = new Schema({
    chatId: {
        type: Schema.Types.ObjectId,
        ref: "Chat"
    },
    content: {
        type: String,
        required: true
    }
})

const Message = mongoose.model("Message",messageSchema);
module.exports = Message