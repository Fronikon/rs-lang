import { useSelector } from 'react-redux';
import WordCards from './WordCards/WordCards';
import styles from "./Textbook.module.css";
import TextbookControls from './WordCardsControls/TextbookControls';
import { StoreType } from '../..';
import { WordCardsType } from '../../types/types';

const Textbook = () => {
  const wordCards = useSelector((state: StoreType): WordCardsType[] => state.textbook.wordCards),
    currentGroup = useSelector((state: StoreType): number => state.textbook.currentGroup),
    currentPage = useSelector((state: StoreType): number => state.textbook.currentPage);

  return (
    <section className='container'>
      <div className={styles.inner}>
        <h3 className={styles.title}>Учебник</h3>
        <TextbookControls currentPage={currentPage} currentGroup={currentGroup} />
        <WordCards wordCards={wordCards} currentPage={currentPage} currentGroup={currentGroup} />
      </div>
    </section>
  );
};

export default Textbook;