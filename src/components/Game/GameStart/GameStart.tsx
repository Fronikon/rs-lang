import { GameStatusData } from '../../../types/enums';
import styles from './GameStart.module.css';
import GroupDropdown from '../../GroupDropdown/GroupDropdown';

type PropsType = {
  setGameStatus: React.Dispatch<React.SetStateAction<string>>
  group: number
  changeGroup: (group: number) => void
  title: string
  description: string
}

const GameStart: React.FC<PropsType> = (props) => {
  return (
    <div className={styles.game_start}>
      <div className={styles.game_start__container}>
        <h2 className={styles.game_start__title}>{props.title}</h2>
        <p className={styles.game_start__description}>{props.description}</p>
        <div className={styles.buttons__wrapper}>
          <button
            onClick={() => props.setGameStatus(GameStatusData.inProcess)}
            className={styles.start__button}>Начать</button>
          <GroupDropdown group={props.group} callback={props.changeGroup}/>
        </div>
      </div>
    </div>
  );
};

export default GameStart;