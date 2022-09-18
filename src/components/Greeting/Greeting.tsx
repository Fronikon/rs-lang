import cn from 'classnames';
import { Link } from 'react-router-dom';
import { useCustomSelector } from '../../hooks/redax-hooks';
import styles from './Greeting.module.css';

const Greeting: React.FC = () => {
  const isLogin = useCustomSelector((state): boolean => state.auth.isLogin);

  return (
    <main className={cn(styles.main, 'container')}>
      <section className={cn(styles['start-section'])}>
        <h2 className={cn(styles.title)}>Изучай английский вместе с RS-LANG</h2>
        <p className={cn(styles.description)}>
        Проходи увлекательные игры, пополняй словарный запас благодаря учебнику состоящему из 3600 слов.
        </p>
        <div className={styles.buttons}>
          <Link to="/textbook">
            <button className={cn(styles.button, 'button')} type="button">Начать</button>
          </Link>
          <Link to="/about">
            <button className={cn(styles['two-button'], 'button')} type="button">Наша команда</button>
          </Link>
        </div>
      </section>
      {!isLogin && <section className={cn(styles['register-section'])}>
        <h2 className={cn(styles.title)}>Учётная запись</h2>
        <p className={cn(styles.description)}>
        Позволяет сохранять прогресс изучения слов, сложные слова и статистику.
        </p>
        <div className={styles.buttons}>
          <Link to="/auth/login">
            <button className={'button'} type="button">Войти</button>
          </Link>
          <Link to="/auth/register">
            <button className={cn(styles['two-button'], 'button')} type="button">Регистрация</button>
          </Link>
        </div>
      </section>}
    </main>
  );
};

export default Greeting;
