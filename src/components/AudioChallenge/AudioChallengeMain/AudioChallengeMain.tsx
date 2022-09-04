import cn from 'classnames';
import { useEffect, useState } from 'react';
import styles from './AudioChallengeMain.module.css';
import WordQuest from './WordQuest/WordQuest';
import QuestionPageHeader from './AudioChallengeMainHeader/AudioChallengeMain';
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
}

const AudioChallengeMain: React.FC<PropsType> = ({
  pageArray, setGameStatus, rightAnswerWords, setRightAnswerWords, wrongAnswerWords, setWrongAnswerWords}) => {
  const [numberCurrentWord, setNumberCurrentWord] = useState<number>(0);
  const [isShowResult, setIsShowResult] = useState<boolean>(false);
  const [listCurrenWords, setListCurrenWords] = useState<WordType[]>([]);
  const [wrongWordId, setWrongWordId] = useState<string>('');
  const [rightWordId, setRightWordId] = useState<string>('');

  useEffect(() => {
    const getRandomNumber = (): number => {
      const randomNumber = Math.floor(Math.random() * pageArray.length);
      if (randomNumbers.includes(randomNumber)) return getRandomNumber();
      return randomNumber;
    };

    const randomNumbers: number[] = [numberCurrentWord];

    while (randomNumbers.length < 5) {
      randomNumbers.push(getRandomNumber());
    }

    const words = randomNumbers.map((wordIndex) => pageArray[wordIndex]);
    const shuffledWords = words.sort(() => Math.round(Math.random() * 100) - 50);

    setRightWordId(pageArray[numberCurrentWord].id);
    setListCurrenWords([...shuffledWords]);
  }, [numberCurrentWord]);

  const onClickPlayVoice = () => {
    const audio = new Audio();
    audio.src = BASE_URL + pageArray[numberCurrentWord].audio;
    audio.autoplay = true;
  };

  const checkWord = (wordId: string) => {
    setIsShowResult(true);
    if (wordId !== rightWordId) {
      setWrongAnswerWords([...wrongAnswerWords, pageArray[numberCurrentWord]]);
      setWrongWordId(wordId);
    } else {
      setRightAnswerWords([...rightAnswerWords, pageArray[numberCurrentWord]]);
    }
  };

  const next = () => {
    if (numberCurrentWord < pageArray.length - 1) {
      if (wrongWordId) {
        setWrongWordId('');
      }
      setIsShowResult(false);
      setNumberCurrentWord(numberCurrentWord + 1);
    } else {
      setGameStatus(GameStatusData.finish);
    }
  };

  const doNotKnow = () => {
    setWrongAnswerWords([...wrongAnswerWords, pageArray[numberCurrentWord]]);
    setIsShowResult(true);
  };
  
  return (
    <div className={cn(styles.questionPage__container)}>
      <QuestionPageHeader
        limit={pageArray.length}
        count={numberCurrentWord}
        setGameStatus={setGameStatus}
      />
      {isShowResult ? <QuestionPageQuestionWord
        img={BASE_URL + pageArray[numberCurrentWord].image}
        wordName={pageArray[numberCurrentWord].word}
        onClickPlayVoice={onClickPlayVoice}
      /> :
        <button
          className={cn(styles.questionPage__button)}
          onClick={onClickPlayVoice}
          type='button'>
        </button>}

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
          <button className={cn(styles.questionPage__skipButton, styles['next'])}
            type='button'
            onClick={() => next()}
          >{'--->'}</button>
          :
          <button className={cn(styles.questionPage__skipButton)}
            type='button'
            onClick={() => doNotKnow()}
          >{'Не знаю'}</button>
      }
    </div>
  );
};

export default AudioChallengeMain;