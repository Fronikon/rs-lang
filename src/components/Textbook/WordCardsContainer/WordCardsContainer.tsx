import textbookStyles from "../Textbook.module.css";
import WordCards from "./WordCards/WordCards";
import { useSelector } from 'react-redux';
import { StoreType } from "../../..";
import TextbookControls from "./WordCardsControls/WordCardsControls";

type PropsType = {
  isLogin: boolean
}

const WordCardsContainer: React.FC<PropsType> = ({isLogin}) => {
  const currentGroup = useSelector((state: StoreType): number => state.textbook.currentGroup),
    currentPage = useSelector((state: StoreType): number => state.textbook.currentPage);

  return (
    <div className={textbookStyles.inner}>
      <h3 className={textbookStyles.title}>Учебник</h3>
      <TextbookControls
        currentPage={currentPage}
        currentGroup={currentGroup}
        isLogin={isLogin}
      />
      <WordCards
        currentPage={currentPage}
        currentGroup={currentGroup}
        isLogin={isLogin}
      />
    </div>
  );
};

export default WordCardsContainer;