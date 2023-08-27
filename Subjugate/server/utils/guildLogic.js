```javascript
const Guild = require('../models/Guild');
const User = require('../models/User');

const manageGuild = async (guildId, action, userId) => {
  try {
    const guild = await Guild.findById(guildId);
    if (!guild) {
      throw new Error('Guild not found');
    }

    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    switch (action) {
      case 'join':
        if (guild.members.includes(userId)) {
          throw new Error('User is already a member of this guild');
        }
        guild.members.push(userId);
        break;
      case 'leave':
        if (!guild.members.includes(userId)) {
          throw new Error('User is not a member of this guild');
        }
        guild.members = guild.members.filter(memberId => memberId !== userId);
        break;
      default:
        throw new Error('Invalid action');
    }

    await guild.save();
    return guild;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  manageGuild
};
```