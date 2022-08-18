import cn from 'classnames';
import styles from './Greeting.module.css';

export const Greeting: React.FC = () => {
  return (
    <main className={cn(styles.main)}>
      <section className={cn(styles.section)}>
        <h2 className={cn(styles.h2)}>Изучай английский вместе с RS-LANG</h2>
        <button className={cn(styles.button, 'button')} type='button'>Начать путь</button>
      </section>
    </main>
  );
};
