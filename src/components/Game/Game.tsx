import { useState } from 'react';
import { useEffect } from 'react';
import { actions } from '../../redux/actions';
import { WordType } from '../../types/types';
import { getStatistics, updateStatistics } from '../../api/statisticsApi';
import { Difficulties, GameStatusData } from '../../types/enums';
import styles from './Game.module.css';
import GameStart from './GameStart/GameStart';
import Result from './Result/Result';
import AudioChallengeMain from './../AudioChallenge/AudioChallengeMain/AudioChallengeMain';
import { SprintMain } from './../Sprint/Sprint';
import cn from 'classnames';
import { useCustomDispatch, useCustomSelector } from '../../hooks/redax-hooks';
import { getWords } from '../../api/wordsApi';
import { getNotLearnedWords, getUserWords, postUserWord, updateUserWord } from '../../api/userWordsApi';

type PropsType = {
  limit: number
  gameTipe: string
  title: string
  description: string
}

const getLimitCountWords = async (
  callback: (group: number, page: number) => Promise<WordType[]>,
  group: number,
  page: number,
  limit: number,
  array: WordType[] = []
): Promise<WordType[]> => {
  const data = await callback(group, page);
  const newArray = data.concat(array);
  if (newArray.length >= limit || page <= 0) {
    if (newArray.length > limit) {
      return newArray.slice(-limit);
    }
    return newArray;
  } else {
    return await getLimitCountWords(callback, group, page - 1, limit, newArray);
  }
};

