```tsx
import React, { useState, useEffect } from 'react';
import { EconomySchema } from '../types/EconomyTypes';
import { completeTrade } from '../utils/EconomyUtils';
import { fetchEconomyData } from '../api/EconomyAPI';

const Economy: React.FC = () => {
  const [economyData, setEconomyData] = useState<EconomySchema | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchEconomyData();
      setEconomyData(data);
    };

    fetchData();
  }, []);

  const handleTrade = (itemID: string, buyerID: string, sellerID: string) => {
    if (economyData) {
      const tradeResult = completeTrade(economyData, itemID, buyerID, sellerID);
      if (tradeResult) {
        setEconomyData(tradeResult);
      }
    }
  };

  return (
    <div id="economy-system">
      {economyData ? (
        <div>
          <h2>Marketplace</h2>
          {economyData.marketplace.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <button onClick={() => handleTrade(item.id, 'buyerID', 'sellerID')}>Buy</button>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Economy;
```