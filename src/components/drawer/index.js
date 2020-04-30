import React, { useContext } from 'react';
import { WordsContext } from '../../WordsContext';
import bg_tile from './bg_tile.png';
import './styles.scss';

const drawWord = (words, setWords, setCurrentWord, setShowWord) => () => {
  let wordArray = [...words];
  let randIndex = Math.floor(Math.random() * wordArray.length);
  setCurrentWord(wordArray[randIndex]);
  wordArray.splice(randIndex, 1)
  setWords(wordArray);
  setShowWord(true);
}

const Drawer = () => {
  const { words, setWords, setCurrentWord, setShowWord } = useContext(WordsContext);
  return (
    <div className="drawerButton"
      style={{ backgroundImage: `url(${bg_tile})` }}
      onClick={drawWord(words, setWords, setCurrentWord, setShowWord)}>
      <div className="drawer">
        <div className="drawer_handle"></div>
      </div>
    </div>
  );
}
  
export default Drawer;
