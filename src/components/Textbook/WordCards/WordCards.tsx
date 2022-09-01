import WordCard from "./WordCard/WordCard";
import { useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { asyncActions } from './../../../redux/asyncActions';
import { StoreType } from "../../..";
import { WordType } from "../../../types/types";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from 'redux';
import { BASE_URL } from './../../../api/api';
import Loader from "../../Loader/Loader";
import styles from '../../Loader/Loader.module.css';
import cn from 'classnames';

type PropsType = {
  currentGroup: number
  currentPage: number
  wordCards: WordType[]
}

const WordCards: React.FC<PropsType> = ({currentGroup, currentPage, wordCards}) => {
  const dispatch: ThunkDispatch<StoreType, [], AnyAction> = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    dispatch(asyncActions.getWords(currentGroup, currentPage));
    setLoading(false);
  }, [dispatch, currentGroup, currentPage]);

  return (
    <div>
      {loading ? (
        <div className={cn(styles.loader_wrapper)}>
          <Loader />
        </div>
      ) : (
        wordCards.map((wordCard) => (
          <WordCard
            img={BASE_URL + wordCard.image}
            audio={BASE_URL + wordCard.audio}
            audioMeaning={BASE_URL + wordCard.audioMeaning}
            audioExample={BASE_URL + wordCard.audioExample}
            word={wordCard.word}
            transcription={wordCard.transcription}
            wordTranslate={wordCard.wordTranslate}
            textMeaning={wordCard.textMeaning}
            textMeaningTranslate={wordCard.textMeaningTranslate}
            textExample={wordCard.textExample}
            textExampleTranslate={wordCard.textExampleTranslate}
            key={wordCard.id}
          />
        ))
      )}
    </div>
  );
};

export default WordCards;