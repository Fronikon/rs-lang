import cn from 'classnames';
import styles from './Statistics.module.css';
import UserStat from './UserStat/UserStat';
import { useEffect, useState } from 'react';
import { getStatistics } from '../../api/statisticsApi';
import { StatisticsType } from '../../types/types';
import { statisticsInitial } from '../../data/statisticsInitial';
import { useCustomSelector } from '../../hooks/redax-hooks';

const Statistics: React.FC = () => {
  const isLogin = useCustomSelector((state): boolean => state.auth.isLogin);
  const [statistics, setStatistics] = useState<StatisticsType>(statisticsInitial);

  useEffect(() => {
    if (isLogin) {
      getStatistics().then(res => res && setStatistics(res));
    }
  }, [isLogin]);


  return (
    <main className={cn(styles.statistics__main_container, 'container')}>
      <div className={styles.content}>
        <h2 className={cn(styles.statistics__main_title, 'title-page')}>Статистика за день</h2>
        {!statistics.optional || !isLogin ?
          <p className={cn(styles.statistics__description)}>Нет данных для статистики</p> :
          <UserStat
            audiochallenge={statistics.optional.audiochallenge}
            sprint={statistics.optional.sprint}
          />}
      </div>
    </main>
  );
};

export default Statistics;
