import cn from "classnames";
import { wordsApi } from "../../../../api/api";
import { Difficulties } from "../../../../types/enums";
import styles from "./WordCardChoice.module.css";
import { asyncActions } from '../../../../redux/asyncActions';
import { ThunkDispatch } from 'redux-thunk';
import { StoreType } from "../../../..";
import { useDispatch } from 'react-redux';
import { AnyAction } from "redux";

type PropsType = {
  wordId: string
  difficulty?: Difficulties
}

const WordCardChoice: React.FC<PropsType> = ({wordId, difficulty}) => {
  const dispatch: ThunkDispatch<StoreType, [], AnyAction> = useDispatch();

  const changeDifficultyUserWord = async (value: string, oppositeValue: string) => {
    if (difficulty === oppositeValue) {
      await wordsApi.updateUserWord(wordId, value);
    } else if(difficulty === value) {
      await wordsApi.deleteUserWord(wordId);
    } else {
      await wordsApi.postUserWord(wordId, value);
    }
    dispatch(asyncActions.getWords());
    dispatch(asyncActions.getHardWords());
  };

  return (
    <div className={styles['word-card__choice']}>
      <button
        onClick={
          () => changeDifficultyUserWord(Difficulties.learned, Difficulties.hard)
        }
        className={cn(styles['word-card__button'], 'button', styles.learned)}
      >{difficulty === Difficulties.learned ? 'Я забыл' : 'Я выучил'}</button>
      <button
        onClick={
          () => changeDifficultyUserWord(Difficulties.hard, Difficulties.learned)
        }
        className={cn(styles['word-card__button'], 'button', styles.hard)}
      >{difficulty === Difficulties.hard ? 'Мне не сложно' : 'Мне сложно'}</button>
    </div>
  );
};

export default WordCardChoice;