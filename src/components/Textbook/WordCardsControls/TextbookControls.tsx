import styles from './TextbookControls.module.css';
import GroupSelect from './GroupSelect/GroupSelect';
import PageSelect from './PageSelect/PageSelect';

type WordCardsControlsPropsType = {
  currentPage: number
  currentGroup: number
}

const TextbookControls: React.FC<WordCardsControlsPropsType> = (props) => (
  <div className={styles['textbook-controls']}>
    <GroupSelect currentGroup={props.currentGroup} />
    <PageSelect currentPage={props.currentPage} />
  </div>
);

export default TextbookControls;