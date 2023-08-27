```tsx
import React, { useState, useEffect } from 'react';
import { CharacterSchema } from '../types/CharacterTypes';
import { createCharacter } from '../utils/CharacterUtils';
import CharacterCreation from './CharacterCreation';
import CharacterCustomization from './CharacterCustomization';

const Character: React.FC = () => {
  const [character, setCharacter] = useState<CharacterSchema | null>(null);

  useEffect(() => {
    const newCharacter = createCharacter();
    setCharacter(newCharacter);
  }, []);

  return (
    <div>
      {character ? (
        <div>
          <h2>{character.name}</h2>
          <CharacterCustomization character={character} />
        </div>
      ) : (
        <CharacterCreation onCreate={setCharacter} />
      )}
    </div>
  );
};

export default Character;
```