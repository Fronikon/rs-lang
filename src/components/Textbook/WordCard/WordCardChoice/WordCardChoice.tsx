import cn from "classnames";
import { ThunkDispatch } from 'redux-thunk';
import { useDispatch } from 'react-redux';
import { AnyAction } from "redux";
import { wordsApi } from "../../../../api/api";
import { Difficulties } from "../../../../types/enums";
import { asyncActions } from '../../../../redux/asyncActions';
import { StoreType } from "../../../..";
import { UserWordOptionalType } from "../../../../types/types";
import styles from "./WordCardChoice.module.css";

type PropsType = {
  wordId: string
  difficulty?: Difficulties
  optional?: UserWordOptionalType
}

const WordCardChoice: React.FC<PropsType> = ({wordId, difficulty, optional}) => {
  const dispatch: ThunkDispatch<StoreType, [], AnyAction> = useDispatch();

  const changeLearnedStatus = async () => {
    if (optional && difficulty) {
      await wordsApi.updateUserWord(wordId, Difficulties.common, {...optional, isLearned: !optional.isLearned});
    } else {
      await wordsApi.postUserWord(wordId, Difficulties.common, {sucsessAttempts: 0, isLearned: true});
    }
    dispatch(asyncActions.getWords());
    dispatch(asyncActions.getHardWords());
  };
  
  const makeWordHard = async () => {
    if (optional && difficulty) {
      const localDif = difficulty === Difficulties.hard ? Difficulties.common : Difficulties.hard;
      await wordsApi.updateUserWord(wordId, localDif, {...optional, isLearned: false});
    } else {
      await wordsApi.postUserWord(wordId, Difficulties.hard, {sucsessAttempts: 0, isLearned: false});
    }
    dispatch(asyncActions.getWords());
    dispatch(asyncActions.getHardWords());
  };

  return (
    <div className={styles['word-card__choice']}>
      {
        !optional?.isLearned ? <button
          onClick={changeLearnedStatus}
          className={cn(styles['word-card__button'], 'button', styles.learned)}
        >Я выучил</button>
          :
          <button
            onClick={changeLearnedStatus}
            className={cn(styles['word-card__button'], 'button', styles.learned)}
          >Я забыл</button>
      }
      {
        difficulty !== Difficulties.hard ? <button
          onClick={makeWordHard}
          className={cn(styles['word-card__button'], 'button', styles.hard)}
        >Мне сложно</button>
          :
          <button
            onClick={makeWordHard}
            className={cn(styles['word-card__button'], 'button', styles.hard)}
          >Мне не сложно</button>
      }
    </div>
  );
};

export default WordCardChoice;