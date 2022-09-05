import cn from 'classnames';
import { useSelector } from 'react-redux';
import { StoreType } from '../..';
import styles from './Statistics.module.css';
import UserStat from './UserStat/UserStat';
import { useEffect, useState } from 'react';
import { getStatistics } from '../../api/api';
import { StatisticsType } from '../../types/types';

const Statistics: React.FC = () => {
  const isLogin = useSelector((state: StoreType): boolean => state.auth.isLogin);

  const [statistics, setStatistics] = useState<StatisticsType>({
    learnedWords: 0,
    optional: {
      lastVisit: 0,
      sprint: {
        countNewWordsPerDay: 0,
        countLearnedWordsPerDay: 0,
        seriesSucсessAnswersPerDay: 0,
        countAnswersPerDay: 0,
        countSucсessAnswersPerDay: 0
      },
      audiochallenge: {
        countNewWordsPerDay: 0,
        countLearnedWordsPerDay: 0,
        seriesSucсessAnswersPerDay: 0,
        countAnswersPerDay: 0,
        countSucсessAnswersPerDay: 0
      }
    }
  });

  useEffect(() => {
    if (isLogin) {
      getStatistics().then(data => {
        if (data.status === 200) {
          return data.json().then(res => setStatistics(res));
        }
      });
    }
  }, [isLogin]);

  return (
    <main>
      <h2 className={cn(styles.statistics__main_title)}>Статистика</h2>
      {statistics.optional?.lastVisit === 0 ?
        <p className={cn(styles.statistics__description)}>Нет данных для статистики</p> :
        <UserStat statistics={statistics} />}
    </main>
  );
};

export default Statistics;
