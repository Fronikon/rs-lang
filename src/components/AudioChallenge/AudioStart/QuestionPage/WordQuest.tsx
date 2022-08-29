import cn from 'classnames';
import styles from './QuestionPage.module.css';

type PropsType = {
  wordTranslate: string
  key: string
}

const WordQuest: React.FC<PropsType> = (props) => {
  return (
    <li className={cn(styles.questionPage__item)} key={props.key} id={props.key}>
      {props.wordTranslate}
    </li>
  );
};

export default WordQuest;