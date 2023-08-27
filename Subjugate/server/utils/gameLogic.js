```javascript
const User = require('../models/User');
const Monster = require('../models/Monster');
const Region = require('../models/Region');

const calculateCombat = async (userId, monsterId) => {
  try {
    const user = await User.findById(userId);
    const monster = await Monster.findById(monsterId);

    if (!user || !monster) {
      throw new Error('User or Monster not found');
    }

    const userAttack = user.level * user.strength;
    const monsterAttack = monster.level * monster.strength;

    if (userAttack > monsterAttack) {
      user.experience += monster.experience;
      if (user.experience >= user.level * 100) {
        user.level += 1;
        user.experience = 0;
      }
      await user.save();
      return { winner: 'user', level: user.level };
    } else {
      return { winner: 'monster' };
    }
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
};

const updateGameState = async () => {
  try {
    const regions = await Region.find();
    regions.forEach(async (region) => {
      const monsters = await Monster.find({ region: region._id });
      monsters.forEach(async (monster) => {
        if (monster.health <= 0) {
          monster.health = monster.maxHealth;
          await monster.save();
        }
      });
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  calculateCombat,
  updateGameState,
};
```