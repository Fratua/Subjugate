import React, { useState, useEffect } from 'react';
import { calculateCombat } from '../utils/gameLogic';
import socket from '../utils/socket';

const Combat = () => {
  const [combatLog, setCombatLog] = useState([]);
  const [combatInput, setCombatInput] = useState('');

  useEffect(() => {
    socket.on('combatUpdate', (combatUpdate) => {
      setCombatLog((prevLog) => [...prevLog, combatUpdate]);
    });
  }, []);

  const handleCombatInput = (event) => {
    setCombatInput(event.target.value);
  };

  const handleCombatSubmit = (event) => {
    event.preventDefault();
    const combatResult = calculateCombat(combatInput);
    socket.emit('combatAction', combatResult);
    setCombatInput('');
  };

  return (
    <div id="combatArea">
      <h2>Combat Area</h2>
      <form onSubmit={handleCombatSubmit}>
        <input
          type="text"
          value={combatInput}
          onChange={handleCombatInput}
          placeholder="Enter combat command"
        />
        <button type="submit">Attack</button>
      </form>
      <div className="combatLog">
        {combatLog.map((log, index) => (
          <p key={index}>{log}</p>
        ))}
      </div>
    </div>
  );
};

export default Combat;