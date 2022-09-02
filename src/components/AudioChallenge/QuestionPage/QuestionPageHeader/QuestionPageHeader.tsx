import cn from 'classnames';
import { Link } from 'react-router-dom';
import styles from './QuestionPageHeader.module.css';

type QuestionPageHeaderPropsType = {
  count: number
}

const QuestionPageHeader: React.FC<QuestionPageHeaderPropsType> = (props) => {
  return (
    <div className={cn(styles.questionPage__headerContainer)}>
      <div className={cn(styles.questionPage__counter)}>{props.count}/20</div>
      <Link to="/audio">
        <button className={cn(styles.questionPage__closeButton)} type='button'></button>
      </Link>
    </div>
  );
};


export default QuestionPageHeader;