import React from 'react';

import GlobalStyles from './styles/globals';
import Header from './components/Header';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
        <Header/>
        <Board/>
        <GlobalStyles/>
    </div>
  );
}

export default App;
