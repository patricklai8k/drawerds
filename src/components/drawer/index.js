import React, { useContext } from 'react';
import { WordsContext } from '../../WordsContext';
import bg_tile from './bg_tile.png';
import './styles.scss';
let showWord = '';

const drawWord = (words, setWords) => () => {
  let wordArray = [...words];
  let randIndex = Math.floor(Math.random() * wordArray.length);
  showWord = wordArray[randIndex];
  wordArray.splice(randIndex, 1)
  setWords(wordArray);
}

const Drawer = () => {
  const { words, setWords } = useContext(WordsContext);
  return (
    <div className="drawerButton"
      style={{ backgroundImage: `url(${bg_tile})` }}
      onClick={drawWord(words, setWords)}>
      <div className="drawer">
        <div className="drawer_handle"></div>
        <div>{showWord}</div>
      </div>
    </div>
  );
}
  
export default Drawer;
