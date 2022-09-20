import textbookStyles from "../Textbook.module.css";
import WordCards from "./WordCards/WordCards";
import TextbookControls from "./WordCardsControls/WordCardsControls";
import { WordType } from './../../../types/types';
import { useEffect, useState } from 'react';
import Loader from "../../general/Loader/Loader";
import { useCustomSelector } from "../../../hooks/redax-hooks";
import cn from 'classnames';

type PropsType = {
  isLogin: boolean
}

const WordCardsContainer: React.FC<PropsType> = ({isLogin}) => {
  const currentGroup = useCustomSelector((state): number => state.textbook.currentGroup),
    currentPage = useCustomSelector((state): number => state.textbook.currentPage),
    wordCards = useCustomSelector((state): WordType[] => state.textbook.wordCards),
    isLoading = useCustomSelector((state) => state.loading.isLoading);

  const [isLearnedCurrentPage, setIsLearnedCurrentPage] = useState<boolean>(false);

  useEffect(() => {
    if (wordCards.length > 0 && wordCards.every((item) => item.optional?.isLearned)) {
      setIsLearnedCurrentPage(true);
    } else {
      setIsLearnedCurrentPage(false);
    }
  }, [wordCards]);
  

  return (
    <div className={textbookStyles.inner}>
      {isLoading && <Loader />}
      <h3 className={cn(textbookStyles.title, 'title-page')}>Учебник</h3>
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