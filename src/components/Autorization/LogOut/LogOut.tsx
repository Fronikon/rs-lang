import cn from 'classnames';
import styles from './LogOut.module.css';

const LogOut: React.FC = () => {
  return (
    <main className={cn(styles.logout)}>
      <div className={cn(styles.logout__container)}>
        <h2 className={cn(styles.logout__title)}>Вы уже зарегистрированы</h2>
        <button className={cn(styles.logout__button, 'button')} type='button'>Покинуть учётную запись</button>
      </div>
    </main>
  );
};

export default LogOut;