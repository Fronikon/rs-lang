import cn from 'classnames';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { StoreType } from '../../..';
import GroupSelect from '../../Textbook/WordCardsControls/GroupSelect/GroupSelect';
import styles from './AudioStart.module.css';

type languageSection = {
  currentGroup: number
}

const AudioStart: React.FC<languageSection> = (props) => {
  // const currentGroup = useSelector((state: StoreType): number => state.textbook.currentGroup);

  // const [selected, setSelected] = useState<string>('1 раздел');
  // const [isActive, setIsActive] = useState(false);
  // const [timerActive, setTimerActive] = useState(false);
  // const [timerEnd, setTimerEnd] = useState(false);

  // const handleClick = () => {
  //   setIsActive((current) => !current);
  //   // setTimerActive(true);
  // };
  
  return (
    <main className={cn(styles.audio)}>
      <div className={cn(styles.audio__container)}>
        <h2 className={cn(styles.audio__title)}>Аудиовызов</h2>
        <p className={cn(styles.audio__description)}>Улучшай своё восприятие английской речи на слух.</p>
        <div className={cn(styles.buttons__wrapper)}>
          <button className={cn(styles.start__button)}>Начать</button>
          <GroupSelect currentGroup={props.currentGroup} />
        </div>
      </div>
    </main>
  );
};

export default AudioStart;