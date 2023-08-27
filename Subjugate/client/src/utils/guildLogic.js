```javascript
import socket from './socket';

export function createGuild(guildName, guildDescription, guildLeader) {
    socket.emit('createGuild', { guildName, guildDescription, guildLeader });
}

export function joinGuild(guildId, userId) {
    socket.emit('joinGuild', { guildId, userId });
}

export function leaveGuild(guildId, userId) {
    socket.emit('leaveGuild', { guildId, userId });
}

export function manageGuild(guildId, action, userId) {
    socket.emit('manageGuild', { guildId, action, userId });
}

socket.on('guildInvite', function(data) {
    // Handle guild invite logic here
});

socket.on('guildUpdate', function(data) {
    // Handle guild update logic here
});
```