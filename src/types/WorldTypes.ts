```typescript
export interface Terrain {
  type: 'forest' | 'mountain' | 'lake' | 'city';
  difficultyLevel: number;
}

export interface Region {
  name: string;
  terrains: Terrain[];
  safeHaven: boolean;
}

export interface World {
  regions: Region[];
}
```