import React, { useState } from 'react';

const CharacterCreation = () => {
  const [character, setCharacter] = useState({
    name: '',
    class: '',
    hairstyle: '',
    eyeColor: '',
    armorStyle: '',
    weapon: ''
  });

  const handleInputChange = (event) => {
    setCharacter({
      ...character,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically send the character data to the server
    // For the purpose of this example, we'll just log it to the console
    console.log(character);
  };

  return (
    <form id="characterCreationForm" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleInputChange} />
      </label>
      <label>
        Class:
        <select name="class" onChange={handleInputChange}>
          <option value="">Select a class</option>
          <option value="warrior">Warrior</option>
          <option value="mage">Mage</option>
          <option value="archer">Archer</option>
        </select>
      </label>
      <label>
        Hairstyle:
        <input type="text" name="hairstyle" onChange={handleInputChange} />
      </label>
      <label>
        Eye Color:
        <input type="text" name="eyeColor" onChange={handleInputChange} />
      </label>
      <label>
        Armor Style:
        <input type="text" name="armorStyle" onChange={handleInputChange} />
      </label>
      <label>
        Weapon:
        <input type="text" name="weapon" onChange={handleInputChange} />
      </label>
      <input type="submit" value="Create Character" />
    </form>
  );
};

export default CharacterCreation;