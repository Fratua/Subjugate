```tsx
import React, { useState } from 'react';
import { CraftingSchema } from '../types/SkillsTypes';
import { craftItem } from '../utils/SkillsUtils';

const Crafting: React.FC = () => {
  const [craftingData, setCraftingData] = useState<CraftingSchema>({
    item: '',
    materials: [],
    success: false,
  });

  const handleCrafting = () => {
    const result = craftItem(craftingData);
    setCraftingData(prevState => ({ ...prevState, success: result }));
  };

  return (
    <div id="crafting-system">
      <h2>Crafting System</h2>
      <button onClick={handleCrafting}>Craft Item</button>
      {craftingData.success && <p>Item crafted successfully!</p>}
    </div>
  );
};

export default Crafting;
```