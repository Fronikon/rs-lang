import cn from 'classnames';
import styles from './Sprint.module.css';
import { useState } from 'react';
import Timer from './Timer';
import GameInner from './GameInner';
import { WordType } from '../../types/types';
import Game from './../Game/Game';
import { GameStatusData, GameType } from '../../types/enums';


const Sprint: React.FC = () => {
  return (
    <Game
      limit={60}
      gameType={GameType.sprint}
      title={'Спринт'}
      description={'Успей за отведенное время набрать как можно больше очков.За каждые четыре правильно угаданных слова количество получаемых очков увеличивается.'} />
  );
};

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

export const SprintMain: React.FC<PropsType> = (props) => {
  const [points, setPoints] = useState(0);

  const close = () => {
    props.setGameStatus(GameStatusData.start);
  };

  return (
    <div className={styles['game-container']}>
      <p className={cn(styles.total)}>{points}</p>
      <Timer
        setGameStatus={props.setGameStatus}
        setSeriesSucсess={props.setSeriesSucсess}
        seriesSucсess={props.seriesSucсess}
        seriesRightAnswers={props.seriesRightAnswers}
      />
      <button className={cn(styles.game__closeButton)} onClick={close} type='button'>✖</button>
      <div className={cn(styles.game__wrapper)}>
        <GameInner
          setGameStatus={props.setGameStatus}
          pageArray={props.pageArray}
          points={points}
          setPoints={setPoints}
          trueArray={props.rightAnswerWords}
          setTrueArray={props.setRightAnswerWords}
          falseArray={props.wrongAnswerWords}
          setFalseArray={props.setWrongAnswerWords}
          setSeriesSucсess={props.setSeriesSucсess}
          seriesSucсess={props.seriesSucсess}
          setSeriesRightAnswers={props.setSeriesRightAnswers}
          seriesRightAnswers={props.seriesRightAnswers}
        />
      </div>
    </div>
  );
};

export default Sprint;