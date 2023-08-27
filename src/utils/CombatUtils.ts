```typescript
import { CombatSchema } from '../types/CombatTypes';

export const initiateCombat = (player: CombatSchema, enemy: CombatSchema): string => {
  if (player.level < enemy.level) {
    return 'Enemy is too strong. Level up before initiating combat.';
  }

  const playerDamage = player.attack - enemy.defense;
  const enemyDamage = enemy.attack - player.defense;

  if (playerDamage > enemyDamage) {
    player.experience += enemy.level;
    return 'You won the combat!';
  } else if (playerDamage < enemyDamage) {
    return 'You lost the combat. Try again!';
  } else {
    return 'The combat was a draw.';
  }
};

export const formAlliance = (player: CombatSchema, ally: CombatSchema): string => {
  if (player.guild !== ally.guild) {
    return 'Both players need to be in the same guild to form an alliance.';
  }

  player.allies.push(ally);
  ally.allies.push(player);

  return 'Alliance formed successfully!';
};

export const populateMonsters = (region: string, difficulty: number): CombatSchema[] => {
  const monsters: CombatSchema[] = [];

  for (let i = 0; i < difficulty * 10; i++) {
    monsters.push({
      name: `Monster ${i}`,
      level: difficulty,
      attack: difficulty * 5,
      defense: difficulty * 3,
      experience: 0,
      allies: [],
      guild: '',
    });
  }

  return monsters;
};
```