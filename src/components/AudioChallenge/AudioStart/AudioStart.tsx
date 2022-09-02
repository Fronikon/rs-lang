import cn from 'classnames';
import { GameStatusData } from '../../../types/enums';
import GroupDropdown from '../../GroupDropdown/GroupDropdown';
import styles from './AudioStart.module.css';

type PropsType = {
  setGameStatus: React.Dispatch<React.SetStateAction<string>>
  group: number
  changeGroup: (group: number) => void
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
          <GroupDropdown group={props.group} callback={props.changeGroup}/>
        </div>
      </div>
    </main>
  );
};

export default AudioStart;