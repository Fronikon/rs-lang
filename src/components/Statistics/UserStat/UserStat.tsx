import cn from 'classnames';
import { useEffect, useState } from 'react';
import { getStatistics } from '../../../api/api';
import { StatDatasType, StatisticsType } from '../../../types/types';
import styles from '../Statistics.module.css';
import StatContainer from './StatContainer/StatContainer';

const UserStat: React.FC = () => {
  const [statistics, setStatistics] = useState<StatisticsType>({
    learnedWords: 0,
    optional: {
      lastVisit: 0,
      sprint: {
        countNewWordsPerDay: 0,
        countLearnedWordsPerDay: 0,
        seriesSucсessAnswersPerDay: 0,
        countAnswersPerDay: 1,
        countSucсessAnswersPerDay: 0
      },
      audiochallenge: {
        countNewWordsPerDay: 0,
        countLearnedWordsPerDay: 0,
        seriesSucсessAnswersPerDay: 0,
        countAnswersPerDay: 1,
        countSucсessAnswersPerDay: 0
      }
    }
  });

  useEffect(() => {
    getStatistics().then(data => {
      if (data.status === 200) {
        return data.json().then(res => setStatistics(res));
      }
    });
  }, [statistics]);

  const optional = statistics.optional;
  const countNewWordsPerDay = optional.audiochallenge.countNewWordsPerDay + optional.sprint.countNewWordsPerDay;
  const countLearnedWordsPerDay = 
    optional.audiochallenge.countLearnedWordsPerDay + optional.sprint.countLearnedWordsPerDay;
  const percentSprint = Math.round(optional.sprint.countSucсessAnswersPerDay * 100 /optional.sprint.countAnswersPerDay);
  const percentAudio = Math.round(optional.audiochallenge.countSucсessAnswersPerDay * 100 /
    optional.audiochallenge.countAnswersPerDay);
  const percent = Math.round((optional.sprint.countSucсessAnswersPerDay +
    optional.audiochallenge.countSucсessAnswersPerDay) * 100 /
    (optional.sprint.countAnswersPerDay + optional.audiochallenge.countAnswersPerDay));

  const statData: StatDatasType[] = [
    {
      key: 'stat0',
      title: 'Общая за день',
      list: [
        {key: 'item0', text: 'Количество новых слов', data: `${countNewWordsPerDay}`},
        {key: 'item1', text: 'Процент правильных ответов', data: `${percent}%`},
        {key: 'item2', text: 'Количество изученных слов', data: `${countLearnedWordsPerDay}`}
      ]
    },
    {
      key: 'stat1',
      title: 'Спринт за день',
      list: [
        {key: 'item3', text: 'Количество новых слов', data: `${optional.sprint.countNewWordsPerDay}`},
        {key: 'item4', text: 'Процент правильных ответов', data: `${percentSprint}%`},
        {key: 'item5', text:'Самая длинная серия правильных ответов',
          data: `${optional.sprint.seriesSucсessAnswersPerDay}`}
      ]
    },
    {
      key: 'stat2',
      title: 'Аудиовызов за день',
      list: [
        {key: 'item6', text: 'Количество новых слов', data: `${optional.audiochallenge.countNewWordsPerDay}`},
        {key: 'item7', text: 'Процент правильных ответов', data: `${percentAudio}%`},
        {key: 'item8', text: 'Самая длинная серия правильных ответов',
          data: `${optional.audiochallenge.seriesSucсessAnswersPerDay}`}
      ]
    }
  ];
        
  return (
    <ul className={cn(styles.statistics)}>
      {statData.map(li => <StatContainer key={li.key} title={li.title} list={li.list} />)}
    </ul>
  );
};

export default UserStat;
