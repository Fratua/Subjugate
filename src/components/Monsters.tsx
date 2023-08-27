```tsx
import React, { useState, useEffect } from 'react';
import { MonsterSchema } from '../types/CombatTypes';
import { fetchMonsterData } from '../api/CombatAPI';

const Monsters: React.FC = () => {
  const [monsters, setMonsters] = useState<MonsterSchema[]>([]);

  useEffect(() => {
    const getMonsters = async () => {
      const data = await fetchMonsterData();
      setMonsters(data);
    };
    getMonsters();
  }, []);

  return (
    <div id="monsters">
      {monsters.map((monster, index) => (
        <div key={index}>
          <h2>{monster.name}</h2>
          <p>HP: {monster.hp}</p>
          <p>Attack: {monster.attack}</p>
          <p>Defense: {monster.defense}</p>
          <p>Difficulty: {monster.difficulty}</p>
        </div>
      ))}
    </div>
  );
};

export default Monsters;
```