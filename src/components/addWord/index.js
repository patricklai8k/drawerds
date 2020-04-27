import React, { useContext } from 'react';
import { WordsContext } from '../../WordsContext';

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
      {words}
      <button onClick={addWord(words, setWords)}>test</button>
      <input onChange={e => setTempWord(e.target.value)}></input>
    </div>
  );
};

export default AddWord;