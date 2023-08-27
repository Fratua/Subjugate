```tsx
import React, { useState } from 'react';
import { CharacterSchema } from '../types/CharacterTypes';

interface CharacterCustomizationProps {
  character: CharacterSchema;
  onCharacterUpdate: (updatedCharacter: CharacterSchema) => void;
}

const CharacterCustomization: React.FC<CharacterCustomizationProps> = ({ character, onCharacterUpdate }) => {
  const [updatedCharacter, setUpdatedCharacter] = useState<CharacterSchema>(character);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUpdatedCharacter({ ...updatedCharacter, [name]: value });
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onCharacterUpdate(updatedCharacter);
  };

  return (
    <div id="character-customization">
      <form onSubmit={handleFormSubmit}>
        <label>
          Hairstyle:
          <input type="text" name="hairstyle" value={updatedCharacter.hairstyle} onChange={handleInputChange} />
        </label>
        <label>
          Eye Color:
          <input type="text" name="eyeColor" value={updatedCharacter.eyeColor} onChange={handleInputChange} />
        </label>
        <label>
          Armor Style:
          <input type="text" name="armorStyle" value={updatedCharacter.armorStyle} onChange={handleInputChange} />
        </label>
        <label>
          Weaponry:
          <input type="text" name="weaponry" value={updatedCharacter.weaponry} onChange={handleInputChange} />
        </label>
        <button type="submit">Update Character</button>
      </form>
    </div>
  );
};

export default CharacterCustomization;
```