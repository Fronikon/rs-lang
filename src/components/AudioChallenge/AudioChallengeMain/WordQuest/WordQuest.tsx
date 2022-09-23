import cn from 'classnames';
import { useEffect } from 'react';
import styles from './WordQuest.module.css';
import generalStyles from '../AudioChallengeMain.module.css';

type WordQuestPropsType = {
  wordId: string
  wordTranslate: string
  checkWord: (wordId: string) => void
  isShowResult: boolean
  isWrong: boolean
  isRight: boolean
}

const WordQuest: React.FC<WordQuestPropsType> = (props) => {
  const getClassForButton = () => {
    if(props.isWrong) {
      return 'wrong';
    } else if (props.isRight) {
      return 'right';
    } else {
      return 'normal';
    }
  };

  useEffect(() => {
    const wordsArray = document.getElementsByClassName('questionPage__item');
    const btnHandler = (event: KeyboardEvent) => {
      switch (event.code) {
      case 'Digit1':
        props.checkWord(wordsArray[0].id);
        break;
      case 'Digit2':
        props.checkWord(wordsArray[1].id);
        break;
      case 'Digit3':
        props.checkWord(wordsArray[2].id);
        break;
      case 'Digit4':
        props.checkWord(wordsArray[3].id);
        break;
      case 'Digit5':
        props.checkWord(wordsArray[4].id);
        break;
      }
    };
    document.addEventListener('keydown', btnHandler);
    return () => {
      document.removeEventListener('keydown', btnHandler);
    };
  });

  return (
    <button className={
      cn(
        styles.questionPage__item,
        generalStyles.questionPage__item,
        'questionPage__item',
        props.isShowResult && styles[getClassForButton()]
      )
    }
    onClick={() => props.checkWord(props.wordId)}
    id={props.wordId}
    disabled={props.isShowResult}
    >
      {props.wordTranslate}      
    </button>
  );
};


export default WordQuest;