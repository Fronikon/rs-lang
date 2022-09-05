import cn from 'classnames';
import { useSelector } from 'react-redux';
import { StoreType } from '../..';
import styles from './Statistics.module.css';
import UserStat from './UserStat/UserStat';
import { useEffect, useState } from 'react';
import { getStatistics } from '../../api/api';
import { StatisticsType } from '../../types/types';
import { statisticsInitial } from './constant';

const Statistics: React.FC = () => {
  const isLogin = useSelector((state: StoreType): boolean => state.auth.isLogin);
  const [statistics, setStatistics] = useState<StatisticsType>(statisticsInitial);

  useEffect(() => {
    if (isLogin) {
      getStatistics().then(res => res && setStatistics(res));
    }
  }, [isLogin]);


  return (
    <main>
      <h2 className={cn(styles.statistics__main_title)}>Статистика</h2>
      {!statistics.optional || !isLogin ?
        <p className={cn(styles.statistics__description)}>Нет данных для статистики</p> :
        <UserStat 
          audiochallenge={statistics.optional.audiochallenge}
          sprint={statistics.optional.sprint}
        />}
    </main>
  );
};

export default Statistics;
