import WordCard from "../../WordCard/WordCard";
import { WordType } from "../../../../types/types";
import { BASE_URL } from '../../../../api/api';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useDispatch } from 'react-redux';
import { StoreType } from "../../../..";
import { useEffect } from 'react';
import { asyncActions } from '../../../../redux/asyncActions';
import { useSearchParams } from "react-router-dom";
import { actions } from "../../../../redux/actions";

type PropsType = {
  currentGroup: number
  currentPage: number
  isLogin: boolean
  wordCards: WordType[]
}

const WordCards: React.FC<PropsType> = ({isLogin, currentGroup, currentPage, wordCards}) => {
  const dispatch: ThunkDispatch<StoreType, [], AnyAction> = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const group = searchParams.get('group');
    const page = searchParams.get('page');
    
    if (group) {
      let numGroup = Number(group) - 1;
      if (numGroup < 0 || numGroup > 5) numGroup = 0;
      dispatch(actions.setGroup(numGroup));
    }
    if (page) {
      let numPage = Number(page) - 1;
      if (numPage < 0 || numPage > 29) numPage = 0;
      dispatch(actions.setPage(numPage));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setSearchParams({
      group: String(currentGroup + 1),
      page: String(currentPage + 1)
    });

    dispatch(asyncActions.getWords());
  }, [dispatch, setSearchParams, currentGroup, currentPage]);

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