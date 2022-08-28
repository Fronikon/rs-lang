import cn from 'classnames';
import { Link } from 'react-router-dom';
import GroupSelect from '../../Textbook/WordCardsControls/GroupSelect/GroupSelect';
import { WordCardsControlsPropsType } from '../../Textbook/WordCardsControls/TextbookControls';
import styles from './AudioStart.module.css';

const AudioStart: React.FC<WordCardsControlsPropsType> = (props) => {
  
  return (
    <main className={cn(styles.audio)}>
      <div className={cn(styles.audio__container)}>
        <h2 className={cn(styles.audio__title)}>Аудиовызов</h2>
        <p className={cn(styles.audio__description)}>Улучшай своё восприятие английской речи на слух.</p>
        <div className={cn(styles.buttons__wrapper)}>
          <Link to="/audio/quest">
            <button className={cn(styles.start__button)}>Начать</button>
          </Link>
          <GroupSelect currentGroup={props.currentGroup} />
        </div>
      </div>
    </main>
  );
};

export default AudioStart;