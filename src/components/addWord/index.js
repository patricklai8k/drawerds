import React, { useContext } from 'react';
import { WordsContext } from '../../WordsContext';

import './styles.scss';

let tempWord = '';

const addWord = (words, setWords) => () => {
  setWords([...words, tempWord]);
}

const setTempWord = newWord => {
  tempWord = newWord;
}

const AddWord = () => {
  const { words, setWords } = useContext(WordsContext);
  return (
    <div>
      <input className="AddwordInput" onChange={e => setTempWord(e.target.value)}></input>
      <button className="AddwordButton" onClick={addWord(words, setWords)}>add a word!</button>
      <span>Word Count: {words.length}</span>
    </div>
  );
};

export default AddWord;