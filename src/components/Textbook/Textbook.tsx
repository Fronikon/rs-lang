import { useSelector } from 'react-redux';
import WordCards from './WordCards/WordCards';
import styles from "./Textbook.module.css";
import TextbookControls from './WordCardsControls/TextbookControls';
import { StoreType } from '../..';
import { WordType } from '../../types/types';

const Textbook = () => {
  const wordCards = useSelector((state: StoreType): WordType[] => state.textbook.wordCards),
    currentGroup = useSelector((state: StoreType): number => state.textbook.currentGroup),
    currentPage = useSelector((state: StoreType): number => state.textbook.currentPage),
    isLogin = useSelector((state: StoreType): boolean => state.auth.isLogin);

  return (
    <section className='container'>
      <div className={styles.inner}>
        <h3 className={styles.title}>Учебник</h3>
        <TextbookControls
          currentPage={currentPage}
          currentGroup={currentGroup}
        />
        <WordCards
          wordCards={wordCards}
          currentPage={currentPage}
          currentGroup={currentGroup}
          isLogin={isLogin}
        />
      </div>
    </section>
  );
};

export default Textbook;