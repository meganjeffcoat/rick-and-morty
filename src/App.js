import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import WelcomePage from './components/WelcomePage';
import Navigation from './components/Navigation';
import CharList from './components/CharList';
import LocationsList from './components/LocationsList';




function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Navigation />
        <Route exact path='/' component={WelcomePage} />
        <Route path='/characters' component={CharList} />
        <Route path='/locations' component={LocationsList} />
        
      </main>
    </div>
  );
}

export default App;
