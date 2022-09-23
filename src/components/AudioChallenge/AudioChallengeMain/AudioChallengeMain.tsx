import cn from 'classnames';
import { useEffect, useState } from 'react';
import styles from './AudioChallengeMain.module.css';
import WordQuest from './WordQuest/WordQuest';
import QuestionPageHeader from './AudioChallengeHeader/AudioChallengeHeader';
import QuestionPageQuestionWord from './QuestionWord/QuestionWord';
import { WordType } from '../../../types/types';
import { BASE_URL } from '../../../api/api';
import { GameStatusData } from '../../../types/enums';

type PropsType = {
  pageArray: WordType[]
  setGameStatus: React.Dispatch<React.SetStateAction<string>>
  rightAnswerWords: WordType[]
  setRightAnswerWords: React.Dispatch<React.SetStateAction<WordType[]>>
  wrongAnswerWords: WordType[]
  setWrongAnswerWords: React.Dispatch<React.SetStateAction<WordType[]>>
  seriesSucсess: number[]
  setSeriesSucсess: React.Dispatch<React.SetStateAction<number[]>>
  seriesRightAnswers: number
  setSeriesRightAnswers: React.Dispatch<React.SetStateAction<number>>
}

const AudioChallengeMain: React.FC<PropsType> = ({
  pageArray,
  setGameStatus,
  rightAnswerWords,
  setRightAnswerWords,
  wrongAnswerWords,
  setWrongAnswerWords,
  seriesSucсess,
  setSeriesSucсess,
  seriesRightAnswers,
  setSeriesRightAnswers
}) => {
  const [numberCurrentWord, setNumberCurrentWord] = useState<number | null>(null);
  const [isShowResult, setIsShowResult] = useState<boolean>(false);
  const [listCurrenWords, setListCurrenWords] = useState<WordType[]>([]);
  const [wrongWordId, setWrongWordId] = useState<string>('');
  const [rightWordId, setRightWordId] = useState<string>('');

  useEffect(() => {
    if (numberCurrentWord !== null) {
      if (numberCurrentWord > pageArray.length - 1) {
        setGameStatus(GameStatusData.finish);
        setSeriesSucсess([...seriesSucсess, seriesRightAnswers]);
      } else {
        onClickPlayVoice();
        const getRandomNumber = (): number => {
          const randomNumber = Math.floor(Math.random() * pageArray.length);
          if (randomNumbers.includes(randomNumber)) return getRandomNumber();
          return randomNumber;
        };
    
        const randomNumbers: number[] = [numberCurrentWord];
        
        if (pageArray.length <= 5) {
          while (randomNumbers.length < pageArray.length) {
            randomNumbers.push(getRandomNumber());
          }
        } else {
          while (randomNumbers.length < 5) {
            randomNumbers.push(getRandomNumber());
          }
        }
    
        const words = randomNumbers.map((wordIndex) => pageArray[wordIndex]);
        const shuffledWords = words.sort(() => Math.round(Math.random() * 100) - 50);
    
        setRightWordId(pageArray[numberCurrentWord].id);
        setListCurrenWords([...shuffledWords]);
      }
    } else {
      setNumberCurrentWord(0);
    }
  }, [numberCurrentWord]);

  const onClickPlayVoice = () => {
    const audio = new Audio();
    audio.src = BASE_URL + pageArray[numberCurrentWord || 0].audio;
    audio.autoplay = true;
  };

  const checkWord = (wordId: string) => {
    setIsShowResult(true);
    if (wordId !== rightWordId) {
      setWrongAnswerWords([...wrongAnswerWords, pageArray[numberCurrentWord || 0]]);
      setWrongWordId(wordId);
      setSeriesSucсess([...seriesSucсess, seriesRightAnswers]);
      setSeriesRightAnswers(0);
    } else {
      setRightAnswerWords([...rightAnswerWords, pageArray[numberCurrentWord || 0]]);
      setSeriesRightAnswers(seriesRightAnswers + 1);
    }
  };

  const next = () => {
    if (wrongWordId) {
      setWrongWordId('');
    }
    setIsShowResult(false);
    setNumberCurrentWord((numberCurrentWord || 0) + 1);
  };

  const doNotKnow = () => {
    setSeriesSucсess([...seriesSucсess, seriesRightAnswers]);
    setSeriesRightAnswers(0);
    setWrongAnswerWords([...wrongAnswerWords, pageArray[numberCurrentWord || 0]]);
    setIsShowResult(true);
  };

  useEffect(() => {
    const skip = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        if (isShowResult) next();
        else doNotKnow();
      }
    };
    document.addEventListener('keydown', skip);
    return () => {
      document.removeEventListener('keydown', skip);
    };
  });
  
  return (
    <div className={cn(styles.questionPage__container)}>
      <QuestionPageHeader
        limit={pageArray.length}
        count={numberCurrentWord || 0}
        setGameStatus={setGameStatus}
      />
      
      {numberCurrentWord !== null && numberCurrentWord <= pageArray.length - 1 && <QuestionPageQuestionWord
        img={BASE_URL + pageArray[numberCurrentWord || 0].image}
        wordName={pageArray[numberCurrentWord || 0].word}
        onClickPlayVoice={onClickPlayVoice}
        isShowResult={isShowResult}
      />}

      <ul className={cn(styles.questionPage__list)}>
        {listCurrenWords.map((el) => (
          <WordQuest
            wordTranslate={el.wordTranslate}
            checkWord={checkWord}
            isShowResult={isShowResult}
            isWrong={el.id === wrongWordId}
            isRight={el.id === rightWordId}
            wordId={el.id}
            key={el.id}
          />
        ))}
      </ul>
      {
        isShowResult ?
          <button className={cn(styles.questionPage__skipButton, 'button')}
            type='button'
            onClick={() => next()}
          >{'--->'}</button>
          :
          <button className={cn(styles.questionPage__skipButton, 'button')}
            type='button'
            onClick={() => doNotKnow()}
          >{'Не знаю'}</button>
      }
    </div>
  );
};

export default AudioChallengeMain;