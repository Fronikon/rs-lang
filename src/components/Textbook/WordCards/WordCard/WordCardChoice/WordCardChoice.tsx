import cn from "classnames";
import { wordsApi } from "../../../../../api/api";
import { Difficulties } from "../../../../../types/enums";
import styles from "./WordCardChoice.module.css";
import { asyncActions } from './../../../../../redux/asyncActions';
import { ThunkDispatch } from 'redux-thunk';
import { StoreType } from "../../../../..";
import { useDispatch } from 'react-redux';
import { AnyAction } from "redux";

type PropsType = {
  wordId: string
  difficulty?: Difficulties
}

const WordCardChoice: React.FC<PropsType> = ({wordId, difficulty}) => {
  const isLearned = difficulty === Difficulties.learned || difficulty === Difficulties.learnedHard;
  const isHard = difficulty === Difficulties.hard || difficulty === Difficulties.learnedHard;
  const dispatch: ThunkDispatch<StoreType, [], AnyAction> = useDispatch();

  const changeDifficultyUserWord = async (value: string, oppositeValue: string) => {
    if (difficulty === oppositeValue) {
      await wordsApi.updateUserWord(wordId, Difficulties.learnedHard);
    } else {
      await wordsApi.postUserWord(wordId, value);
    }
    dispatch(asyncActions.getWords());
  };

  const onDeleteWord = async (value: string) => {
    if (difficulty === Difficulties.learnedHard) {
      await wordsApi.updateUserWord(wordId, value);
    } else {
      await wordsApi.deleteUserWord(wordId);
    }
    dispatch(asyncActions.getWords());
  };

  return (
    <div className={styles['word-card__choice']}>
      <button
        onClick={
          isLearned ?
            () => onDeleteWord(Difficulties.hard) :
            () => changeDifficultyUserWord(Difficulties.learned, Difficulties.hard)
        }
        className={cn(styles['word-card__button'], 'button', styles.know)}
      >{isLearned ? 'Я забыл' : 'Я выучил'}</button>
      <button
        onClick={
          isHard ?
            () => onDeleteWord(Difficulties.learned) :
            () => changeDifficultyUserWord(Difficulties.hard, Difficulties.learned)
        }
        className={cn(styles['word-card__button'], 'button', styles.unknown)}
      >{isHard ? 'Мне не сложно' : 'Мне сложно'}</button>
    </div>
  );
};

export default WordCardChoice;