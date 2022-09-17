import styles from './GroupDropdown.module.css';
import { colorsGroup } from './colors';
import { ChangeEvent } from 'react';

type SelectedType = {
  group: number
  callback: (group: number) => void
};

const GroupDropdown: React.FC<SelectedType> = (props) => {

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    props.callback(Number(e.target.value));
  };
  
  return (
    <select
      style={{background: colorsGroup[props.group]}}
      className={styles.groups}
      onChange={onChange}
      value={props.group}
    >
      {
        colorsGroup.map((color, i) => {
          return <option
            style={{background: color}}
            key={i}
            value={i}
          >
            {i + 1} раздел
          </option>;
        })
      }
    </select>
  );
};

export default GroupDropdown;
