```javascript
import socket from './socket';

export const initiateTrade = (senderId, receiverId, items) => {
  socket.emit('tradeRequest', { senderId, receiverId, items });
};

socket.on('tradeRequest', ({ senderId, receiverId, items }) => {
  // Handle incoming trade request
  // This could involve updating the UI and prompting the user to accept or decline the trade
});

export const acceptTrade = (tradeId) => {
  socket.emit('tradeAccept', { tradeId });
};

socket.on('tradeAccept', ({ tradeId }) => {
  // Handle trade acceptance
  // This could involve updating the UI and initiating the trade process
});

export const declineTrade = (tradeId) => {
  socket.emit('tradeDecline', { tradeId });
};

socket.on('tradeDecline', ({ tradeId }) => {
  // Handle trade decline
  // This could involve updating the UI and notifying the user that the trade was declined
});

export const processTrade = (tradeId) => {
  socket.emit('tradeProcess', { tradeId });
};

socket.on('tradeProcess', ({ tradeId }) => {
  // Handle trade processing
  // This could involve updating the UI and transferring the traded items between the users
});
```