const Game: React.FC<PropsType> = (props) => {
  const [group, setGroup] = useState<number>(0);
  const [page, setPage] = useState<number>(0);

  const [gameStatus, setGameStatus] = useState<string>(GameStatusData.start);
  const [pageArray, setPageArray] = useState<WordType[]>([]);
  const [seriesSucсess, setSeriesSucсess] = useState<number[]>([]);
  const [seriesRightAnswers, setSeriesRightAnswers] = useState<number>(0);

  const [rightAnswerWords, setRightAnswerWords] = useState<WordType[]>([]);
  const [wrongAnswerWords, setWrongAnswerWords] = useState<WordType[]>([]);

  const isStartGameFromTextbook = useCustomSelector((state) => state.textbook.isStartGameFromTextbook);
  const currentPage = useCustomSelector((state) => state.textbook.currentPage);
  const currentGroup = useCustomSelector((state) => state.textbook.currentGroup);
  const isLogin = useCustomSelector((state) => state.auth.isLogin);

  const dispatch = useCustomDispatch();

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
        getLimitCountWords(getNotLearnedWords, group, page, props.limit)
          .then((data: WordType[]) => {
            setPageArray([...data]);
          });
      } else {
        getLimitCountWords(getWords, group, page, props.limit)
          .then((data: WordType[]) => {
            if (isLogin) {
              getUserWords().then((userWords) => {
                data.forEach((word) => {
                  const userWord = userWords.find((userWord) => userWord.wordId === word.id);
                  if (userWord) {
                    word.difficulty = userWord.difficulty;
                    word.optional = userWord.optional;
                  }
                });
                setPageArray([...data]);
              });
            } else {
              setPageArray([...data]);
            }
          });
      }
    }
    if (gameStatus === GameStatusData.finish && isLogin) {
      let countNewWords = 0;
      let countLearnedWords = 0;
      const countAnswers = rightAnswerWords.length + wrongAnswerWords.length;
      const countSucсessAnswers = rightAnswerWords.length;

      rightAnswerWords.forEach((word) => {
        if (word.optional && word.difficulty) {
          const sucsessAttempts = word.optional?.sucsessAttempts + 1;
          const count = word.difficulty === Difficulties.hard ? 5 : 3;

          if (sucsessAttempts >= count) {
            const optional = {
              ...word.optional,
              sucsessAttempts: sucsessAttempts,
              isLearned: true
            };
            updateUserWord(word.id, Difficulties.common, optional);
            if (!word.optional.isLearned) {
              countLearnedWords += 1;
            }
          } else {
            const optional = {
              ...word.optional,
              sucsessAttempts: sucsessAttempts,
            };
            updateUserWord(word.id, word.difficulty, optional);
          }
        } else {
          const optional = {
            isLearned: false,
            sucsessAttempts: 1
          };
          postUserWord(word.id, Difficulties.common, optional);
          countNewWords += 1;
        }
      });
      wrongAnswerWords.forEach((word) => {
        if (word.optional && word.difficulty) {
          const optional = {
            ...word.optional,
            isLearned: false,
            sucsessAttempts: 0,
          };
          if (word.optional.isLearned) {
            updateUserWord(word.id, Difficulties.common, optional);
          } else {
            updateUserWord(word.id, word.difficulty, optional);
          }
        }
      });

      getStatistics().then((data) => {
        let statistics = {...data};
        const currentSeries = seriesSucсess.sort((a,b) => b - a)[0];
        const dataSeries = data.optional.sprint.seriesSucсessAnswersPerDay;

        if (props.gameTipe === 'audioChallenge') {
          statistics = {
            ...data,
            optional: {
              ...data.optional,
              audiochallenge: {
                countNewWordsPerDay: countNewWords,
                countLearnedWordsPerDay: countLearnedWords,
                seriesSucсessAnswersPerDay: currentSeries > dataSeries ? currentSeries : dataSeries,
                countAnswersPerDay: countAnswers,
                countSucсessAnswersPerDay: countSucсessAnswers
              }
            }
          };
        } else if(props.gameTipe === 'sprint') {
          statistics = {
            ...data,
            optional: {
              ...data.optional,
              sprint: {
                countNewWordsPerDay: countNewWords,
                countLearnedWordsPerDay: countLearnedWords,
                seriesSucсessAnswersPerDay: currentSeries > dataSeries ? currentSeries : dataSeries,
                countAnswersPerDay: countAnswers,
                countSucсessAnswersPerDay: countSucсessAnswers
              }
            }
          };
        }
        updateStatistics(statistics);
      });

      setSeriesRightAnswers(0);
      setSeriesSucсess([]);
    }
  }, [dispatch, gameStatus]);


  return (
    <main className={cn(styles['game-container'], 'container')}>
      {
        gameStatus === GameStatusData.start &&
        <GameStart
          setGameStatus={setGameStatus}
          group={group}
          changeGroup={(group: number) => setGroup(group)}
          title={props.title}
          description={props.description}
        />
      }
      {
        gameStatus === GameStatusData.inProcess && pageArray.length > 0 &&
        (
          props.gameTipe === 'sprint' ?
            <SprintMain
              setGameStatus={setGameStatus}
              pageArray={pageArray}
              rightAnswerWords={rightAnswerWords}
              setRightAnswerWords={setRightAnswerWords}
              wrongAnswerWords={wrongAnswerWords}
              setWrongAnswerWords={setWrongAnswerWords}
              setSeriesSucсess={setSeriesSucсess}
              seriesSucсess={seriesSucсess}
              setSeriesRightAnswers={setSeriesRightAnswers}
              seriesRightAnswers={seriesRightAnswers}
            /> :
            <AudioChallengeMain
              setGameStatus={setGameStatus}
              pageArray={pageArray}
              rightAnswerWords={rightAnswerWords}
              setRightAnswerWords={setRightAnswerWords}
              wrongAnswerWords={wrongAnswerWords}
              setWrongAnswerWords={setWrongAnswerWords}
              setSeriesSucсess={setSeriesSucсess}
              seriesSucсess={seriesSucсess}
              setSeriesRightAnswers={setSeriesRightAnswers}
              seriesRightAnswers={seriesRightAnswers}
            />
        )
      }
      {
        gameStatus === GameStatusData.finish &&
        <Result
          rightAnswerWords={rightAnswerWords}
          wrongAnswerWords={wrongAnswerWords}
          setGameStatus={setGameStatus}
        />
      }
    </main>
  );
};

export default Game;