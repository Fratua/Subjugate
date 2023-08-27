```typescript
import axios from 'axios';
import { TechnicalSchema } from '../types/TechnicalTypes';

const BASE_URL = process.env.REACT_APP_API_URL;

export const fetchTechnicalData = async (): Promise<TechnicalSchema> => {
  try {
    const response = await axios.get(`${BASE_URL}/technical`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateTechnicalData = async (data: TechnicalSchema): Promise<TechnicalSchema> => {
  try {
    const response = await axios.put(`${BASE_URL}/technical`, data);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const connectServer = async (): Promise<boolean> => {
  try {
    const response = await axios.get(`${BASE_URL}/connect`);
    return response.status === 200;
  } catch (error) {
    return false;
  }
};
```