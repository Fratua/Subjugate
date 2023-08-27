```typescript
export interface EconomySchema {
  currency: number;
  inventory: InventoryItem[];
  realEstate: RealEstate[];
}

export interface InventoryItem {
  id: string;
  name: string;
  description: string;
  quantity: number;
  value: number;
}

export interface RealEstate {
  id: string;
  name: string;
  description: string;
  location: string;
  value: number;
  owned: boolean;
}
```