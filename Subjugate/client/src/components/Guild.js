import React, { useState, useEffect } from 'react';
import { socket } from '../utils/socket';
import guildLogic from '../utils/guildLogic';

const Guild = () => {
  const [guild, setGuild] = useState(null);
  const [guildMembers, setGuildMembers] = useState([]);
  const [guildInvites, setGuildInvites] = useState([]);

  useEffect(() => {
    socket.on('guildUpdate', data => {
      setGuild(data.guild);
      setGuildMembers(data.members);
      setGuildInvites(data.invites);
    });

    return () => {
      socket.off('guildUpdate');
    };
  }, []);

  const handleInvite = (username) => {
    guildLogic.sendGuildInvite(username);
  };

  const handleAcceptInvite = (inviteId) => {
    guildLogic.acceptGuildInvite(inviteId);
  };

  return (
    <div id="guildHall">
      <h2>{guild ? guild.name : 'No Guild'}</h2>
      {guild && (
        <div>
          <h3>Members</h3>
          <ul>
            {guildMembers.map(member => (
              <li key={member.id}>{member.username}</li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <h3>Invites</h3>
        <ul>
          {guildInvites.map(invite => (
            <li key={invite.id}>
              {invite.from} - 
              <button onClick={() => handleAcceptInvite(invite.id)}>Accept</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <input type="text" placeholder="Username" id="inviteUsername" />
        <button onClick={() => handleInvite(document.getElementById('inviteUsername').value)}>Invite to Guild</button>
      </div>
    </div>
  );
};

export default Guild;