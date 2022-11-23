import './App.css';

import Header from './Components/Header';

import React, { useState } from 'react';

import alpacaData from './alpacadata';

function App() {
  const state = useState(alpacaData);

  return (
    <div>
      <Header />
      <div className='container'>
        <div className='left'>
          <Preview alpacaState={state} />
        </div>
        <div className='right'><p>Right Side</p></div>
      </div>
    </div>
  );
}

export default App;
