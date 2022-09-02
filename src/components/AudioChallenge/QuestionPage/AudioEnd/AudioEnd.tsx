import cn from 'classnames';
import { Link } from 'react-router-dom';
import { WordType } from '../../../../types/types';
import styles from './AudioEnd.module.css';
import WrongArray from './Arrays/WrongArray';
import RightArray from './Arrays/RightArray';

type ArraysType = {
  rightAnswerArray: WordType[],
  wrongAnswerArray: WordType[]
}

const AudioEnd: React.FC<ArraysType> = ({rightAnswerArray, wrongAnswerArray}) => {

  return (
    <section className={cn(styles.audioEnd)}>
      <Link to="/audio" className={cn(styles.audioEnd__closeButton)}></Link>
      <div className={cn(styles.audioEnd__container)}>
        <h2 className={cn(styles.audioEnd__title)}>Результат</h2>
        <div className={cn(styles.audioEnd__wrapper)}>
          <div className={cn(styles.audioEnd__title_container)}>
            <h3 className={cn(styles.audioEnd__title_small)}>Не знаю</h3>
            <span className={cn(styles.audioEnd__span_wrong)}>{wrongAnswerArray.length}</span>
          </div>
          <div className={cn(styles.audioEnd__wrongList_container)}>
            <ul className={cn(styles.audioEnd__list)}>
              {wrongAnswerArray.map((el) => 
                <WrongArray word={el.word} wordTranslate={el.wordTranslate} audio={el.audio} key={el.id} />)}
            </ul>
          </div>
        </div>
        <div className={cn(styles.audioEnd__wrapper)}>
          <div className={cn(styles.audioEnd__title_container)}>
            <h3 className={cn(styles.audioEnd__title_small)}>Знаю</h3>
            <span className={cn(styles.audioEnd__span_right)}>{rightAnswerArray.length}</span>
          </div>
          <div className={cn(styles.audioEnd__rightList_container)}>
            <ul className={cn(styles.audioEnd__list)}>
              {rightAnswerArray.map((el) => 
                <RightArray word={el.word} wordTranslate={el.wordTranslate} audio={el.audio} key={el.id} />)}
            </ul>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AudioEnd;