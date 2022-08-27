import cn from 'classnames';
import { useEffect, useState } from 'react';
import styles from './Sprint.module.css';

type TimerType = {
  timerActive: boolean;
  setTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  timerEnd: boolean;
  setTimerEnd: React.Dispatch<React.SetStateAction<boolean>>;
};

const Timer: React.FC<TimerType> = ({ timerActive, setTimerActive, timerEnd, setTimerEnd }
) => {
  const [time, setTime] = useState(10);

  useEffect(() => {
    if (time > 0 && timerActive) {
      setTimeout(setTime, 1000, time - 1);
    } else if (time === 0) {
      setTimeout(() => {
        setTimerEnd(true);
      }, 1000);
    } else {
      setTimerActive(false);
    }
  }, [time, timerActive]);

  return <div className={cn(styles.timer)}>{time}</div>;
};

export default Timer;