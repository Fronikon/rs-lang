import WordCard from "./WordCard/WordCard";
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { asyncActions } from './../../../redux/asyncActions';
import { StoreType } from "../../..";
import { WordCardsType } from "../../../types/types";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from 'redux';
import { BASE_URL } from './../../../api/api';

type PropsType = {
  currentGroup: number
  currentPage: number
  wordCards: WordCardsType[]
}

const WordCards: React.FC<PropsType> = ({currentGroup, currentPage, wordCards}) => {
  const dispatch: ThunkDispatch<StoreType, [], AnyAction> = useDispatch();

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