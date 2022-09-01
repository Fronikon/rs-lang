/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { wordsApi } from '../../../api/api';
import { WordType } from '../../../types/types';
import styles from './QuestionPage.module.css';
import { BASE_URL } from '../../../api/api';
import AudioEnd from './AudioEnd/AudioEnd';

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

const QuestionPage: React.FC<{currentGroup: number, currentPAge: number}> = ({currentGroup, currentPAge}) => {
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
  const [isEnd, setIsEnd] = useState<boolean>(false);

  useEffect(() => {
    wordsApi.getWords(currentGroup, currentPAge)
      .then((data) => {
        setNextWord(false);
        setPageArray(data);
        setIsShowResult(false);

        const rand = Math.floor(Math.random() * unUsedNumbersArray.length);
        const temp = unUsedNumbersArray[rand];
        console.log('temp: ', temp);
        setCurrentAudioNumber(temp);
        setCurrentAudio(data[temp].audio);

        const copyUnUsedNumbersArray: number[] = Object.assign([], unUsedNumbersArray);
        copyUnUsedNumbersArray.splice(rand, 1);
        setUnUsedNumbersArray(copyUnUsedNumbersArray);
        
        const copyArray: WordType[] = [];
        const randomNumbersArray = setRandomNumbersArray(temp);
        randomNumbersArray.forEach(el => {
          copyArray.push(data[el]);
        });
        setCurrentArray(copyArray);
      });
    // playVoice();
  }, [nextWord]);

  const onClickPlayVoice = () => {
    if (currentAudio !== '') {
      playVoice();
    }
  };

  useEffect(() => {
    console.log('rightAnswersArray: ', rightAnswersArray);
    console.log('wrongAnswersArray: ', wrongAnswersArray);
    console.log('unUsedNumbersArray: ', unUsedNumbersArray);
  }, [rightAnswersArray, wrongAnswersArray, unUsedNumbersArray]);

  function playVoice() {
    const audio = new Audio();
    audio.src = BASE_URL + currentAudio;
    audio.autoplay = true;
  }

  const checkWord = (el: React.MouseEvent) => {
    setIsShowResult(true);
    const target = el.target as HTMLButtonElement;
    if (target.innerText === pageArray[currentAudioNumber].wordTranslate) {
      setRightAnswersArray([...rightAnswersArray, pageArray[currentAudioNumber]]);    
    } else if (target.innerText === 'Не знаю' || target.innerText === '--->') {
      setWrongAnswersArray([...wrongAnswersArray, pageArray[currentAudioNumber]]);
    } else {
      setWrongAnswersArray([...wrongAnswersArray, pageArray[currentAudioNumber]]);
      target.className = `${cn(styles.questionPage__item, styles['wrong'])}`;
    }
  };

  function getClassForButton(id: string) {
    if (id === pageArray[currentAudioNumber].id) return 'right';
    else return 'normal';
  }

  const WordQuest: React.FC<{wordTranslate: string , id: string}> = (props) => {
    const style = getClassForButton(props.id) as string;
    return (
      <button className={cn(styles.questionPage__item, isShowResult && styles[style])}
        onClick={checkWord}
        id={props.id}
        disabled={isShowResult}
      >
        {props.wordTranslate}      
      </button>
    );
  };

  const Answer: React.FC = () => {
    return (
      <div className={cn(styles.questionPage__main)}>
        <img 
          src={BASE_URL + pageArray[currentAudioNumber].image}
          className={cn(styles.questionPage__image)}
          alt={pageArray[currentAudioNumber].word}
        />
        <div className={cn(styles.questionPage__main_container)}>
          <button
            className={cn(styles.questionPage__button_small)}
            onClick={onClickPlayVoice}
            type='button'>
          </button>
          <span className={cn(styles.questionPage__word)}>{pageArray[currentAudioNumber].word}</span>
        </div>        
      </div>

    );
  };

  const Button: React.FC = () => {
    return (
      <button
        className={cn(styles.questionPage__button)}
        onClick={onClickPlayVoice}
        type='button'>
      </button>

    );
  };

  const next = (el: React.MouseEvent) => {
    if (!isShowResult) checkWord(el);    
    else if (unUsedNumbersArray.length !== 0) setNextWord(true);
    else setIsEnd(true);
  };
  
  const Question: React.FC = () => {
    return (
      <div className={cn(styles.questionPage__container)}>
        <div className={cn(styles.questionPage__headerContainer)}>
          <div className={cn(styles.questionPage__counter)}>{20 - unUsedNumbersArray.length}/20</div>
          <Link to="/audio" className={cn(styles.questionPage__closeButton)}></Link>
        </div>
  
        { isShowResult ? <Answer /> : <Button /> }
        
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
  
  return (
    <div className={cn(styles.questionPage)}>
      { isEnd
        ? <AudioEnd rightAnswerArray={rightAnswersArray} wrongAnswerArray={wrongAnswersArray} />
        : <Question /> }
    </div>
  );
};

export default QuestionPage;