import textbookStyles from "../Textbook.module.css";
import styles from "./HardWordCardsContainer.module.css";
import { Link } from 'react-router-dom';
import HardWordCards from "./HardWordCards/HardWordCards";
import { useCustomSelector } from "../../../hooks/redax-hooks";
import Loader from "../../Loader/Loader";

type PropsType = {
  isLogin: boolean
}

const HardWordCardsContainer: React.FC<PropsType> = ({isLogin}) => {
  const isLoading = useCustomSelector((state) => state.loading.isLoadingHardWords);

  return (
    <div className={textbookStyles.inner}>
      {isLoading && <Loader />}
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