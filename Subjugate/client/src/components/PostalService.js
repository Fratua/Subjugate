import React, { useState, useEffect } from 'react';
import socket from '../utils/socket';

const PostalService = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    socket.on('postalMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, []);

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    socket.emit('postalMessage', newMessage);
    setNewMessage('');
  };

  return (
    <div id="postalService">
      <h2>Postal Service</h2>
      <div className="messages">
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={handleInputChange}
      />
      <button onClick={handleSendMessage}>Send Message</button>
    </div>
  );
};

export default PostalService;