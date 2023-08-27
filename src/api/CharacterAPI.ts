```typescript
import axios from 'axios';
import { CharacterSchema } from '../types/CharacterTypes';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchCharacterData = async (characterId: string): Promise<CharacterSchema> => {
  try {
    const response = await axios.get(`${BASE_URL}/characters/${characterId}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const createCharacter = async (characterData: CharacterSchema): Promise<CharacterSchema> => {
  try {
    const response = await axios.post(`${BASE_URL}/characters`, characterData);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateCharacter = async (characterId: string, characterData: CharacterSchema): Promise<CharacterSchema> => {
  try {
    const response = await axios.put(`${BASE_URL}/characters/${characterId}`, characterData);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteCharacter = async (characterId: string): Promise<void> => {
  try {
    await axios.delete(`${BASE_URL}/characters/${characterId}`);
  } catch (error) {
    throw new Error(error);
  }
};
```