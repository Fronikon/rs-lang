import WordCards from './WordCards/WordCards';
import styles from "./Textbook.module.css";

const Textbook = () => {
  return (
    <section className='container'>
      <div className={styles.inner}>
        <h3 className={styles.title}>Учебник</h3>
        <WordCards />
      </div>
    </section>
  );
};

export default Textbook;