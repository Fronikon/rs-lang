import cn from 'classnames';
import { Link } from 'react-router-dom';
import styles from './Greeting.module.css';

export const Greeting: React.FC = () => {
  return (
    <main className={cn(styles.main, 'container')}>
      <section className={cn(styles.section)}>
        <h2 className={cn(styles.title)}>Изучай английский вместе с RS-LANG</h2>
        <p className={cn(styles.description)}>
          Проходи увлекательные игры, запоминай сложные слова и следи за своим
          прогрессом.
        </p>
        <Link to="/about">
          <button className={cn(styles.button, 'button')} type="button">Наша команда</button>
        </Link>
      </section>
    </main>
  );
};
