import cn from 'classnames';
import styles from './Sprint.module.css';
import Close from '../../assets/logo/close-sign.svg';
import Megaphone from '../../assets/logo/megaphone.svg';
import Dropdown from './Dropdown';
import { useState } from 'react';
import Timer from './Timer';
import Game from './Game';
import { Result } from './Result';
import { WordType } from '../../types/types';

const Sprint: React.FC = () => {
  const [selected, setSelected] = useState<string>('1 раздел');
  const [isActive, setIsActive] = useState(false);
  const [timerActive, setTimerActive] = useState(false);
  const [timerEnd, setTimerEnd] = useState(false);
  const [points, setPoints] = useState(0);

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
          <Dropdown selected={selected} setSelected={setSelected} />
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
        <Game points={points} setPoints={setPoints} />
      </div>

      <Result
        timerEnd={timerEnd}
        setTimerEnd={setTimerEnd}
      />
    </main>
  );
};

export default Sprint;