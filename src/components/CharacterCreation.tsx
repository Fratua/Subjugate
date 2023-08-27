import React, { useState } from 'react';
import { CharacterSchema } from '../types/CharacterTypes';
import { createCharacter } from '../utils/CharacterUtils';

const CharacterCreation: React.FC = () => {
  const [character, setCharacter] = useState<CharacterSchema>({
    name: '',
    class: '',
    hairstyle: '',
    eyeColor: '',
    armorStyle: '',
    weapon: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCharacter({
      ...character,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    createCharacter(character);
  };

  return (
    <div id="character-creation">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={character.name}
          onChange={handleInputChange}
          placeholder="Character Name"
          required
        />
        <input
          type="text"
          name="class"
          value={character.class}
          onChange={handleInputChange}
          placeholder="Character Class"
          required
        />
        <input
          type="text"
          name="hairstyle"
          value={character.hairstyle}
          onChange={handleInputChange}
          placeholder="Hairstyle"
          required
        />
        <input
          type="text"
          name="eyeColor"
          value={character.eyeColor}
          onChange={handleInputChange}
          placeholder="Eye Color"
          required
        />
        <input
          type="text"
          name="armorStyle"
          value={character.armorStyle}
          onChange={handleInputChange}
          placeholder="Armor Style"
          required
        />
        <input
          type="text"
          name="weapon"
          value={character.weapon}
          onChange={handleInputChange}
          placeholder="Weapon"
          required
        />
        <button type="submit">Create Character</button>
      </form>
    </div>
  );
};

export default CharacterCreation;