import styles from './WordCardsControls.module.css';
import PageSelect from './PageSelect/PageSelect';
import { Link, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { actions } from '../../../../redux/actions';
import GroupDropdown from '../../../general/GroupDropdown/GroupDropdown';
import { useCustomDispatch } from '../../../../hooks/redax-hooks';

type PropsType = {
  currentPage: number
  currentGroup: number
  isLogin: boolean
  isLearnedCurrentPage: boolean
}

const WordCardsControls: React.FC<PropsType> = (props) => {
  const dispatch = useCustomDispatch();
  const navigate = useNavigate();

  const changeGroup = (group: number) => {
    dispatch(actions.setGroup(group));
  };
  
  const toSprint = () => {
    dispatch(actions.switchIsStartGameFromTextbook());
    navigate('/sprint');
  };
  const toAudio = () => {
    dispatch(actions.switchIsStartGameFromTextbook());
    navigate('/audio');
  };

  return (
    <div className={styles['textbook-controls']}>
      <div className={styles['control-page']}>
        <GroupDropdown
          group={props.currentGroup}
          callback={changeGroup}
        />
        <PageSelect currentPage={props.currentPage} />
        {props.isLearnedCurrentPage && <div className={styles.statusPage}>✓</div>}
      </div>
      {props.isLogin &&
      <div className={styles['link-container']}>
        <button
          onClick={() => toSprint()}
          className='button'
          disabled={props.isLearnedCurrentPage}
        >Спринт</button>
        <button
          onClick={() => toAudio()}
          className='button'
          disabled={props.isLearnedCurrentPage}
        >Аудиовызов</button>
        <Link to={'hardwords'}>
          <button className={cn(styles['link-on-hardwords'], 'button')}>Сложные слова</button>
        </Link>
      </div>}
    </div>
  );};

export default WordCardsControls;