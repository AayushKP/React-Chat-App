const rooms = {};

function joinPrivateRoom(socket, userData) {
    const userId = userData._id;
    const chat = userData.chats;

    for(var i = 0;i < chat.length;i++){
        const roomName = chat[i];
        if(!rooms[roomName]){
            rooms[roomName] = [];
            rooms[roomName].push(userId);
            socket.to(roomName).emit('message',`user ${userId} has joined the room`);
        }else{
            rooms[roomName].push(userId);
            socket.to(roomName).emit('message',`user ${userId} has joined the room`);
        }
        socket.join(roomName);
    }
}

function leavePrivateRoom(socket , userData){
    const userId = userData._id;
    const chat = userData.chats;

    for(var i = 0;i < chat.length;i++){
        const roomName = chat[i];
        socket.leave(roomName);
        rooms[roomName] = rooms[roomName].filter(id => id !== userId);
        socket.to(roomName).emit('message',`User ${userId} has left the room`);
    }
}

function joinRoom(socket, roomName){
    if(!rooms[roomName]){
        //if room not created
        rooms[roomName] = [];
    }

    //push the cleint-id to the room
    rooms[roomName].push(socket.id);
    //console.log(rooms)
    socket.join(roomName);

    socket.to(roomName).emit('message',`user ${socket.id} has joined the room`);
}

function leaveRoom(socket, roomName){
    socket.leave(roomName);
    rooms[roomName] = rooms[roomName].filter(id => id !== socket.id);
    socket.to(roomName).emit('message',`User ${socket.id} has left the room`);
}

module.exports  = {
    joinPrivateRoom,
    leavePrivateRoom,
    joinRoom,
    leaveRoom
}