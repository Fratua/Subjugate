```tsx
import React, { useState, useEffect } from 'react';
import { CombatSchema } from '../types/CombatTypes';
import { initiateCombat } from '../utils/CombatUtils';
import { fetchCombatData } from '../api/CombatAPI';

const Combat: React.FC = () => {
  const [combatData, setCombatData] = useState<CombatSchema | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCombatData();
      setCombatData(data);
    };

    fetchData();
  }, []);

  const handleCombat = (playerId: string, enemyId: string) => {
    if (combatData) {
      const result = initiateCombat(playerId, enemyId, combatData);
      if (result.success) {
        alert(`Combat initiated: ${result.message}`);
      } else {
        alert(`Combat failed: ${result.message}`);
      }
    }
  };

  return (
    <div id="combat-system">
      {combatData ? (
        <div>
          <h2>Combat System</h2>
          <button onClick={() => handleCombat('playerId', 'enemyId')}>
            Initiate Combat
          </button>
        </div>
      ) : (
        <p>Loading combat data...</p>
      )}
    </div>
  );
};

export default Combat;
```