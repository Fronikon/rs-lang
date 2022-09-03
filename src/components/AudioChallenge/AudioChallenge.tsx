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
import { useSelector } from 'react-redux';
import { StoreType } from '../..';
import { useDispatch } from 'react-redux';
import { actions } from './../../redux/actions';

const AudioChallenge: React.FC = () => {
  const [group, setGroup] = useState<number>(0);
  const [page, setPage] = useState<number>(0);

  const [gameStatus, setGameStatus] = useState<string>(GameStatusData.start);
  const [pageArray, setPageArray] = useState<WordType[]>([]);

  const [rightAnswerWords, setRightAnswerWords] = useState<WordType[]>([]);
  const [wrongAnswerWords, setWrongAnswerWords] = useState<WordType[]>([]);

  const isStartGameFromTextbook = useSelector((state: StoreType) => state.textbook.isStartGameFromTextbook);
  const currentPage = useSelector((state: StoreType) => state.textbook.currentPage);
  const currentGroup = useSelector((state: StoreType) => state.textbook.currentGroup);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isStartGameFromTextbook) {
      setPage(currentPage);
      setGroup(currentGroup);
      setGameStatus(GameStatusData.inProcess);
    } else {
      setPage(Math.floor(Math.random() * 30));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (gameStatus === GameStatusData.start) {
      setRightAnswerWords([]);
      setWrongAnswerWords([]);
    }
    if (gameStatus === GameStatusData.inProcess) {
      if (isStartGameFromTextbook) {
        dispatch(actions.switchIsStartGameFromTextbook());
      }
      wordsApi.getWords(group, page)
        .then((data: WordType[]) => {
          setPageArray([...data]);
        });
    }
  }, [dispatch, gameStatus]);
  

  return (
    <main className={cn(styles.audio)}>
      {gameStatus === GameStatusData.start &&
      <AudioStart
        setGameStatus={setGameStatus}
        group={group}
        changeGroup={(group: number) => setGroup(group)}
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