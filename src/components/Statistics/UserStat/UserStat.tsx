import cn from 'classnames';
import styles from '../Statistics.module.css';

const UserStat: React.FC = () => {
  return (
    <ul className={cn(styles.statistics)}>
      <li className={cn(styles.statistics__container)}>
        <h3 className={cn(styles.statistics__title)}>Общая за день</h3>
        <ul className={cn(styles.statistics__list)}>
          <li className={cn(styles.statistics__item)}>
            <p className={cn(styles.statistics__text)}>Количество новых слов</p>
            <p className={cn(styles.statistics__data)}>0</p>
          </li>
          <li className={cn(styles.statistics__item)}>
            <p className={cn(styles.statistics__text)}>Процент правильных ответов</p>
            <p className={cn(styles.statistics__data)}>0%</p>
          </li>
          <li className={cn(styles.statistics__item)}>
            <p className={cn(styles.statistics__text)}>Количество изученных слов</p>
            <p className={cn(styles.statistics__data)}>0</p>
          </li>
        </ul>
      </li>
      <li className={cn(styles.statistics__container)}>
        <h3 className={cn(styles.statistics__title)}>Спринт за день</h3>
        <ul className={cn(styles.statistics__list)}>
          <li className={cn(styles.statistics__item)}>
            <p className={cn(styles.statistics__text)}>Количество новых слов</p>
            <p className={cn(styles.statistics__data)}>0</p>
          </li>
          <li className={cn(styles.statistics__item)}>
            <p className={cn(styles.statistics__text)}>Процент правильных ответов</p>
            <p className={cn(styles.statistics__data)}>0%</p>
          </li>
          <li className={cn(styles.statistics__item)}>
            <p className={cn(styles.statistics__text)}>Самая длинная серия правильных ответов</p>
            <p className={cn(styles.statistics__data)}>0</p>
          </li>
        </ul>
      </li>
      <li className={cn(styles.statistics__container)}>
        <h3 className={cn(styles.statistics__title)}>Аудиовызов за день</h3>
        <ul className={cn(styles.statistics__list)}>
          <li className={cn(styles.statistics__item)}>
            <p className={cn(styles.statistics__text)}>Количество новых слов</p>
            <p className={cn(styles.statistics__data)}>0</p>
          </li>
          <li className={cn(styles.statistics__item)}>
            <p className={cn(styles.statistics__text)}>Процент правильных ответов</p>
            <p className={cn(styles.statistics__data)}>0%</p>
          </li>
          <li className={cn(styles.statistics__item)}>
            <p className={cn(styles.statistics__text)}>Самая длинная серия правильных ответов</p>
            <p className={cn(styles.statistics__data)}>0</p>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default UserStat;
