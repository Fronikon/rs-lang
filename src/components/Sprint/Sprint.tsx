import cn from 'classnames';
import styles from './Sprint.module.css';
import { useState } from 'react';
import Timer from './Timer';
import GameInner from './GameInner';
import { WordType } from '../../types/types';
import Game from './../Game/Game';


const Sprint: React.FC = () => {
  return (
    <Game
      limit={60}
      gameTipe={'sprint'}
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
}

export const SprintMain: React.FC<PropsType> = (props) => {
  const [points, setPoints] = useState(0);

  return (
    <div className={styles.general_game_wrapper}>
      <p className={cn(styles.total)}>{points}</p>
      <div className={styles['game-container']}>
        <Timer
          setGameStatus={props.setGameStatus}
        />
        <GameInner
          setGameStatus={props.setGameStatus}
          pageArray={props.pageArray}
          points={points}
          setPoints={setPoints}
          trueArray={props.rightAnswerWords}
          setTrueArray={props.setRightAnswerWords}
          falseArray={props.wrongAnswerWords}
          setFalseArray={props.setWrongAnswerWords}
        />
      </div>
    </div>
  );
};

export default Sprint;