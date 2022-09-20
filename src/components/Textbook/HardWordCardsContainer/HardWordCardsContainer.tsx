import textbookStyles from "../Textbook.module.css";
import styles from "./HardWordCardsContainer.module.css";
import { Link } from 'react-router-dom';
import HardWordCards from "./HardWordCards/HardWordCards";
import { useCustomSelector } from "../../../hooks/redax-hooks";
import Loader from "../../general/Loader/Loader";
import cn from 'classnames';

type PropsType = {
  isLogin: boolean
}

const HardWordCardsContainer: React.FC<PropsType> = ({ isLogin }) => {
  const isLoading = useCustomSelector((state) => state.loading.isLoadingHardWords);

  return (
    <div className={textbookStyles.inner}>
      {isLoading && <Loader />}
      <h3 className={cn(textbookStyles.title, 'title-page')}>Сложные слова</h3>
      {
        isLogin ?
          <>
            <div className={styles.controls}>
              <Link to={'/textbook'}>
                <button className={'button'}>Вернуться в учебник</button>
              </Link>
            </div>
            <HardWordCards isLogin={isLogin} />
          </> :
          <h3 className={styles['no-login-page']}>Доступно только для авторизованных пользователей</h3>
      }
    </div>
  );
};

export default HardWordCardsContainer;