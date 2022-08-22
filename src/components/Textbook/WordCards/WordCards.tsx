import WordCard from "./WordCard/WordCard";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { asyncActions } from './../../../redux/asyncActions';
import { StoreType } from "../../..";
import { WordCardsType } from "../../../types/types";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from 'redux';
import { BASE_URL } from './../../../api/api';

const WordCards = () => {
  const dispatch: ThunkDispatch<StoreType, [], AnyAction> = useDispatch();
  
  const wordCards = useSelector((state: StoreType): WordCardsType[] => state.textbook.wordCards);
  const currentGroup = useSelector((state: StoreType): number => state.textbook.currentGroup);
  const currentPage = useSelector((state: StoreType): number => state.textbook.currentPage);

  useEffect(() => {
    dispatch(asyncActions.getWords(currentGroup, currentPage));
  }, [dispatch, currentGroup, currentPage]);

  return (
    <div>
      {wordCards.map((wordCard) => <WordCard
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
      />)}
    </div>
  );
};

export default WordCards;