const server = require('./app.js');
const { connectDB } = require('./db/db.index.js');
require('dotenv').config()
connectDB().then(
  server.listen(3000, () => {
    console.log("server running at http://localhost:3000");
  })
).catch((error) => {
  console.log(`Database Connection Failed: ${error}`);
});
