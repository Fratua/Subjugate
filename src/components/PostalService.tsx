import React, { useState } from 'react';

interface Message {
  sender: string;
  recipient: string;
  content: string;
}

const PostalService: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = (message: Message) => {
    setMessages([...messages, message]);
  };

  return (
    <div>
      <h2>Postal Service</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
          sender: { value: string };
          recipient: { value: string };
          content: { value: string };
        };
        const message = {
          sender: target.sender.value,
          recipient: target.recipient.value,
          content: target.content.value
        };
        sendMessage(message);
      }}>
        <label>
          Sender:
          <input type="text" name="sender" />
        </label>
        <label>
          Recipient:
          <input type="text" name="recipient" />
        </label>
        <label>
          Message:
          <textarea name="content" />
        </label>
        <input type="submit" value="Send" />
      </form>
      <div>
        <h3>Messages</h3>
        {messages.map((message, index) => (
          <div key={index}>
            <p>From: {message.sender}</p>
            <p>To: {message.recipient}</p>
            <p>Message: {message.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostalService;