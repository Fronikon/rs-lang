import cn from 'classnames';
import { GameStatusData } from '../../../types/enums';
import GroupSelect from '../../Textbook/WordCardsControls/GroupSelect/GroupSelect';
import styles from './AudioStart.module.css';

type PropsType = {
  setGameStatus: React.Dispatch<React.SetStateAction<string>>
  currentGroup: number
}

const AudioStart: React.FC<PropsType> = (props) => {
  return (
    <main className={cn(styles.audio)}>
      <div className={cn(styles.audio__container)}>
        <h2 className={cn(styles.audio__title)}>Аудиовызов</h2>
        <p className={cn(styles.audio__description)}>Улучшай своё восприятие английской речи на слух.</p>
        <div className={cn(styles.buttons__wrapper)}>
          <button
            onClick={() => props.setGameStatus(GameStatusData.inProcess)}
            className={cn(styles.start__button)}>Начать</button>
          <GroupSelect
            currentGroup={props.currentGroup} />
        </div>
      </div>
    </div>
  );
};

export default AudioStart;