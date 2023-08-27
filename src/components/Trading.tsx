```tsx
import React, { useState } from 'react';
import { Trade } from '../types/EconomyTypes';
import { completeTrade } from '../utils/EconomyUtils';

const Trading: React.FC = () => {
  const [trade, setTrade] = useState<Trade>({});

  const handleTrade = (trade: Trade) => {
    setTrade(trade);
    completeTrade(trade).then((message) => {
      if (message === 'tradeCompleted') {
        alert('Trade completed successfully');
      } else {
        alert('Trade failed');
      }
    });
  };

  return (
    <div id="trading-system">
      <h2>Trading System</h2>
      <button onClick={() => handleTrade(trade)}>Complete Trade</button>
    </div>
  );
};

export default Trading;
```