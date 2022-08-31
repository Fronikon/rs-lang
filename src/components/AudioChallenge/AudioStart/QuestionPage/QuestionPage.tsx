/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { wordsApi } from '../../../../api/api';
import { WordType } from '../../../../types/types';
import styles from './QuestionPage.module.css';
import { BASE_URL } from '../../../../api/api';

function setRandomNumbersArray(currentAudioNumber: number) {
  const randomNumbersArray: number[] = [currentAudioNumber];
  let count = 0;
  while (count !== 4) {
    const randomNumber = Math.floor(Math.random() * 20);
    if (!randomNumbersArray.includes(randomNumber)) {
      randomNumbersArray.push(randomNumber);
      count++;
    }
  }
  return randomNumbersArray.sort();
}

type PropsType = {
  currentGroup: number
  currentPAge: number
}

const QuestionPage: React.FC<PropsType> = ({currentGroup, currentPAge}) => {
  const [currentArray, setCurrentArray] = useState<WordType[]>([]);
  const [currentAudio, setCurrentAudio] = useState<string>('');
  const [currentAudioNumber, setCurrentAudioNumber] = useState<number>(0);
  const [rightAnswersArray, setRightAnswersArray] = useState<WordType[]>([]);
  const [wrongAnswersArray, setWrongAnswersArray] = useState<WordType[]>([]);
  const [pageArray, setPageArray] = useState<WordType[]>([]);
  const [unUsedNumbersArray, setUnUsedNumbersArray] = useState<number[]>([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
  const [isShowResult, setIsShowResult] = useState<boolean>(false);
  const [nextWord, setNextWord] = useState<boolean>(false);

  useEffect(() => {
    wordsApi.getWords(currentGroup, currentPAge)
      .then((data) => {
        setNextWord(false);
        setPageArray(data);
        setIsShowResult(false);

        const temp = unUsedNumbersArray[Math.floor(Math.random() * unUsedNumbersArray.length)];
        console.log('temp : ', temp );
        setCurrentAudioNumber(temp);
        setCurrentAudio(data[temp].audio);
        console.log('pageArray[temp]: ', data[temp]);

        const copyUnUsedNumbersArray: number[] = Object.assign([], unUsedNumbersArray);
        copyUnUsedNumbersArray.splice(temp, 1);
        setUnUsedNumbersArray(copyUnUsedNumbersArray);
        
        const copyArray: WordType[] = [];
        const randomNumbersArray = setRandomNumbersArray(temp);
        console.log('randomNumbersArray: ', randomNumbersArray);        
        randomNumbersArray.forEach(el => {
          copyArray.push(data[el]);
        });
        setCurrentArray(copyArray);
      });
  }, [nextWord]);

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

  const checkWord = (el: React.MouseEvent) => {
    setIsShowResult(true);
    const target = el.target as HTMLSpanElement;
    const right = document.getElementById(pageArray[currentAudioNumber].id)?.firstChild as HTMLSpanElement;

    if (target.innerText === pageArray[currentAudioNumber].wordTranslate) {
      setRightAnswersArray([...rightAnswersArray, pageArray[currentAudioNumber]]);    
      target.className = `${cn(styles.right)}`;
    } else if (target.innerText === 'Не знаю' || target.innerText === '--->') {
      setWrongAnswersArray([...wrongAnswersArray, pageArray[currentAudioNumber]]);
      right.className = `${cn(styles.right)}`;
    } else {
      setWrongAnswersArray([...wrongAnswersArray, pageArray[currentAudioNumber]]);
      target.className = `${cn(styles.wrong)}`;
      right.className = `${cn(styles.right)}`;
    }
  };

  const next = (el: React.MouseEvent) => {
    if (isShowResult) setNextWord(true);
    else checkWord(el);
  };

  useEffect (() => {
    console.log('Hi');
  }, [isShowResult, rightAnswersArray]);

  const WordQuest: React.FC<{wordTranslate: string , id: string}> = (props) => {
    return (
      <button className={cn(styles.questionPage__item, isShowResult && styles['normal'])}
        onClick={checkWord}
        id={props.id}
        disabled={isShowResult}
      >
        {props.wordTranslate}      
      </button>
    );
  };
  
  return (
    <div className={cn(styles.questionPage__container)}>
      <div className={cn(styles.questionPage__headerContainer)}>
        <div className={cn(styles.questionPage__counter)}>{rightAnswersArray.length}/20</div>
        <Link to="/audio">
          <button className={cn(styles.questionPage__closeButton)} type='button'></button>
        </Link>
      </div>

      <div className={cn(styles.questionPage__main)}>
        {/* <img 
          src={BASE_URL + pageArray[currentAudioNumber].image}
          className={cn(styles.questionPage__image)}
          alt={pageArray[currentAudioNumber].word}
        /> */}
        <div className={cn(styles.questionPage__main_container)}>
          <button
            className={cn(styles.questionPage__button_small)}
            onClick={onClickPlayVoice}
            type='button'>
          </button>
          {/* <span className={cn(styles.questionPage__word)}>{pageArray[currentAudioNumber].word}</span> */}
        </div>        
      </div>
      <button
        className={cn(styles.questionPage__button)}
        onClick={onClickPlayVoice}
        type='button'>
      </button>
      
      <ul className={cn(styles.questionPage__list)}>
        {currentArray.map((el) => <WordQuest wordTranslate={el.wordTranslate} key={el.id} id={el.id}/>)}
      </ul>
      <button className={cn(styles.questionPage__skipButton, isShowResult && styles['next'])}
        type='button'
        onClick={next}
      >
        {isShowResult ? '--->' : 'Не знаю'}
      </button>
    </div>
  );
};

export default QuestionPage;