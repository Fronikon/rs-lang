/* eslint-disable no-console */
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { wordsApi } from '../../../../api/api';
import { WordType } from '../../../../types/types';
import styles from './QuestionPage.module.css';
// import WordQuest from './WordQuest';
import { BASE_URL } from '../../../../api/api';

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
  const [currentAudioNumber] = useState<number>(Math.floor(Math.random() * 5));
  const [rightAnswersArray, setRightAnswersArray] = useState<WordType[]>([]);
  const [wrongAnswersArray, setWrongAnswersArray] = useState<WordType[]>([]);

  useEffect(() => {
    wordsApi.getWords(currentGroup, currentPAge)
      .then((data) => {
        const copyArray: WordType[] = [];
        const randomNumbersArray = setRandomNumbersArray();
        randomNumbersArray.forEach(el => {
          copyArray.push(data[el]);
        });
        setCurrentArray(copyArray);
        setCurrentAudio(copyArray[currentAudioNumber].audio);
      });
  }, []);

  const onClickPlayVoice = () => {
    if (currentAudio !== '') {
      playVoice(currentAudioNumber);
    }
  };

  function playVoice(num: number) {
    const audio = new Audio();
    audio.src = BASE_URL + currentAudio;
    audio.autoplay = true;
  }

  type translate = {
    wordTranslate: string
  }
  
  const checkWord = (el: React.MouseEvent) => {
    const target = el.target as HTMLLIElement;
    if (target.innerText === currentArray[currentAudioNumber].wordTranslate) {
      console.log(true);
    } else console.log(false);
  };
  
  const WordQuest: React.FC<translate> = (props) => {
    return (
      <li className={cn(styles.questionPage__item)} onClick={checkWord}>
        {props.wordTranslate}
      </li>
    );
  };
  
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
        onClick={onClickPlayVoice}
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