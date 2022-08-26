import cn from 'classnames';
import styles from './QuestionPage.module.css';

const QuestionPage: React.FC = () => {
  return (
    <div className={cn(styles.questionPage__container)}>
      <div className={cn(styles.questionPage__headerContainer)}>
        <div className={cn(styles.questionPage__counter)}>0/20</div>
        <button className={cn(styles.questionPage__closeButton)} type='button'></button>
      </div>
      <button className={cn(styles.questionPage__button)} type='button'></button>
      <ul className={cn(styles.questionPage__list)}>
        <li className={cn(styles.questionPage__item)}>
          Культурный
        </li>
        <li className={cn(styles.questionPage__item)}>
          Культурный
        </li>
        <li className={cn(styles.questionPage__item)}>
          Культурный
        </li>
        <li className={cn(styles.questionPage__item)}>
          Культурный
        </li>
        <li className={cn(styles.questionPage__item)}>
          Культурный
        </li>
      </ul>
      <button className={cn(styles.questionPage__skipButton)} type='button'>Не знаю</button>
    </div>
  );
};

export default QuestionPage;