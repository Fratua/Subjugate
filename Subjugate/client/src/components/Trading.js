import React, { useState, useEffect } from 'react';
import { socket } from '../utils/socket';
import { initiateTrade, processTrade } from '../utils/tradeLogic';

const Trading = () => {
  const [tradeRequest, setTradeRequest] = useState(null);
  const [tradeResponse, setTradeResponse] = useState(null);

  useEffect(() => {
    socket.on('tradeRequest', (request) => {
      setTradeRequest(request);
    });

    socket.on('tradeResponse', (response) => {
      setTradeResponse(response);
    });

    return () => {
      socket.off('tradeRequest');
      socket.off('tradeResponse');
    };
  }, []);

  const handleAcceptTrade = () => {
    const tradeResult = processTrade(tradeRequest);
    socket.emit('tradeResult', tradeResult);
  };

  const handleRejectTrade = () => {
    socket.emit('tradeResult', { success: false, message: 'Trade rejected' });
  };

  return (
    <div id="tradingPost">
      {tradeRequest && (
        <div>
          <h2>Trade Request</h2>
          <p>{tradeRequest.from} wants to trade with you.</p>
          <button onClick={handleAcceptTrade}>Accept</button>
          <button onClick={handleRejectTrade}>Reject</button>
        </div>
      )}
      {tradeResponse && (
        <div>
          <h2>Trade Response</h2>
          <p>{tradeResponse.message}</p>
        </div>
      )}
    </div>
  );
};

export default Trading;