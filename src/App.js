import React, { useState, useMemo } from 'react';
import FadeIn from 'react-fade-in';

import './App.css';
import Drawer from './components/drawer';
import AddWord from './components/addWord';
import DrawnWord from './components/drawnWord';
import { WordsContext } from './WordsContext';

const App = () => {
  const [words, setWords] = useState([]);
  const [currentWord, setCurrentWord] = useState(null);
  const [showWord, setShowWord] = useState(false);
  const wordsValue = useMemo(() => ({ words, setWords }), [words, setWords]);
  const ContextValue = {
    ...wordsValue, currentWord, setCurrentWord, showWord, setShowWord
  }
  console.log('wordsValue=', wordsValue);
  return (
    <WordsContext.Provider value={ContextValue}>
      <div className="App">
        <DrawnWord/>
        <div className={showWord && 'BlurBg'}>
          <h1>Drawerds.</h1>
          <AddWord/>
          <div className="Dresser">
            <Drawer/>
            <Drawer/>
            <Drawer/>
          </div>
        </div>
      </div>
    </WordsContext.Provider>
  );
}

export default App;
