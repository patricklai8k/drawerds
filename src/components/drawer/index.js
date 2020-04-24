import React, { useContext } from 'react';
import { WordsContext } from '../../WordsContext';

let showWord = '';

const drawWord = (words, setWords) => () => {
  let wordArray = [...words];
  let randIndex = Math.floor(Math.random() * wordArray.length);
  showWord = wordArray[randIndex];
  wordArray.slice(randIndex, 1)
  console.log(wordArray);
  setWords(wordArray);
}

const Drawer = () => {
  const { words, setWords } = useContext(WordsContext);
  return (
    <div className="drawer">
      Drawer Component!
      <button onClick={drawWord(words, setWords)}>DRAW</button>
      <div>{showWord}</div>
    </div>
  );
}
  
export default Drawer;
