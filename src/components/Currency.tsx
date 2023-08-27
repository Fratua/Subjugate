import React, { useState, useEffect } from 'react';
import { EconomySchema } from '../types/EconomyTypes';
import { fetchEconomyData } from '../api/EconomyAPI';

const Currency: React.FC = () => {
  const [currencyData, setCurrencyData] = useState<EconomySchema | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchEconomyData();
      setCurrencyData(data);
    };

    fetchData();
  }, []);

  if (!currencyData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Currency System</h2>
      <p>Total Currency: {currencyData.totalCurrency}</p>
      <p>Exchange Rate: {currencyData.exchangeRate}</p>
    </div>
  );
};

export default Currency;