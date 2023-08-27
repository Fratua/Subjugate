```tsx
import React, { useEffect, useState } from 'react';
import { TechnicalSchema } from '../types/TechnicalTypes';
import { connectServer } from '../utils/TechnicalUtils';

const ClientServer: React.FC = () => {
  const [serverStatus, setServerStatus] = useState<TechnicalSchema>({ isConnected: false });

  useEffect(() => {
    const checkServerConnection = async () => {
      const status = await connectServer();
      setServerStatus(status);
    };

    checkServerConnection();
  }, []);

  return (
    <div id="technical-system">
      <h2>Client-Server Connection Status</h2>
      {serverStatus.isConnected ? (
        <p>Connected to the server successfully.</p>
      ) : (
        <p>Failed to connect to the server. Please check your internet connection and try again.</p>
      )}
    </div>
  );
};

export default ClientServer;
```