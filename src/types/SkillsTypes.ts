```typescript
export interface Skill {
  id: string;
  name: string;
  description: string;
  levelRequirement: number;
  classRequirement: string[];
}

export interface SkillTree {
  id: string;
  skills: Skill[];
}

export interface CraftingRecipe {
  id: string;
  name: string;
  description: string;
  ingredients: { item: string; quantity: number }[];
  result: string;
  skillRequirement: string;
}

export interface LevelingSystem {
  currentLevel: number;
  currentExperience: number;
  experienceToNextLevel: number;
}
```