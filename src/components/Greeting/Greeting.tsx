import cn from 'classnames';
import { Link } from 'react-router-dom';
import styles from './Greeting.module.css';

const Greeting: React.FC = () => {
  return (
    <main className={cn(styles.main, 'container')}>
      <section className={cn(styles.section)}>
        <h2 className={cn(styles.title)}>Изучай английский вместе с RS-LANG</h2>
        <p className={cn(styles.description)}>
          Проходи увлекательные игры, запоминай сложные слова и следи за своим
          прогрессом.
        </p>
        <div className={styles.buttons}>
          <Link to="/textbook">
            <button className={cn(styles.button, 'button')} type="button">Начать</button>
          </Link>
          <Link to="/about">
            <button className={cn(styles['about-button'], 'button')} type="button">Наша команда</button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Greeting;
