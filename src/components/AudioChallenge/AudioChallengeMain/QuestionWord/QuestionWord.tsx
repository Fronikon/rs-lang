import cn from 'classnames';
import styles from './QuestionWord.module.css';
import generalStyles from '../AudioChallengeMain.module.css';

type QuestionPageQuestionWordPropsType = {
  img: string
  wordName: string
  onClickPlayVoice: () => void
  isShowResult: boolean
}

const QuestionPageQuestionWord: React.FC<QuestionPageQuestionWordPropsType> = (props) => {
  return (
    <div className={cn(styles.questionPage__main)}>
      {
        props.isShowResult ? 
          <img
            src={props.img}
            className={cn(styles.questionPage__image, styles.questionPage__window)}
            alt={props.wordName}
          />
          :
          <button
            className={cn(generalStyles.questionPage__button, styles.questionPage__button, styles.questionPage__window)}
            onClick={props.onClickPlayVoice}
            type='button'>
          </button>
      }
      <div className={cn(styles.questionPage__main_container, !props.isShowResult && styles['show-result'])}>
        <button
          className={cn(styles.questionPage__button_small, styles.questionPage__window, generalStyles.questionPage__button_small)}
          onClick={props.onClickPlayVoice}
          type='button'>
        </button>
        <span className={cn(styles.questionPage__word)}>{props.wordName}</span>
      </div>
    </div>
  );
};


export default QuestionPageQuestionWord;