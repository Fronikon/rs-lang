import cn from 'classnames';
import { BASE_URL } from '../../../../../api/api';
import styles from './Arrays.module.css';

type PropsType = {
  audio: string,
  word: string,
  wordTranslate: string
}

const WrongArray: React.FC<PropsType> = (props) => {
  const onClickPlayVoice = () => {
    if (props.audio !== '') {
      playVoice();
    }
  };
  
  function playVoice() {
    const audio = new Audio();
    audio.src = BASE_URL + props.audio;
    audio.autoplay = true;
  }
    
  return (
    <li className={cn(styles.arrays__item)}>
      <button className={cn(styles.arrays__button)} onClick={onClickPlayVoice} type='button'></button>
      <span className={cn(styles.arrays__span)}><b>{props.word}</b> — {props.wordTranslate}</span>
    </li>
  );
};

export default WrongArray;