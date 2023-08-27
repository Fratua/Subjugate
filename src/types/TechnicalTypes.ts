```typescript
export interface Server {
  id: string;
  name: string;
  capacity: number;
  currentLoad: number;
}

export interface Database {
  id: string;
  name: string;
  serverId: string;
  tables: Array<Table>;
}

export interface Table {
  id: string;
  name: string;
  rows: number;
}

export interface Security {
  encryption: string;
  twoFactorAuthentication: boolean;
  passwordStrengthRequirement: string;
}
```