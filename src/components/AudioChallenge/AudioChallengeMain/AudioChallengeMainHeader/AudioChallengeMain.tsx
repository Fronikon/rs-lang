import cn from 'classnames';
import { GameStatusData } from '../../../../types/enums';
import styles from './AudioChallengeMain.module.css';

type QuestionPageHeaderPropsType = {
  count: number
  limit: number
  setGameStatus: React.Dispatch<React.SetStateAction<string>>
}

const QuestionPageHeader: React.FC<QuestionPageHeaderPropsType> = (props) => {

  const close = () => {
    props.setGameStatus(GameStatusData.start);
  };

  return (
    <div className={cn(styles.questionPage__headerContainer)}>
      <div className={cn(styles.questionPage__counter)}>{props.count}/{props.limit}</div>
      <button className={cn(styles.questionPage__closeButton)} onClick={close} type='button'>✖</button>
    </div>
  );
};


export default QuestionPageHeader;