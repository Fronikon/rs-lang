import cn from 'classnames';
import { useEffect, useState } from 'react';
import styles from './Sprint.module.css';
import { GameStatusData } from './../../types/enums';

type PropsType = {
  setGameStatus: React.Dispatch<React.SetStateAction<string>>;
  seriesSucсess: number[]
  setSeriesSucсess: React.Dispatch<React.SetStateAction<number[]>>
  seriesRightAnswers: number
};

const Timer: React.FC<PropsType> = (props) => {
  const [time, setTime] = useState(60);
  
  useEffect(() => {
    if (time > 0) {
      setTimeout(setTime, 1000, time - 1);
    } else {
      props.setSeriesSucсess([...props.seriesSucсess, props.seriesRightAnswers]);
      props.setGameStatus(GameStatusData.finish);
    }
  }, [time, props]);

  return <div className={cn(styles.timer)}>{time}</div>;
};

export default Timer;