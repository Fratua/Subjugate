```tsx
import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const Authentication: React.FC = () => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
  };

  const signOut = async () => {
    await firebase.auth().signOut();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <button onClick={signIn}>Sign In</button>;
  }

  return (
    <div>
      <p>Welcome, {user.displayName}</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};

export default Authentication;
```