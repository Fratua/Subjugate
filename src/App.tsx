```tsx
import React from 'react';
import './App.css';
import Authentication from './components/Authentication';
import World from './components/World';
import Character from './components/Character';
import Combat from './components/Combat';
import Skills from './components/Skills';
import Economy from './components/Economy';
import Social from './components/Social';
import Technical from './components/Technical';

function App() {
  return (
    <div className="App">
      <Authentication />
      <World />
      <Character />
      <Combat />
      <Skills />
      <Economy />
      <Social />
      <Technical />
    </div>
  );
}

export default App;
```