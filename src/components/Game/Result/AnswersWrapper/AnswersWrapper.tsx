import { WordType } from '../../../../types/types';
import AnswerField from '../AnswerField/AnswerField';
import styles from './AnswersWrapper.module.css';

type AnswersWrapperPropsType = {
  type: 'right' | 'wrong'
  answerList: WordType[]
  title: 'Знаю' | 'Не знаю'
}

const AnswersWrapper: React.FC<AnswersWrapperPropsType> = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles['title-container']}>
        <h3 className={styles['title-small']}>{props.title}</h3>
        <span className={styles[props.type]}>{props.answerList.length}</span>
      </div>
      <div className={styles['list-container']}>
        <ul className={styles.list}>
          {props.answerList.map((el) =>
            <AnswerField
              word={el.word}
              wordTranslate={el.wordTranslate}
              audio={el.audio}
              key={el.id} />)}
        </ul>
      </div>
    </div>
  );
};

export default AnswersWrapper;