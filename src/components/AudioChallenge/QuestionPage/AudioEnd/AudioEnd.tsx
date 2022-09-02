import cn from 'classnames';
import { WordType } from '../../../../types/types';
import styles from './AudioEnd.module.css';
import WrongArray from './Arrays/WrongArray';
import RightArray from './Arrays/RightArray';
import { GameStatusData } from '../../../../types/enums';

type ArraysType = {
  rightAnswerWords: WordType[]
  wrongAnswerWords: WordType[]
  setGameStatus: React.Dispatch<React.SetStateAction<string>>
}

const AudioEnd: React.FC<ArraysType> = ({rightAnswerWords, wrongAnswerWords, setGameStatus}) => {
  const close = () => {
    setGameStatus(GameStatusData.start);
  };

  return (
    <section className={cn(styles.audioEnd)}>
      <button className={cn(styles.audioEnd__closeButton)} onClick={close} type='button'></button>
      <div className={cn(styles.audioEnd__container)}>
        <h2 className={cn(styles.audioEnd__title)}>Результат</h2>
        <div className={cn(styles.audioEnd__wrapper)}>
          <div className={cn(styles.audioEnd__title_container)}>
            <h3 className={cn(styles.audioEnd__title_small)}>Не знаю</h3>
            <span className={cn(styles.audioEnd__span_wrong)}>{wrongAnswerWords.length}</span>
          </div>
          <div className={cn(styles.audioEnd__wrongList_container)}>
            <ul className={cn(styles.audioEnd__list)}>
              {wrongAnswerWords.map((el) => 
                <WrongArray word={el.word} wordTranslate={el.wordTranslate} audio={el.audio} key={el.id} />)}
            </ul>
          </div>
        </div>
        <div className={cn(styles.audioEnd__wrapper)}>
          <div className={cn(styles.audioEnd__title_container)}>
            <h3 className={cn(styles.audioEnd__title_small)}>Знаю</h3>
            <span className={cn(styles.audioEnd__span_right)}>{rightAnswerWords.length}</span>
          </div>
          <div className={cn(styles.audioEnd__rightList_container)}>
            <ul className={cn(styles.audioEnd__list)}>
              {rightAnswerWords.map((el) => 
                <RightArray word={el.word} wordTranslate={el.wordTranslate} audio={el.audio} key={el.id} />)}
            </ul>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AudioEnd;