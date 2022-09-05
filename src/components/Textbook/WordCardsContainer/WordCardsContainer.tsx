import textbookStyles from "../Textbook.module.css";
import WordCards from "./WordCards/WordCards";
import { useSelector } from 'react-redux';
import { StoreType } from "../../..";
import TextbookControls from "./WordCardsControls/WordCardsControls";
import { WordType } from './../../../types/types';
import { useEffect, useState } from 'react';

type PropsType = {
  isLogin: boolean
}

const WordCardsContainer: React.FC<PropsType> = ({isLogin}) => {
  const currentGroup = useSelector((state: StoreType): number => state.textbook.currentGroup),
    currentPage = useSelector((state: StoreType): number => state.textbook.currentPage),
    wordCards = useSelector((state: StoreType): WordType[] => state.textbook.wordCards);

  const [isLearnedCurrentPage, setIsLearnedCurrentPage] = useState<boolean>(false);

  useEffect(() => {
    if (wordCards.every((item) => item.optional?.isLearned)) {
      setIsLearnedCurrentPage(true);
    } else {
      setIsLearnedCurrentPage(false);
    }
  }, [wordCards]);
  

  return (
    <div className={textbookStyles.inner}>
      <h3 className={textbookStyles.title}>Учебник</h3>
      <TextbookControls
        currentPage={currentPage}
        currentGroup={currentGroup}
        isLogin={isLogin}
        isLearnedCurrentPage={isLearnedCurrentPage}
      />
      <WordCards
        currentPage={currentPage}
        currentGroup={currentGroup}
        isLogin={isLogin}
        wordCards={wordCards}
      />
    </div>
  );
};

export default WordCardsContainer;