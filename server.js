const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const faker = require('faker');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
  const randomName = faker.name.findName();
  console.log(`${randomName} connected`);

  socket.on('message', (data) => {
    io.emit('message', { sender: randomName, message: data.message });
  });

  socket.on('disconnect', () => {
    console.log(`${randomName} disconnected`);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
