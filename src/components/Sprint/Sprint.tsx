import cn from 'classnames';
import styles from './Sprint.module.css';
import Close from '../../assets/logo/close-sign.svg';
import { useState } from 'react';
import Timer from './Timer';
import Game from './Game';
import { Result } from '../Result';
import { WordType } from '../../types/types';
import FirstFox from '../../assets/images/first_fox.png';
import GroupDropdown from '../GroupDropdown/GroupDropdown';

const Sprint: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [timerActive, setTimerActive] = useState(false);
  const [timerEnd, setTimerEnd] = useState(false);
  const [points, setPoints] = useState(0);
  const [trueArray, setTrueArray] = useState<WordType[]>([]);
  const [falseArray, setFalseArray] = useState<WordType[]>([]);
  const [groupNumber, setGroupNumber] = useState(0);
  const [scale, setScale] = useState(10);
  const [inARow, setInARow] = useState(0);
  const [fox, setFox] = useState(FirstFox);

  const handleClick = () => {
    setIsActive((current) => !current);
    setTimerActive(true);
  };

  return (
    <main className={cn(styles.main)}>
      <a href="/">
        <img className={cn(styles.close)} src={Close} alt="close" />
      </a>

      <div className={isActive ? cn(styles.none) : cn(styles.start_wrapper)}>
        <h2 className={cn(styles.heading)}>Спринт</h2>
        <p className={cn(styles.description)}>
          Успей за отведенное время набрать как можно больше очков. За каждые
          четыре правильно угаданных слова количество получаемых очков
          увеличивается.
        </p>
        <div className={cn(styles.buttons_wrapper)}>
          <button className={cn(styles.start)} onClick={handleClick}>
            <p className={cn(styles.start_text)}>Начать</p>
          </button>
          <GroupDropdown
            group={groupNumber}
            callback={
              (group: number) => setGroupNumber(group)
            }
          />
        </div>
      </div>

      <div
        className={
          isActive
            ? timerEnd
              ? cn(styles.none)
              : cn(styles.general_game_wrapper)
            : cn(styles.none)
        }
      >
        <p className={cn(styles.total)}>{points}</p>
        <Timer
          timerActive={timerActive}
          setTimerActive={setTimerActive}
          timerEnd={timerEnd}
          setTimerEnd={setTimerEnd}
        />
        <Game
          points={points}
          setPoints={setPoints}
          trueArray={trueArray}
          setTrueArray={setTrueArray}
          falseArray={falseArray}
          setFalseArray={setFalseArray}
          groupNumber={groupNumber}
          scale={scale}
          setScale={setScale}
          inARow={inARow}
          setInARow={setInARow}
          fox={fox}
          setFox={setFox}
        />
      </div>

      <Result
        timerEnd={timerEnd}
        trueArray={trueArray}
        falseArray={falseArray}
      />
    </main>
  );
};

export default Sprint;