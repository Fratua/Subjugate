import io from 'socket.io-client';

let socket;

export const initiateSocket = (server) => {
  socket = io(server);
  console.log(`Connecting socket...`);
}

export const disconnectSocket = () => {
  console.log('Disconnecting socket...');
  if(socket) socket.disconnect();
}

export const subscribeToChat = (cb) => {
  if (!socket) return true;
  socket.on('chatMessage', msg => {
    console.log('Websocket event received!');
    return cb(null, msg);
  });
}

export const sendMessage = (room, message) => {
  if (socket) socket.emit('chatMessage', { room, message });
}

export const subscribeToTrade = (cb) => {
  if (!socket) return true;
  socket.on('tradeRequest', trade => {
    console.log('Trade request received!');
    return cb(null, trade);
  });
}

export const initiateTrade = (room, trade) => {
  if (socket) socket.emit('tradeRequest', { room, trade });
}

export const subscribeToGuild = (cb) => {
  if (!socket) return true;
  socket.on('guildInvite', invite => {
    console.log('Guild invite received!');
    return cb(null, invite);
  });
}

export const sendGuildInvite = (room, invite) => {
  if (socket) socket.emit('guildInvite', { room, invite });
}

export const subscribeToGameUpdate = (cb) => {
  if (!socket) return true;
  socket.on('gameUpdate', update => {
    console.log('Game update received!');
    return cb(null, update);
  });
}

export const sendGameUpdate = (room, update) => {
  if (socket) socket.emit('gameUpdate', { room, update });
}