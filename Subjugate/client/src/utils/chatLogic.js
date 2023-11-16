import { socket } from './socket';

export const sendMessage = (channel, message) => {
  socket.emit('chatMessage', { channel, message });
};

export const receiveMessage = (callback) => {
  socket.on('chatMessage', (data) => {
    callback(data);
  });
};

export const joinChannel = (channel) => {
  socket.emit('joinChannel', channel);
};

export const leaveChannel = (channel) => {
  socket.emit('leaveChannel', channel);
};