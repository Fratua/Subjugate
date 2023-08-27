import React, { useState, useEffect } from 'react';
import { Alliance } from '../types/SocialTypes';
import { joinGuild } from '../utils/SocialUtils';

interface AlliancesProps {
  alliances: Alliance[];
}

const Alliances: React.FC<AlliancesProps> = ({ alliances }) => {
  const [selectedAlliance, setSelectedAlliance] = useState<Alliance | null>(null);

  const handleJoinAlliance = (alliance: Alliance) => {
    joinGuild(alliance);
    setSelectedAlliance(alliance);
  };

  useEffect(() => {
    if (selectedAlliance) {
      console.log(`Joined alliance: ${selectedAlliance.name}`);
    }
  }, [selectedAlliance]);

  return (
    <div>
      <h2>Alliances</h2>
      {alliances.map((alliance) => (
        <div key={alliance.id}>
          <h3>{alliance.name}</h3>
          <button onClick={() => handleJoinAlliance(alliance)}>Join Alliance</button>
        </div>
      ))}
    </div>
  );
};

export default Alliances;