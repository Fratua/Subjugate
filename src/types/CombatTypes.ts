```typescript
export interface Combatant {
  id: string;
  name: string;
  health: number;
  attack: number;
  defense: number;
  speed: number;
  abilities: Ability[];
}

export interface Ability {
  id: string;
  name: string;
  power: number;
  cost: number;
}

export interface CombatLog {
  id: string;
  combatants: Combatant[];
  actions: CombatAction[];
}

export interface CombatAction {
  id: string;
  actor: Combatant;
  target: Combatant;
  ability: Ability;
  timestamp: Date;
}

export interface Alliance {
  id: string;
  name: string;
  members: Combatant[];
}

export interface Monster {
  id: string;
  name: string;
  health: number;
  attack: number;
  defense: number;
  speed: number;
  abilities: Ability[];
  aiBehavior: string;
}
```