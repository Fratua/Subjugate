import React, { useState, useEffect } from 'react';
import { fetchEconomyData } from '../api/EconomyAPI';
import { EconomySchema } from '../types/EconomyTypes';

const Marketplaces: React.FC = () => {
  const [marketplaces, setMarketplaces] = useState<EconomySchema[]>([]);

  useEffect(() => {
    fetchEconomyData().then(data => setMarketplaces(data));
  }, []);

  return (
    <div id="marketplaces">
      {marketplaces.map((marketplace, index) => (
        <div key={index}>
          <h2>{marketplace.name}</h2>
          <p>{marketplace.description}</p>
          <ul>
            {marketplace.items.map((item, i) => (
              <li key={i}>
                <h3>{item.name}</h3>
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Marketplaces;