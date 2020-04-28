import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import WelcomePage from './components/WelcomePage';
import CharList from './components/CharList';



function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Route exact path='/' component={WelcomePage} />
        <Route path='/characters' component={CharList} />
      </main>
    </div>
  );
}

export default App;
