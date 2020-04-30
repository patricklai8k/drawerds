import React, {useContext} from 'react';
import { WordsContext } from '../../WordsContext';
import classNames from 'classnames';

import './styles.scss'

const DrawnWord = () => {
  const { currentWord, setShowWord, showWord } = useContext(WordsContext);

  return (
    <div className={classNames(
        {
          shownWordContainer: true
        })
      } onClick={() => setShowWord(false)}>
      <div className="shownWord">
        <div className="shownWordContent">
          {currentWord}
        </div>
      </div>
    </div>
  );
}

export default DrawnWord;