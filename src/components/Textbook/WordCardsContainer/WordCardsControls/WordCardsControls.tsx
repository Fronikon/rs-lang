import styles from './WordCardsControls.module.css';
import GroupSelect from './GroupSelect/GroupSelect';
import PageSelect from './PageSelect/PageSelect';
import { Link } from 'react-router-dom';
import cn from 'classnames';

type PropsType = {
  currentPage: number
  currentGroup: number
  isLogin: boolean
  isLearnedCurrentPage: boolean
}

const WordCardsControls: React.FC<PropsType> = (props) => (
  <div className={styles['textbook-controls']}>
    <div className={styles['control-page']}>
      <GroupSelect currentGroup={props.currentGroup} />
      <PageSelect currentPage={props.currentPage} />
      {props.isLearnedCurrentPage && <div className={styles.statusPage}>✓</div>}
    </div>
    {props.isLogin && <Link to={'hardwords'}>
      <button className={cn(styles['link-on-hardwords'], 'button')}>Сложные слова</button>
    </Link>}
  </div>
);

export default WordCardsControls;