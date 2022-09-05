import cn from 'classnames';
import { useEffect, useState } from 'react';
import { getStatistics } from '../../../api/api';
import { StatisticsType } from '../../../types/types';
import styles from '../Statistics.module.css';

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
    const response: Promise<StatisticsType> = getStatistics().then(data => {
      console.log('data.status: ', data.status);
      if (data.status === 200) {
        return data.json().then(res => res);
      }
    });
    console.log('response: ', response);
    // if (response) setStatistics(response);

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

  return (
    <ul className={cn(styles.statistics)}>
      <li className={cn(styles.statistics__container)}>
        <h3 className={cn(styles.statistics__title)}>Общая за день</h3>
        <ul className={cn(styles.statistics__list)}>
          <li className={cn(styles.statistics__item)}>
            <p className={cn(styles.statistics__text)}>Количество новых слов</p>
            <p className={cn(styles.statistics__data)}>{countNewWordsPerDay}</p>
          </li>
          <li className={cn(styles.statistics__item)}>
            <p className={cn(styles.statistics__text)}>Процент правильных ответов</p>
            <p className={cn(styles.statistics__data)}>{percent}%</p>
          </li>
          <li className={cn(styles.statistics__item)}>
            <p className={cn(styles.statistics__text)}>Количество изученных слов</p>
            <p className={cn(styles.statistics__data)}>{countLearnedWordsPerDay}</p>
          </li>
        </ul>
      </li>
      <li className={cn(styles.statistics__container)}>
        <h3 className={cn(styles.statistics__title)}>Спринт за день</h3>
        <ul className={cn(styles.statistics__list)}>
          <li className={cn(styles.statistics__item)}>
            <p className={cn(styles.statistics__text)}>Количество новых слов</p>
            <p className={cn(styles.statistics__data)}>{optional.sprint.countNewWordsPerDay}</p>
          </li>
          <li className={cn(styles.statistics__item)}>
            <p className={cn(styles.statistics__text)}>Процент правильных ответов</p>
            <p className={cn(styles.statistics__data)}>{percentSprint}%</p>
          </li>
          <li className={cn(styles.statistics__item)}>
            <p className={cn(styles.statistics__text)}>Самая длинная серия правильных ответов</p>
            <p className={cn(styles.statistics__data)}>{optional.sprint.seriesSucсessAnswersPerDay}</p>
          </li>
        </ul>
      </li>
      <li className={cn(styles.statistics__container)}>
        <h3 className={cn(styles.statistics__title)}>Аудиовызов за день</h3>
        <ul className={cn(styles.statistics__list)}>
          <li className={cn(styles.statistics__item)}>
            <p className={cn(styles.statistics__text)}>Количество новых слов</p>
            <p className={cn(styles.statistics__data)}>{optional.audiochallenge.countNewWordsPerDay}</p>
          </li>
          <li className={cn(styles.statistics__item)}>
            <p className={cn(styles.statistics__text)}>Процент правильных ответов</p>
            <p className={cn(styles.statistics__data)}>{percentAudio}%</p>
          </li>
          <li className={cn(styles.statistics__item)}>
            <p className={cn(styles.statistics__text)}>Самая длинная серия правильных ответов</p>
            <p className={cn(styles.statistics__data)}>{optional.audiochallenge.seriesSucсessAnswersPerDay}</p>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default UserStat;
