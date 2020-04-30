import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import WelcomePage from './components/WelcomePage';
import CharList from './components/CharList';
import LocationsList from './components/LocationsList';
import EpisodeList from './components/EpisodeList';





function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Route exact path='/' component={WelcomePage} />
        <Route path='/characters' component={CharList} />
        <Route path='/locations' component={LocationsList} />
        <Route path='/episodes' component={EpisodeList} />
        
      </main>
    </div>
  );
}

export default App;
