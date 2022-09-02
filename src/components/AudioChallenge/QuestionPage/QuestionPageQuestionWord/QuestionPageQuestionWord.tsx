import cn from 'classnames';
import styles from './QuestionPageQuestionWord.module.css';
import generalStyles from '../QuestionPage.module.css';

type QuestionPageQuestionWordPropsType = {
  img: string
  wordName: string
  onClickPlayVoice: () => void
}

const QuestionPageQuestionWord: React.FC<QuestionPageQuestionWordPropsType> = (props) => {
  return (
    <div className={cn(styles.questionPage__main)}>
      <img
        src={props.img}
        className={cn(styles.questionPage__image)}
        alt={props.wordName}
      />
      <div className={cn(styles.questionPage__main_container)}>
        <button
          className={cn(styles.questionPage__button_small, generalStyles.questionPage__button_small)}
          onClick={props.onClickPlayVoice}
          type='button'>
        </button>
        <span className={cn(styles.questionPage__word)}>{props.wordName}</span>
      </div>
    </div>
  );
};


export default QuestionPageQuestionWord;