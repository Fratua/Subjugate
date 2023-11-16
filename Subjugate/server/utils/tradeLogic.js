const Trade = require('../models/Trade');
const User = require('../models/User');
const Item = require('../models/Item');

const initiateTrade = async (tradeDetails) => {
  const { senderId, receiverId, senderItems, receiverItems } = tradeDetails;

  // Check if users exist
  const sender = await User.findById(senderId);
  const receiver = await User.findById(receiverId);

  if (!sender || !receiver) {
    throw new Error('User not found');
  }

  // Check if items exist and belong to the respective users
  for (let itemId of senderItems) {
    const item = await Item.findById(itemId);
    if (!item || item.ownerId !== senderId) {
      throw new Error('Invalid item from sender');
    }
  }

  for (let itemId of receiverItems) {
    const item = await Item.findById(itemId);
    if (!item || item.ownerId !== receiverId) {
      throw new Error('Invalid item from receiver');
    }
  }

  // Create trade
  const trade = new Trade({
    senderId,
    receiverId,
    senderItems,
    receiverItems,
    status: 'pending'
  });

  await trade.save();

  return trade;
};

const processTrade = async (tradeId, accept) => {
  const trade = await Trade.findById(tradeId);

  if (!trade) {
    throw new Error('Trade not found');
  }

  if (trade.status !== 'pending') {
    throw new Error('Trade is not pending');
  }

  if (accept) {
    // Transfer items
    for (let itemId of trade.senderItems) {
      const item = await Item.findById(itemId);
      item.ownerId = trade.receiverId;
      await item.save();
    }

    for (let itemId of trade.receiverItems) {
      const item = await Item.findById(itemId);
      item.ownerId = trade.senderId;
      await item.save();
    }

    trade.status = 'completed';
  } else {
    trade.status = 'rejected';
  }

  await trade.save();

  return trade;
};

module.exports = {
  initiateTrade,
  processTrade
};