import React, { useContext, useEffect, useState } from 'react';
import { WordsContext } from '../../WordsContext';
import classNames from 'classnames';

import './styles.scss'

const onOuterClick = (setShowWord, setHide) => () => {
  setHide(true)
  setTimeout(() => setShowWord(false), 1000);
};

const DrawnWord = () => {
  const { currentWord, setShowWord } = useContext(WordsContext);
  const [hide, setHide] = useState(true);
  const shownWordClass = classNames({
    shownWord: true, shownWordHide: hide, shownWordShow: !hide
  })

  useEffect(() => {
    setTimeout(setHide(false), 10);
  }, []);

  return (
    <div className="shownWordContainer" onClick={onOuterClick(setShowWord, setHide)}>
      <div className={shownWordClass}>
        <div className="shownWordContent">
          {currentWord}
        </div>
      </div>
    </div>
  );
}

export default DrawnWord;