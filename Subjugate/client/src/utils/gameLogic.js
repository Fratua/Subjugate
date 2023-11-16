```javascript
import socket from './socket';

export const calculateCombat = (player, monster) => {
  // Basic combat calculation based on player and monster stats
  let playerDamage = player.attack - monster.defense;
  let monsterDamage = monster.attack - player.defense;

  if (playerDamage < 0) playerDamage = 0;
  if (monsterDamage < 0) monsterDamage = 0;

  const playerHealthAfterCombat = player.health - monsterDamage;
  const monsterHealthAfterCombat = monster.health - playerDamage;

  return { playerHealthAfterCombat, monsterHealthAfterCombat };
};

export const updateGameState = (player, region, monsters) => {
  // Update player location
  player.region = region;

  // Update monsters in the region
  region.monsters = monsters;

  // Emit game update event to server
  socket.emit('gameUpdate', { player, region });
};

export const levelUp = (player) => {
  // Increase player level and update stats
  player.level += 1;
  player.attack += 5;
  player.defense += 5;
  player.health += 10;

  // Emit game update event to server
  socket.emit('gameUpdate', { player });
};

export const craftItem = (player, item) => {
  // Add crafted item to player inventory
  player.inventory.push(item);

  // Emit game update event to server
  socket.emit('gameUpdate', { player });
};
```