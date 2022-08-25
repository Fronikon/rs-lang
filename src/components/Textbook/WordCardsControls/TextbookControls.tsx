import styles from './TextbookControls.module.css';
import GroupSelect from './GroupSelect/GroupSelect';
import PageSelect from './PageSelect/PageSelect';

export const getSelectOptions = (countPage: number, name: string, colors: string[] | string = 'white') => {
  const arr = [];
  for(let i = 0; i < countPage; i++) {
    arr.push(
      <option
        style={{background: typeof colors === 'string' ? colors : colors[i]}}
        key={i}
        value={i}
      >{i + 1} {name}</option>);
  }
  return arr;
};

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