import cn from 'classnames';
import styles from './Result.module.css';
import { WordType } from '../../../types/types';
import { GameStatusData } from '../../../types/enums';
import AnswersWrapper from './AnswersWrapper/AnswersWrapper';

type PropsType = {
  rightAnswerWords: WordType[]
  wrongAnswerWords: WordType[]
  setGameStatus: React.Dispatch<React.SetStateAction<string>>
}

const Result: React.FC<PropsType> = ({rightAnswerWords, wrongAnswerWords, setGameStatus}) => {
  const close = () => {
    setGameStatus(GameStatusData.start);
  };

  return (
    <section className={cn(styles.result)}>
      <button
        className={cn(styles.closeButton)}
        onClick={close}
        type='button'
      >✖</button>
      <div className={cn(styles.container)}>
        <h2 className={cn(styles.title, 'title-page')}>Результат</h2>
        <AnswersWrapper
          title={'Знаю'}
          type={'right'}
          answerList={rightAnswerWords}
        />
        <AnswersWrapper
          title={'Не знаю'}
          type={'wrong'}
          answerList={wrongAnswerWords}
        />
      </div>
    </section>
  );
};

export default Result;