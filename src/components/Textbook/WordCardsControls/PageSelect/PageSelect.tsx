import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../../../redux/actions";
import { getSelectOptions } from "../TextbookControls";
import styles from './PageSelect.module.css';

type PropsType = {
  currentPage: number
}

const PageSelect: React.FC<PropsType> = (props) => {
  const dispatch = useDispatch();

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(actions.setPage(Number(e.target.value)));
  };

  return (
    <select className={styles.pages} onChange={onChange} value={props.currentPage}>
      {getSelectOptions(30, 'страница')}
    </select>
  );};

export default PageSelect;