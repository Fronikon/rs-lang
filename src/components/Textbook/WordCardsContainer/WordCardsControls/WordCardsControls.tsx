import styles from './WordCardsControls.module.css';
import PageSelect from './PageSelect/PageSelect';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { actions } from '../../../../redux/actions';
import { useDispatch } from 'react-redux';
import GroupDropdown from '../../../GroupDropdown/GroupDropdown';

type PropsType = {
  currentPage: number
  currentGroup: number
  isLogin: boolean
  isLearnedCurrentPage: boolean
}

const WordCardsControls: React.FC<PropsType> = (props) => {
  const dispatch = useDispatch();

  const changeGroup = (group: number) => {
    dispatch(actions.setGroup(group));
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
        <Link to={'/sprint'}>
          <button className={cn('button')}>Спринт</button>
        </Link>
        <Link to={'/audio'}>
          <button className={cn('button')}>Аудиовызов</button>
        </Link>
        <Link to={'hardwords'}>
          <button className={cn(styles['link-on-hardwords'], 'button')}>Сложные слова</button>
        </Link>
      </div>}
    </div>
  );};

export default WordCardsControls;