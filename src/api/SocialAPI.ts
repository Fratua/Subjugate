```typescript
import axios from 'axios';
import { SocialSchema } from '../types/SocialTypes';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchGuildData = async (guildId: string): Promise<SocialSchema> => {
  try {
    const response = await axios.get(`${BASE_URL}/guilds/${guildId}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchChatData = async (chatId: string): Promise<SocialSchema> => {
  try {
    const response = await axios.get(`${BASE_URL}/chats/${chatId}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchPostalData = async (playerId: string): Promise<SocialSchema> => {
  try {
    const response = await axios.get(`${BASE_URL}/postal/${playerId}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
```