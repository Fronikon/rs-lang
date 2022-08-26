import cn from 'classnames';
import { useState } from 'react';
import Dropdown from '../../Sprint/Dropdown';
import styles from './AudioStart.module.css';

const AudioChallenge: React.FC = () => {
  const [selected, setSelected] = useState<string>('1 раздел');
  const [isActive, setIsActive] = useState(false);
  // const [timerActive, setTimerActive] = useState(false);
  // const [timerEnd, setTimerEnd] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
    // setTimerActive(true);
  };
  
  return (
    <main className={cn(styles.audio)}>
      <div className={cn(styles.audio__container)}>
        <h2 className={cn(styles.audio__title)}>Аудиовызов</h2>
        <p className={cn(styles.audio__description)}>Улучшай своё восприятие английской речи на слух.</p>
        <div className={cn(styles.buttons__wrapper)}>
          <button className={cn(styles.start__button)} onClick={handleClick}>Начать</button>
          <Dropdown selected={selected} setSelected={setSelected} />
        </div>
      </div>
    </main>
  );
};

export default AudioChallenge;