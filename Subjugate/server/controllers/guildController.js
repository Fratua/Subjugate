```javascript
const Guild = require('../models/Guild');
const User = require('../models/User');
const manageGuild = require('../utils/guildLogic');

exports.createGuild = async (req, res) => {
    const { guildName, guildMaster } = req.body;

    try {
        const guild = new Guild({
            name: guildName,
            master: guildMaster,
            members: [guildMaster]
        });

        await guild.save();

        const user = await User.findById(guildMaster);
        user.guild = guild._id;
        await user.save();

        res.status(201).json({ guild });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.joinGuild = async (req, res) => {
    const { guildId, userId } = req.body;

    try {
        const guild = await Guild.findById(guildId);
        const user = await User.findById(userId);

        if (!guild || !user) {
            return res.status(404).json({ error: 'Guild or User not found' });
        }

        if (guild.members.includes(userId)) {
            return res.status(400).json({ error: 'User already in guild' });
        }

        guild.members.push(userId);
        user.guild = guildId;

        await guild.save();
        await user.save();

        res.status(200).json({ guild });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.leaveGuild = async (req, res) => {
    const { guildId, userId } = req.body;

    try {
        const guild = await Guild.findById(guildId);
        const user = await User.findById(userId);

        if (!guild || !user) {
            return res.status(404).json({ error: 'Guild or User not found' });
        }

        if (!guild.members.includes(userId)) {
            return res.status(400).json({ error: 'User not in guild' });
        }

        guild.members = guild.members.filter(member => member !== userId);
        user.guild = null;

        await guild.save();
        await user.save();

        res.status(200).json({ guild });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.manageGuild = async (req, res) => {
    const { guildId, action, targetUserId } = req.body;

    try {
        const guild = await Guild.findById(guildId);
        const targetUser = await User.findById(targetUserId);

        if (!guild || !targetUser) {
            return res.status(404).json({ error: 'Guild or User not found' });
        }

        const updatedGuild = manageGuild(guild, action, targetUser);

        await updatedGuild.save();

        res.status(200).json({ guild: updatedGuild });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
```