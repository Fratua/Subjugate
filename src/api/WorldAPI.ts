```typescript
import axios from 'axios';
import { WorldSchema } from '../types/WorldTypes';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchWorldData = async (): Promise<WorldSchema> => {
  try {
    const response = await axios.get(`${BASE_URL}/world`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
```