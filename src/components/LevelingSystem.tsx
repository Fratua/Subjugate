```tsx
import React, { useState, useEffect } from 'react';
import { CharacterSchema } from '../types/CharacterTypes';
import { fetchCharacterData } from '../api/CharacterAPI';

const LevelingSystem: React.FC = () => {
  const [character, setCharacter] = useState<CharacterSchema | null>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const data = await fetchCharacterData();
      setCharacter(data);
    };

    fetchCharacter();
  }, []);

  const levelUp = () => {
    if (character) {
      setCharacter({
        ...character,
        level: character.level + 1,
      });
    }
  };

  return (
    <div>
      {character && (
        <div>
          <h2>{character.name}</h2>
          <p>Level: {character.level}</p>
          <button onClick={levelUp}>Level Up</button>
        </div>
      )}
    </div>
  );
};

export default LevelingSystem;
```