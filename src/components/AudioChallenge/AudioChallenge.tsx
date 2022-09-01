import cn from 'classnames';
import { useSelector } from 'react-redux';
import { StoreType } from '../..';
import styles from './AudioChallenge.module.css';
import AudioStart from './AudioStart/AudioStart';
import QuestionPage from './AudioStart/QuestionPage/QuestionPage';
import { useState } from 'react';
import { useEffect } from 'react';
import { WordType } from '../../types/types';
import { wordsApi } from '../../api/api';
import { GameStatusData } from '../../types/enums';

const AudioChallenge: React.FC = () => {
  const currentGroup = useSelector((state: StoreType): number => state.textbook.currentGroup);
  // const currentPage = useSelector((state: StoreType): number => state.textbook.currentPage);
  const currentPage = Math.floor(Math.random() * 30);
  const [gameStatus, setGameStatus] = useState<string>(GameStatusData.start);
  const [pageArray, setPageArray] = useState<WordType[]>([]);

  useEffect(() => {
    if (gameStatus === GameStatusData.inProcess) {
      wordsApi.getWords(currentGroup, currentPage)
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
        currentGroup={currentGroup}/>}
      {gameStatus === GameStatusData.inProcess && pageArray.length > 0 &&
      <QuestionPage
        setGameStatus={setGameStatus}
        pageArray={pageArray}/>}
      {gameStatus === GameStatusData.finish && <div>Result</div>}
    </main>
  );
};

export default AudioChallenge;