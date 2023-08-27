const express = require('express');
const router = express.Router();
const Trade = require('../models/Trade');
const User = require('../models/User');
const Item = require('../models/Item');
const auth = require('../utils/auth');

// Initiate a new trade
router.post('/initiate', auth, async (req, res) => {
    const { senderId, receiverId, items } = req.body;

    try {
        const sender = await User.findById(senderId);
        const receiver = await User.findById(receiverId);

        if (!sender || !receiver) {
            return res.status(404).json({ message: 'User not found' });
        }

        const trade = new Trade({
            sender: senderId,
            receiver: receiverId,
            items,
            status: 'pending'
        });

        await trade.save();

        res.status(200).json({ message: 'Trade initiated', trade });
    } catch (error) {
        res.status(500).json({ message: 'Error initiating trade', error });
    }
});

// Accept a trade
router.post('/accept', auth, async (req, res) => {
    const { tradeId } = req.body;

    try {
        const trade = await Trade.findById(tradeId);

        if (!trade) {
            return res.status(404).json({ message: 'Trade not found' });
        }

        if (trade.status !== 'pending') {
            return res.status(400).json({ message: 'Trade is not pending' });
        }

        trade.status = 'accepted';
        await trade.save();

        res.status(200).json({ message: 'Trade accepted', trade });
    } catch (error) {
        res.status(500).json({ message: 'Error accepting trade', error });
    }
});

// Reject a trade
router.post('/reject', auth, async (req, res) => {
    const { tradeId } = req.body;

    try {
        const trade = await Trade.findById(tradeId);

        if (!trade) {
            return res.status(404).json({ message: 'Trade not found' });
        }

        if (trade.status !== 'pending') {
            return res.status(400).json({ message: 'Trade is not pending' });
        }

        trade.status = 'rejected';
        await trade.save();

        res.status(200).json({ message: 'Trade rejected', trade });
    } catch (error) {
        res.status(500).json({ message: 'Error rejecting trade', error });
    }
});

module.exports = router;