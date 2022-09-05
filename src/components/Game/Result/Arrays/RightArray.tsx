import { BASE_URL } from './../../../../api/api';
import styles from './Arrays.module.css';

type PropsType = {
  audio: string,
  word: string,
  wordTranslate: string
}

const RightArray: React.FC<PropsType> = (props) => {
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
    <li className={styles.arrays__item}>
      <button className={styles.arrays__button} onClick={onClickPlayVoice} type='button'></button>
      <span className={styles.arrays__span}><b>{props.word}</b> — {props.wordTranslate}</span>
    </li>
  );
};

export default RightArray;