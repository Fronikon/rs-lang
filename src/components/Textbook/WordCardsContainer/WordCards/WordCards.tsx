import WordCard from "../../WordCard/WordCard";
import { WordType } from "../../../../types/types";
import { BASE_URL } from '../../../../api/api';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from "../../../..";
import { useEffect } from 'react';
import { asyncActions } from '../../../../redux/asyncActions';

type PropsType = {
  currentGroup: number
  currentPage: number
  isLogin: boolean
}

const WordCards: React.FC<PropsType> = ({isLogin, currentGroup, currentPage}) => {
  const wordCards = useSelector((state: StoreType): WordType[] => state.textbook.wordCards);

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