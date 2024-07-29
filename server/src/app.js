const http = require('http');
const path = require('path');
const express = require('express');

const app = express();
const server = http.createServer(app);

const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());

const { userRouter } = require('./routes/user.routes.js');
app.use("/user",userRouter);

const { socketConnection } = require('./socket-io.js');

app.use(express.static(path.resolve("./public")));


//serving the html

app.get('/chat-app', (req, res) => {
    res.sendFile( __dirname + "/public/index.html");
});

app.get('/chat-app/signup', (req, res) => {
    return res.sendFile(__dirname + "/public/Signup.html");
});

app.get('/chat-app/signin', (req, res) => {
    return res.sendFile(__dirname + "/public/Signin.html");
});

app.get('/user/dashboard',(req, res) => {
    return res.sendFile(  __dirname + "/public/dashboard.html");
});

app.get('/user/user-to-connect', (req, res) => {
    return res.sendFile(__dirname + "/public/userData.html");
});


socketConnection(server);

module.exports = server
