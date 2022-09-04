import cn from 'classnames';
import styles from './Result.module.css';
import WrongArray from './Arrays/WrongArray';
import RightArray from './Arrays/RightArray';
import { WordType } from '../../../types/types';
import { GameStatusData } from '../../../types/enums';

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
      <button className={cn(styles.result__closeButton)} onClick={close} type='button'></button>
      <div className={cn(styles.result__container)}>
        <h2 className={cn(styles.result__title)}>Результат</h2>
        <div className={cn(styles.result__wrapper)}>
          <div className={cn(styles.result__title_container)}>
            <h3 className={cn(styles.result__title_small)}>Не знаю</h3>
            <span className={cn(styles.result__span_wrong)}>{wrongAnswerWords.length}</span>
          </div>
          <div className={cn(styles.result__wrongList_container)}>
            <ul className={cn(styles.result__list)}>
              {wrongAnswerWords.map((el) => 
                <WrongArray word={el.word} wordTranslate={el.wordTranslate} audio={el.audio} key={el.id} />)}
            </ul>
          </div>
        </div>
        <div className={cn(styles.result__wrapper)}>
          <div className={cn(styles.result__title_container)}>
            <h3 className={cn(styles.result__title_small)}>Знаю</h3>
            <span className={cn(styles.result__span_right)}>{rightAnswerWords.length}</span>
          </div>
          <div className={cn(styles.result__rightList_container)}>
            <ul className={cn(styles.result__list)}>
              {rightAnswerWords.map((el) => 
                <RightArray word={el.word} wordTranslate={el.wordTranslate} audio={el.audio} key={el.id} />)}
            </ul>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Result;