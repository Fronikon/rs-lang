import styles from './NotFound.module.css';

const NotFound: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles['warning-message']}>Страница не найдена</h3>
    </div>
  );
};

export default NotFound;