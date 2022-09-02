import cn from 'classnames';
import styles from './AudioChallenge.module.css';
import AudioStart from './AudioStart/AudioStart';
import { useState } from 'react';
import { useEffect } from 'react';
import { WordType } from '../../types/types';
import { wordsApi } from '../../api/api';
import { GameStatusData } from '../../types/enums';
import QuestionPage from './QuestionPage/QuestionPage';
import AudioEnd from './QuestionPage/AudioEnd/AudioEnd';

const AudioChallenge: React.FC = () => {
  const [group, setGroup] = useState<number>(0);
  const [gameStatus, setGameStatus] = useState<string>(GameStatusData.start);
  const [pageArray, setPageArray] = useState<WordType[]>([]);
  const [rightAnswerWords, setRightAnswerWords] = useState<WordType[]>([]);
  const [wrongAnswerWords, setWrongAnswerWords] = useState<WordType[]>([]);

  const changeGroup = (group: number) => setGroup(group);

  useEffect(() => {
    if (gameStatus === GameStatusData.start) {
      setRightAnswerWords([]);
      setWrongAnswerWords([]);
    }
    if (gameStatus === GameStatusData.inProcess) {
      const currentPage = Math.floor(Math.random() * 30);
      wordsApi.getWords(group, currentPage)
        .then((data: WordType[]) => {
          setPageArray([...data]);
        });
    }
  }, [gameStatus]);
  

  return (
    <main className={cn(styles.audio)}>
      {gameStatus === GameStatusData.start &&
      <AudioStart
        setGameStatus={setGameStatus}
        group={group}
        changeGroup={changeGroup}
      />}
      {gameStatus === GameStatusData.inProcess && pageArray.length > 0 &&
      <QuestionPage
        setGameStatus={setGameStatus}
        pageArray={pageArray}
        rightAnswerWords={rightAnswerWords}
        setRightAnswerWords={setRightAnswerWords}
        wrongAnswerWords={wrongAnswerWords}
        setWrongAnswerWords={setWrongAnswerWords}
      />}
      {gameStatus === GameStatusData.finish &&
      <AudioEnd
        rightAnswerWords={rightAnswerWords}
        wrongAnswerWords={wrongAnswerWords}
        setGameStatus={setGameStatus}
      />}
    </main>
  );
};

export default AudioChallenge;