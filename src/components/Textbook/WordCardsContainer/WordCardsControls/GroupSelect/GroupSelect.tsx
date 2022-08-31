import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../../../../redux/actions";
import styles from './GroupSelect.module.css';
import { colorsGroup } from './colors';
import { getSelectOptions } from "../utils";

type PropsType = {
  currentGroup: number
}

const GroupSelect: React.FC<PropsType> = (props) => {
  const dispatch = useDispatch();

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(actions.setGroup(Number(e.target.value)));
  };

  return (
    <select
      style={{background: colorsGroup[props.currentGroup]}}
      className={styles.groups}
      onChange={onChange}
      value={props.currentGroup}
    >{getSelectOptions(6, 'раздел', colorsGroup)}</select>
  );};

export default GroupSelect;