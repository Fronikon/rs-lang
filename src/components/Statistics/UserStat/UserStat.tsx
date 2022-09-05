import cn from 'classnames';
import { GameStatisticsType } from '../../../types/types';
import styles from '../Statistics.module.css';

type PropsType = {
  audiochallenge: GameStatisticsType
  sprint: GameStatisticsType
}

const UserStat: React.FC<PropsType> = ({ audiochallenge, sprint }) => {
  const countNewWordsPerDay = audiochallenge.countNewWordsPerDay + sprint.countNewWordsPerDay;
  const countLearnedWordsPerDay = audiochallenge.countLearnedWordsPerDay + sprint.countLearnedWordsPerDay;
  const percent = Math.round((sprint.countSucсessAnswersPerDay +
    audiochallenge.countSucсessAnswersPerDay) * 100 /
    (sprint.countAnswersPerDay + audiochallenge.countAnswersPerDay));

  const percentSprint = Math.round(sprint.countSucсessAnswersPerDay * 100 / sprint.countAnswersPerDay);
  const percentAudio = Math.round(audiochallenge.countSucсessAnswersPerDay * 100 / audiochallenge.countAnswersPerDay);

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
            <p className={cn(styles.statistics__data)}>{percent || 0}%</p>
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
            <p className={cn(styles.statistics__data)}>{sprint.countNewWordsPerDay}</p>
          </li>
          <li className={cn(styles.statistics__item)}>
            <p className={cn(styles.statistics__text)}>Процент правильных ответов</p>
            <p className={cn(styles.statistics__data)}>{percentSprint || 0}%</p>
          </li>
          <li className={cn(styles.statistics__item)}>
            <p className={cn(styles.statistics__text)}>Самая длинная серия правильных ответов</p>
            <p className={cn(styles.statistics__data)}>{sprint.seriesSucсessAnswersPerDay}</p>
          </li>
        </ul>
      </li>
      <li className={cn(styles.statistics__container)}>
        <h3 className={cn(styles.statistics__title)}>Аудиовызов за день</h3>
        <ul className={cn(styles.statistics__list)}>
          <li className={cn(styles.statistics__item)}>
            <p className={cn(styles.statistics__text)}>Количество новых слов</p>
            <p className={cn(styles.statistics__data)}>{audiochallenge.countNewWordsPerDay}</p>
          </li>
          <li className={cn(styles.statistics__item)}>
            <p className={cn(styles.statistics__text)}>Процент правильных ответов</p>
            <p className={cn(styles.statistics__data)}>{percentAudio || 0}%</p>
          </li>
          <li className={cn(styles.statistics__item)}>
            <p className={cn(styles.statistics__text)}>Самая длинная серия правильных ответов</p>
            <p className={cn(styles.statistics__data)}>{audiochallenge.seriesSucсessAnswersPerDay}</p>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default UserStat;
