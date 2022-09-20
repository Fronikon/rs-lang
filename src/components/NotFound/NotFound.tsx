import styles from './NotFound.module.css';
import cn from 'classnames';

const NotFound: React.FC = () => {
  return (
    <div className={cn(styles.wrapper, 'container')}>
      <h3 className={'title-page'}>Страница не найдена</h3>
    </div>
  );
};

export default NotFound;