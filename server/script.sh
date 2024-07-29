#!/bin/bash

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Install Node.js and npm if not already installed
if ! command_exists node || ! command_exists npm; then
    echo "Node.js and npm are required. Installing..."
    curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
    sudo apt-get install -y nodejs
else
    echo "Node.js and npm are already installed."
    echo "installing pnpm"
    npm i pnpm
fi

# Create a new directory for the project
PROJECT_DIR="simple-socket-server"
mkdir -p $PROJECT_DIR
cd $PROJECT_DIR

# Initialize a new Node.js project
echo "Initializing Node.js project..."
pnpm init

# Install necessary packages
echo "Installing socket.io..."
pnpm add socket.io express
pnpm add -D nodemon

# Create a .gitignore
cat << 'EOF' > .gitignore
node_modules/
.env
.git
EOF

# Create a simple socket server file
cat << 'EOF' > index.js
const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io"); 

const app = express(); 
const server = createServer(app); 
const io = new Server(server); 

app.get("/", (req, res) => {
  res.send("<h1>Socket Server is running 🚀</h1>");
});

io.on("connection", (socket) => {
  console.log("User connected", socket.id);

  socket.on("message", (message) => {
    const msg = JSON.parse(message);
    console.log(msg);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});

EOF

# Add scripts to package.json
echo "Adding dev and start scripts to package.json..."
node -e "
const fs = require('fs');
const packageJson = JSON.parse(fs.readFileSync('package.json'));
packageJson.scripts = {
  ...packageJson.scripts,
  dev: 'nodemon index.js',
  start: 'node index.js'
};
fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
"

# Create a .gitignore
cat << 'EOF' > READme.md
# Simple Socket Server

## Setup

- `cd simple-socket-server`
- `pnpm dev` : for development mode
- `pnpm start` : for production mode
EOF

# Instructions to run the server
echo "Setup complete. To run the server, execute the following commands:"
echo "cd $PROJECT_DIR"
echo "pnpm dev   # For development mode"
echo "pnpm start     # For production mode"

