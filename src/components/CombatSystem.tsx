import React, { useState, useEffect } from 'react';
import { CombatSchema } from '../types/CombatTypes';
import { initiateCombat } from '../utils/CombatUtils';
import { fetchCombatData } from '../api/CombatAPI';

const CombatSystem: React.FC = () => {
  const [combatData, setCombatData] = useState<CombatSchema | null>(null);

  useEffect(() => {
    fetchCombatData().then(data => setCombatData(data));
  }, []);

  const handleCombatInitiation = () => {
    if (combatData) {
      initiateCombat(combatData);
    }
  };

  return (
    <div id="combat-system">
      <h2>Combat System</h2>
      <button onClick={handleCombatInitiation}>Initiate Combat</button>
    </div>
  );
};

export default CombatSystem;