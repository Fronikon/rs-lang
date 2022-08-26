import cn from 'classnames';
import { Link } from 'react-router-dom';
import styles from './Greeting.module.css';

export const Greeting: React.FC = () => {
  return (
    <main className={cn(styles.main)}>
      <section className={cn(styles.section)}>
        <h2 className={cn(styles.h2)}>Изучай английский вместе с RS-LANG</h2>
        <p className={cn(styles.description)}>
          Проходи увлекательные игры, запоминай сложные слова и следи за своим
          прогрессом.
        </p>
        <button className={cn(styles.button, 'button')} type="button">
          <Link to="/about">Наша команда</Link>
        </button>
      </section>
    </main>
  );
};
