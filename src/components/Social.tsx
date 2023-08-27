```tsx
import React, { useState, useEffect } from 'react';
import { SocialSchema } from '../types/SocialTypes';
import { joinGuild } from '../utils/SocialUtils';
import { fetchSocialData } from '../api/SocialAPI';

const Social: React.FC = () => {
  const [socialData, setSocialData] = useState<SocialSchema | null>(null);

  useEffect(() => {
    fetchSocialData().then(data => setSocialData(data));
  }, []);

  const handleJoinGuild = (guildId: string) => {
    if (socialData) {
      const updatedSocialData = joinGuild(socialData, guildId);
      setSocialData(updatedSocialData);
    }
  };

  return (
    <div id="social-system">
      {socialData && (
        <>
          <h2>Guilds</h2>
          {socialData.guilds.map(guild => (
            <div key={guild.id}>
              <h3>{guild.name}</h3>
              <button onClick={() => handleJoinGuild(guild.id)}>Join Guild</button>
            </div>
          ))}
          <h2>Chat Channels</h2>
          {socialData.chatChannels.map(channel => (
            <div key={channel.id}>
              <h3>{channel.name}</h3>
              <p>{channel.description}</p>
            </div>
          ))}
          <h2>Postal Service</h2>
          <p>{socialData.postalService.isActive ? 'Active' : 'Inactive'}</p>
        </>
      )}
    </div>
  );
};

export default Social;
```