```typescript
import { WorldSchema } from '../types/WorldTypes';

export const generateWorld = (): WorldSchema => {
  const world: WorldSchema = {
    terrains: ['forest', 'mountain', 'lake', 'city'],
    regions: [
      { name: 'Easy Region', difficulty: 'easy' },
      { name: 'Medium Region', difficulty: 'medium' },
      { name: 'Hard Region', difficulty: 'hard' },
    ],
    safeHavens: ['Safe Haven 1', 'Safe Haven 2', 'Safe Haven 3'],
  };

  return world;
};

export const getRegionDifficulty = (regionName: string): string => {
  const world = generateWorld();
  const region = world.regions.find((region) => region.name === regionName);

  return region ? region.difficulty : 'Region not found';
};

export const isSafeHaven = (location: string): boolean => {
  const world = generateWorld();
  return world.safeHavens.includes(location);
};
```