```typescript
export interface CharacterSchema {
  id: string;
  name: string;
  class: string;
  level: number;
  experience: number;
  skills: Array<string>;
  inventory: Array<string>;
  hairstyle: string;
  eyeColor: string;
  armorStyle: string;
  weapon: string;
  region: string;
  guild: string;
}

export interface ClassSchema {
  name: string;
  abilities: Array<string>;
}

export interface SkillSchema {
  name: string;
  description: string;
  levelRequired: number;
}

export interface InventoryItemSchema {
  id: string;
  name: string;
  description: string;
  type: string; // weapon, armor, potion, etc.
  value: number; // in-game currency value
}
```