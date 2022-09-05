import cn from 'classnames';
import { GameStatusData } from '../../../../types/enums';
import styles from './QuestionPageHeader.module.css';

type QuestionPageHeaderPropsType = {
  count: number
  setGameStatus: React.Dispatch<React.SetStateAction<string>>
}

const QuestionPageHeader: React.FC<QuestionPageHeaderPropsType> = (props) => {

  const close = () => {
    props.setGameStatus(GameStatusData.start);
  };

  return (
    <div className={cn(styles.questionPage__headerContainer)}>
      <div className={cn(styles.questionPage__counter)}>{props.count}/20</div>
      <button className={cn(styles.questionPage__closeButton)} onClick={close} type='button'></button>
    </div>
  );
};


export default QuestionPageHeader;