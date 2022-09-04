import cn from 'classnames';
import { useSelector } from 'react-redux';
import { StoreType } from '../..';
import styles from './Statistics.module.css';
import UserStat from './UserStat/UserStat';

const Statistics: React.FC = () => {
  const isLogin = useSelector((state: StoreType): boolean => state.auth.isLogin);

  return (
    <main>
      <h2 className={cn(styles.statistics__main_title)}>Статистика</h2>
      {isLogin ? <UserStat /> : <p className={cn(styles.statistics__description)}>Нет данных для статистики</p>}
    </main>
  );
};

export default Statistics;
