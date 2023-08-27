const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const gameController = require('../controllers/gameController');
const chatController = require('../controllers/chatController');
const tradeController = require('../controllers/tradeController');
const guildController = require('../controllers/guildController');

// User routes
router.post('/user/register', userController.createUser);
router.post('/user/login', userController.authenticate);

// Game routes
router.get('/game/state', gameController.getGameState);
router.post('/game/state', gameController.updateGameState);

// Chat routes
router.post('/chat/send', chatController.sendMessage);

// Trade routes
router.post('/trade/initiate', tradeController.initiateTrade);
router.post('/trade/accept', tradeController.acceptTrade);
router.post('/trade/reject', tradeController.rejectTrade);

// Guild routes
router.post('/guild/create', guildController.createGuild);
router.post('/guild/invite', guildController.inviteToGuild);
router.post('/guild/leave', guildController.leaveGuild);

module.exports = router;