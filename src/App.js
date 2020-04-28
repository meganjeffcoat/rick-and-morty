import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import WelcomePage from './components/WelcomePage';


function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Route exact path='/' component={WelcomePage} />
      </main>
    </div>
  );
}

export default App;
