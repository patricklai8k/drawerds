import React, { useContext, useEffect, useState } from 'react';
import { WordsContext } from '../../WordsContext';
import classNames from 'classnames';

import './styles.scss'

const DrawnWord = () => {
  const { currentWord, setShowWord } = useContext(WordsContext);
  const [hide, setHide] = useState(true);
  const shownWordClass = classNames({ 
    shownWord: true, shownWordHide: hide, shownWordShow: !hide
  })

  useEffect(() => {
    console.log('useEffect');
    setTimeout(setHide(false), 10);
  }, []);

  return (
    <div className="shownWordContainer" onClick={() => setShowWord(false)}>
      <div className={shownWordClass}>
        <div className="shownWordContent">
          {currentWord}
        </div>
      </div>
    </div>
  );
}

export default DrawnWord;