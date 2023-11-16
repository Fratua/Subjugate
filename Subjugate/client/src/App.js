import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CharacterCreation from './components/CharacterCreation';
import World from './components/World';
import Combat from './components/Combat';
import Skills from './components/Skills';
import Crafting from './components/Crafting';
import Trading from './components/Trading';
import Chat from './components/Chat';
import Guild from './components/Guild';
import Marketplace from './components/Marketplace';
import PostalService from './components/PostalService';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/character-creation" component={CharacterCreation} />
        <Route path="/world" component={World} />
        <Route path="/combat" component={Combat} />
        <Route path="/skills" component={Skills} />
        <Route path="/crafting" component={Crafting} />
        <Route path="/trading" component={Trading} />
        <Route path="/chat" component={Chat} />
        <Route path="/guild" component={Guild} />
        <Route path="/marketplace" component={Marketplace} />
        <Route path="/postal-service" component={PostalService} />
        <Route path="/" component={World} />
      </Switch>
    </Router>
  );
}

export default App;