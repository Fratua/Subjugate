```tsx
import React, { useState, useEffect } from 'react';
import { Message } from '../types/SocialTypes';

interface ChatProps {
  messages: Message[];
  sendMessage: (message: Message) => void;
}

const ChatSystem: React.FC<ChatProps> = ({ messages, sendMessage }) => {
  const [input, setInput] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSendMessage = () => {
    if (input) {
      sendMessage({ content: input, timestamp: new Date() });
      setInput('');
    }
  };

  useEffect(() => {
    const chatBox = document.getElementById('chat-box');
    if (chatBox) {
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  }, [messages]);

  return (
    <div id="chat-system">
      <div id="chat-box">
        {messages.map((message, index) => (
          <div key={index}>
            <span>{message.timestamp.toLocaleTimeString()}</span>
            <p>{message.content}</p>
          </div>
        ))}
      </div>
      <div id="chat-input">
        <input type="text" value={input} onChange={handleInputChange} />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatSystem;
```