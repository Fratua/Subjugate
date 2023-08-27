```tsx
import React, { useEffect, useState } from 'react';
import { WorldSchema } from '../types/WorldTypes';
import { fetchWorldData } from '../api/WorldAPI';
import '../styles/WorldStyles.ts';

const World: React.FC = () => {
  const [worldData, setWorldData] = useState<WorldSchema | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWorldData();
      setWorldData(data);
    };

    fetchData();
  }, []);

  if (!worldData) {
    return <div>Loading...</div>;
  }

  return (
    <div id="world-map">
      {worldData.regions.map((region) => (
        <div key={region.id}>
          <h2>{region.name}</h2>
          <p>{region.description}</p>
          {region.safeHaven && <p>This is a safe haven.</p>}
        </div>
      ))}
    </div>
  );
};

export default World;
```