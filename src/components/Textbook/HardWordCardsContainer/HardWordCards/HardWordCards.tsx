import WordCard from "../../WordCard/WordCard";
import { BASE_URL } from '../../../../api/api';
import { useEffect } from 'react';
import { asyncActions } from '../../../../redux/asyncActions';
import { UsersWordType } from "../../../../types/types";
import { useCustomDispatch, useCustomSelector } from "../../../../hooks/redax-hooks";

type PropsType = {
  isLogin: boolean
}

const HardWordCards: React.FC<PropsType> = ({isLogin}) => {
  const wordCards = useCustomSelector((state): UsersWordType[] => state.textbook.hardWordCards);
  const dispatch = useCustomDispatch();

  useEffect(() => {
    dispatch(asyncActions.getHardWords());
  }, [dispatch]);

  return (
    <div>
      {
        wordCards.length > 0 ?
          wordCards.map((wordCard) => <WordCard
            id={wordCard._id}
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
            optional={wordCard.userWord?.optional}
            difficulty={wordCard.userWord?.difficulty}
            isLogin={isLogin}
            key={wordCard._id}
          />) : 
          <h3>Список слов пуст. Вы можете добавлять сложные слова нажав соответствующую кнопку в учебнике.</h3>
      }
    </div>
  );
};

export default HardWordCards;