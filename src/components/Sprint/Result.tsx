import cn from 'classnames';
import styles from './Sprint.module.css';
import Megaphone from '../../assets/logo/megaphone.svg';
import { WordType } from '../../types/types';

type TimerEnd = {
  timerEnd: boolean;
  setTimerEnd: React.Dispatch<React.SetStateAction<boolean>>;
  trueArray: WordType[];
  falseArray: WordType[];
};

export const Result: React.FC<TimerEnd> = ({
  timerEnd,
  setTimerEnd,
  trueArray,
  falseArray,
}) => {

  const wrongWords = falseArray.map((word) => (
    <div className={cn(styles.word)} key={word.id}>
      <img className={cn(styles.word_icon)} src={Megaphone} alt="megaphone" />
      <p className={cn(styles.eng_bold_word)}>{word.word}</p>—
      <p className={cn(styles.rus_standart_word)}>{word.wordTranslate}</p>
    </div>
  ));

  const rightWords = trueArray.map((word) => (
    <div className={cn(styles.word)} key={word.id}>
      <img className={cn(styles.word_icon)} src={Megaphone} alt="megaphone" />
      <p className={cn(styles.eng_bold_word)}>{word.word}</p>—
      <p className={cn(styles.rus_standart_word)}>{word.wordTranslate}</p>
    </div>
  ));

  return (
    <div
      className={timerEnd ? cn(styles.result_game_wrapper) : cn(styles.none)}
    >
      <h2 className={cn(styles.result)}>Результат</h2>
      <div className={cn(styles.results_wrapper, styles.wrong)}>
        <div className={cn(styles.counter, styles.dont_know)}>
          <h3 className={cn(styles.counter_heading)}>Не знаю</h3>
          <div className={cn(styles.wrong_count)}>{falseArray.length}</div>
        </div>
        <div className={cn(styles.words)}>{wrongWords}</div>
      </div>
      <div className={cn(styles.line)}></div>
      <div className={cn(styles.results_wrapper, styles.right)}>
        <div className={cn(styles.counter, styles.know)}>
          <h3 className={cn(styles.counter_heading)}>Знаю</h3>
          <div className={cn(styles.right_count)}>{trueArray.length}</div>
        </div>
        <div className={cn(styles.words)}>{rightWords}</div>
      </div>
    </div>
  );
};