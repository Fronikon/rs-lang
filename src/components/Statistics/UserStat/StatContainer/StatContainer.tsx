import cn from 'classnames';
import { StatDatasType } from '../../../../types/types';
import styles from '../../Statistics.module.css';
import StatItem from './StatItem';

const StatContainer: React.FC<StatDatasType> = (props) => {

  return (
    <li className={cn(styles.statistics__container)}>
      <h3 className={cn(styles.statistics__title)}>{props.title}</h3>
      <ul className={cn(styles.statistics__list)}>
        {props.list.map(li => <StatItem key={li.key} text={li.text} data={li.data}/>)}
      </ul>
    </li>
  );
};

export default StatContainer;