import cn from 'classnames';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { wordsApi } from '../../../../api/api';
import { actions } from '../../../../redux/actions';
import { WordType } from '../../../../types/types';
import styles from './QuestionPage.module.css';
import WordQuest from './WordQuest';

function setRandomNumbersArray() {
  const randomNumbersArray: number[] = [];
  let count = 0;
  while (count !== 5) {
    const randomNumber = Math.floor(Math.random() * 20);
    if (!randomNumbersArray.includes(randomNumber)) {
      randomNumbersArray.push(randomNumber);
      count++;
    }
  }
  return randomNumbersArray;
}

type PropsType = {
  currentGroup: number
  currentPAge: number
}

const QuestionPage: React.FC<PropsType> = ({currentGroup, currentPAge}) => {
  const [currentArray, setCurrentArray] = useState<WordType[]>([]);
  const [currentAudio, setCurrentAudio] = useState<string>('');
  const currentAudioNumber = Math.floor(Math.random() * 5);

  useEffect(() => {
    wordsApi.getWords(currentGroup, currentPAge)
      .then((data) => {
        const copyArray: WordType[] = [];
        const randomNumbersArray = setRandomNumbersArray();
        randomNumbersArray.forEach(el => {
          copyArray.push(data[el]);
        });
        setCurrentArray([...copyArray]);
      });
  }, [currentGroup, currentPAge]);

  setCurrentAudio(currentArray[currentAudioNumber].audio);

  // const onClickPlayVoice = () => {
  //   if (currentAudio) {
  //     currentAudio.pause();
  //     dispatch(actions.setAudio(null));
  //   }
  //   playVoice(0);
  // };
  
  // console.log('currentArray: ', currentArray);

  // function playVoice(num: number) {
  //   if (num !== music.length) {
  //     const audio = new Audio();
  //     audio.src = music[num];
  //     audio.autoplay = true;
  //     dispatch(actions.setAudio(audio));

  //     audio.onended = () => playVoice(num + 1);
  //   }
  // }

  return (
    <div className={cn(styles.questionPage__container)}>
      <div className={cn(styles.questionPage__headerContainer)}>
        <div className={cn(styles.questionPage__counter)}>0/20</div>
        <Link to="/audio">
          <button className={cn(styles.questionPage__closeButton)} type='button'></button>
        </Link>
      </div>
      <button
        className={cn(styles.questionPage__button)}
        // onClick={onClickPlayVoice}
        type='button'>
      </button>
      <ul className={cn(styles.questionPage__list)}>
        {currentArray.map((el) => <WordQuest wordTranslate={el.wordTranslate} key={el.id} />)}
      </ul>
      <button className={cn(styles.questionPage__skipButton)} type='button'>Не знаю</button>
    </div>
  );
};

export default QuestionPage;