const mongoose = require("mongoose");
const Chat = require("./chat.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true,"Password is required"],
    },
    chats:[
        {
            type: Schema.Types.ObjectId,
            ref: "Chat"
        }
    ],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
},{timestamps: true})

userSchema.pre("save", async function (next) {
    if(!this.isModified("password"))    return next();
    this.password = await bcrypt.hash(this.password,10);
    next()
})

userSchema.methods.validatePassword = async function(password){
    return await bcrypt.compare(password,this.password);
}

userSchema.methods.generateToken = function() {
    return jwt.sign({
        _id: this.id,
        username: this.username,
        email: this.email
    },process.env.AUTH_SECRET,{expiresIn: '1d'})
}

const User = mongoose.model("User",userSchema);

module.exports = {
    User
}