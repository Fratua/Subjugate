```typescript
import axios from 'axios';
import { SkillsSchema } from '../types/SkillsTypes';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchSkillsData = async (characterId: string): Promise<SkillsSchema> => {
  try {
    const response = await axios.get(`${BASE_URL}/skills/${characterId}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const acquireSkill = async (characterId: string, skillId: string): Promise<SkillsSchema> => {
  try {
    const response = await axios.post(`${BASE_URL}/skills/${characterId}`, { skillId });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
```