const Message = require('../models/Message');
const socket = require('../utils/socket');

exports.sendMessage = async (req, res) => {
    try {
        const { sender, recipient, content, channel } = req.body;
        const newMessage = new Message({ sender, recipient, content, channel });
        const savedMessage = await newMessage.save();

        // Emit the message to the recipient
        socket.emit('chatMessage', savedMessage);

        res.status(200).json({ message: 'Message sent successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while sending the message.' });
    }
};

exports.getMessages = async (req, res) => {
    try {
        const { channel } = req.params;
        const messages = await Message.find({ channel }).sort({ createdAt: -1 }).limit(50);

        res.status(200).json({ messages });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching messages.' });
    }
};