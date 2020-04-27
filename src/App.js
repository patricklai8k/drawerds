import React, { useState, useMemo } from 'react';
import './App.css';
import Drawer from './components/drawer';
import AddWord from './components/addWord';
import { WordsContext } from './WordsContext';

const App = () => {
  const [words, setWords] = useState([]);
  const [currentWord, setCurrentWord] = useState(null);

  const wordsValue = useMemo(() => ({ words, setWords }), [words, setWords]);
  console.log('wordsValue=', wordsValue);
  return (
    <WordsContext.Provider value={{ ...wordsValue, currentWord, setCurrentWord}}>
      <div className="App">
        <h1>Drawerds.</h1>
        <AddWord/>
        <div className="Dresser">
          <Drawer/>
          <Drawer/>
          <Drawer/>
        </div>
      </div>
    </WordsContext.Provider>
  );
}

export default App;
