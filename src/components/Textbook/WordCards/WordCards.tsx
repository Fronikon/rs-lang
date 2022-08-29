import WordCard from "./WordCard/WordCard";
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { asyncActions } from './../../../redux/asyncActions';
import { StoreType } from "../../..";
import { WordType } from "../../../types/types";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from 'redux';
import { BASE_URL } from './../../../api/api';

type PropsType = {
  currentGroup: number
  currentPage: number
  wordCards: WordType[]
  isLogin: boolean
}

const WordCards: React.FC<PropsType> = ({currentGroup, currentPage, wordCards, isLogin}) => {
  const dispatch: ThunkDispatch<StoreType, [], AnyAction> = useDispatch();

  useEffect(() => {
    dispatch(asyncActions.getWords());
  }, [dispatch, currentGroup, currentPage]);

  return (
    <div>
      {wordCards.map((wordCard) => <WordCard
        id={wordCard.id}
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
        difficulty={wordCard.difficulty}
        isLogin={isLogin}
        key={wordCard.id}
      />)}
    </div>
  );
};

export default WordCards;