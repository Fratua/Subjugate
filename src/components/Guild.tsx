```tsx
import React, { useState, useEffect } from 'react';
import { GuildSchema } from '../types/SocialTypes';
import { joinGuild } from '../utils/SocialUtils';

interface GuildProps {
  guildData: GuildSchema;
}

const Guild: React.FC<GuildProps> = ({ guildData }) => {
  const [guild, setGuild] = useState<GuildSchema | null>(null);

  useEffect(() => {
    setGuild(guildData);
  }, [guildData]);

  const handleJoinGuild = () => {
    if (guild) {
      joinGuild(guild);
    }
  };

  return (
    <div id="guild-system">
      {guild ? (
        <div>
          <h2>{guild.name}</h2>
          <p>{guild.description}</p>
          <button onClick={handleJoinGuild}>Join Guild</button>
        </div>
      ) : (
        <p>Loading guild data...</p>
      )}
    </div>
  );
};

export default Guild;
```