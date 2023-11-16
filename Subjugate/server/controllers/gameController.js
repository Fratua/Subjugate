const User = require('../models/User');
const Region = require('../models/Region');
const Monster = require('../models/Monster');
const gameLogic = require('../utils/gameLogic');

exports.updateGameState = async (req, res) => {
    try {
        const { userId, regionId } = req.body;

        // Fetch user and region data
        const user = await User.findById(userId);
        const region = await Region.findById(regionId);

        // Update user's current region
        user.currentRegion = regionId;
        await user.save();

        // Calculate combat results if there are monsters in the region
        if (region.monsters.length > 0) {
            const combatResults = gameLogic.calculateCombat(user, region.monsters);
            user.hp -= combatResults.damageTaken;
            user.exp += combatResults.expGained;

            // Update user's level if they have enough experience
            if (user.exp >= gameLogic.expToLevelUp(user.level)) {
                user.level++;
                user.exp = 0;
            }

            // Remove defeated monsters from the region
            region.monsters = region.monsters.filter(monster => !combatResults.defeatedMonsters.includes(monster._id));
            await region.save();

            // Update user's HP and EXP
            await user.save();
        }

        res.json({ user, region });
    } catch (err) {
        res.status(500).json({ error: 'Failed to update game state' });
    }
};