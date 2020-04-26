import React, { useState, useMemo } from 'react';
import './App.css';
import Drawer from './components/drawer';
import AddWord from './components/addWord';
import { WordsContext } from './WordsContext';

const App = () => {
  const [words, setWords] = useState([]);

  const ProviderValue = useMemo(() => ({ words, setWords }), [words, setWords]);

  return (
    <WordsContext.Provider value={ProviderValue}>
      <div className="App">
        <h1>Drawerds.</h1>
        <AddWord/>
        <Drawer/>
      </div>
    </WordsContext.Provider>
  );
}

export default App;
