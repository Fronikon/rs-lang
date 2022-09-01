import cn from 'classnames';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { StoreType } from '../../..';
import GroupSelect from '../../Textbook/WordCardsControls/GroupSelect/GroupSelect';
import styles from './AudioStart.module.css';

const AudioStart: React.FC = () => {
  const  currentGroup = useSelector((state: StoreType): number => state.textbook.currentGroup);
  
  return (
    <div className={cn(styles.audio__container)}>
      <h2 className={cn(styles.audio__title)}>Аудиовызов</h2>
      <p className={cn(styles.audio__description)}>Улучшай своё восприятие английской речи на слух.</p>
      <div className={cn(styles.buttons__wrapper)}>
        <Link to="/audio/quest">
          <button className={cn(styles.start__button)}>Начать</button>
        </Link>
        <GroupSelect currentGroup={currentGroup} />
      </div>
    </div>
  );
};

export default AudioStart;