import React, { useContext } from 'react';
import { WordsContext } from '../../WordsContext';

let currentWord = '';

const addWord = (words, setWords) => () => {
  setWords([...words, currentWord]);
}

const setCurrentWord = newWord => {
  currentWord = newWord;
}

const AddWord = () => {
  const { words, setWords } = useContext(WordsContext);
  return (
    <div>
      {words}
      <button onClick={addWord(words, setWords)}>test</button>
      <input onChange={e => setCurrentWord(e.target.value)}></input>
    </div>
  );
};

export default AddWord;