```javascript
const socket = require('../utils/socket');
const Message = require('../models/Message');

// Function to send a chat message
const sendMessage = async (userId, messageContent, channel) => {
  try {
    // Create a new message
    const message = new Message({
      user: userId,
      content: messageContent,
      channel: channel
    });

    // Save the message to the database
    await message.save();

    // Emit the chat message event to the appropriate channel
    socket.emit(channel, { user: userId, content: messageContent });

    return true;
  } catch (error) {
    console.error(`Error sending message: ${error}`);
    return false;
  }
};

module.exports = {
  sendMessage
};
```