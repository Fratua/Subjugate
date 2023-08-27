import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

const Database: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const db = firebase.database();
    db.ref('/').on('value', snapshot => {
      setData(snapshot.val());
    });
  }, []);

  return (
    <div>
      <h2>Database Data:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Database;