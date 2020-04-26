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
    <button className="drawer_container" style={{ backgroundImage: `url(${bg_tile})` }}>
      <div className="drawer">
        <div className="drawer_handle" onClick={drawWord(words, setWords)}></div>
        <div>{showWord}</div>
      </div>
    </button>
  );
}
  
export default Drawer;
