const { joinPrivateRoom, leavePrivateRoom } = require("./rooms.js");

let io;
const socketConnection = (server) => {
  io = require('socket.io')(server);
  //soket.io
    io.on('connection', (socket) => {
    
        socket.on('join private room', (userData) => {
            joinPrivateRoom(socket,userData);
        })
    
        socket.on('leave private room', (userData) => {
            leavePrivateRoom(socket, userData);
        })

        socket.on("message", (message) => {
            const msg = JSON.parse(message);
            console.log(msg);
        });

        socket.on('send message', (chat, message) => {
            console.log(chat);
            console.log(message);
            const roomId = chat._id;
            console.log("send messgae: " , roomId);
            socket.to(roomId).emit('message', message.content);
        })
    
        socket.on("disconnect", () => {
            console.log("User Disconnected", socket.id);
        });
    });
};

const sendSocketMessage = (roomId, key, message) => {
    io.to(roomId).emit(key, message);
}

module.exports = {
    socketConnection,
    sendSocketMessage
}
