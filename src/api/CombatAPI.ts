import axios from 'axios';
import { CombatSchema } from '../types/CombatTypes';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchCombatData = async (characterId: string): Promise<CombatSchema> => {
  try {
    const response = await axios.get(`${BASE_URL}/combat/${characterId}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const initiateCombat = async (combatData: CombatSchema): Promise<void> => {
  try {
    await axios.post(`${BASE_URL}/combat/initiate`, combatData);
  } catch (error) {
    throw new Error(error);
  }
};

export const updateCombatData = async (combatData: CombatSchema): Promise<void> => {
  try {
    await axios.put(`${BASE_URL}/combat/update`, combatData);
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteCombatData = async (characterId: string): Promise<void> => {
  try {
    await axios.delete(`${BASE_URL}/combat/delete/${characterId}`);
  } catch (error) {
    throw new Error(error);
  }
};