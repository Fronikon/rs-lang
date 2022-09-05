import cn from 'classnames';
import { StatisticsType } from '../../../types/types';
import styles from '../Statistics.module.css';

type PropsType = {
  statistics: StatisticsType
}

const UserStat: React.FC<PropsType> = (props) => {
  const optional = props.statistics.optional;
  let countNewWordsPerDay, countLearnedWordsPerDay, percent, percentSprint, percentAudio;

  if (optional) {
    const audiochallenge = optional.audiochallenge;
    const sprint = optional.sprint;

    countNewWordsPerDay = audiochallenge.countNewWordsPerDay + sprint.countNewWordsPerDay;
    countLearnedWordsPerDay = audiochallenge.countLearnedWordsPerDay + sprint.countLearnedWordsPerDay;
    percent = Math.round((sprint.countSucсessAnswersPerDay +
      audiochallenge.countSucсessAnswersPerDay) * 100 /
      (sprint.countAnswersPerDay + audiochallenge.countAnswersPerDay));

    percentSprint = Math.round(sprint.countSucсessAnswersPerDay * 100 / sprint.countAnswersPerDay);
    percentAudio = Math.round(audiochallenge.countSucсessAnswersPerDay * 100 / audiochallenge.countAnswersPerDay);
  }

  return (
    !optional ?
      <p className={cn(styles.statistics__description)}>Нет данных для статистики</p>
      :
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
