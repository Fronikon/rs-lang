import cn from 'classnames';
import { StatItemsType } from '../../../../types/types';
import styles from '../../Statistics.module.css';

const StatItem: React.FC<StatItemsType> = (props) => {

  return (
    <li className={cn(styles.statistics__item)}>
      <p className={cn(styles.statistics__text)}>{props.text}</p>
      <p className={cn(styles.statistics__data)}>{props.data}</p>
    </li>
  );
};

export default StatItem;