import textbookStyles from "../Textbook.module.css";
import styles from "./HardWordCardsContainer.module.css";
import { Link } from 'react-router-dom';
import HardWordCards from "./HardWordCards/HardWordCards";

type PropsType = {
  isLogin: boolean
}

const HardWordCardsContainer: React.FC<PropsType> = ({isLogin}) => {
  return (
    <div className={textbookStyles.inner}>
      <h3 className={textbookStyles.title}>Сложные слова</h3>
      <div className={styles.controls}>
        <Link to={'/textbook'}>
          <button className={'button'}>Вернуться в учебник</button>
        </Link>
      </div>
      {
        isLogin ?
          <HardWordCards
            isLogin={isLogin}
          /> :
          <h3>Доступно только для авторизованных пользователей</h3>
      }
    </div>
  );
};

export default HardWordCardsContainer;