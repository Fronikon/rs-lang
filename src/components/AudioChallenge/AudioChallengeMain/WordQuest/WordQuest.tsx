import cn from 'classnames';
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

  return (
    <button className={
      cn(
        styles.questionPage__item,
        generalStyles.questionPage__item,
        props.isShowResult && styles[getClassForButton()]
      )
    }
    onClick={() => props.checkWord(props.wordId)}
    disabled={props.isShowResult}
    >
      {props.wordTranslate}      
    </button>
  );
};


export default WordQuest;