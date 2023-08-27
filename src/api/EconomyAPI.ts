```typescript
import axios from 'axios';
import { EconomySchema } from '../types/EconomyTypes';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchEconomyData = async (): Promise<EconomySchema> => {
  try {
    const response = await axios.get(`${BASE_URL}/economy`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const completeTrade = async (tradeId: string): Promise<void> => {
  try {
    await axios.post(`${BASE_URL}/economy/trade/${tradeId}`);
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchMarketplaceData = async (): Promise<any> => {
  try {
    const response = await axios.get(`${BASE_URL}/economy/marketplace`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
```