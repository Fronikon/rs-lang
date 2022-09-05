import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actions } from '../../../redux/actions';
import styles from './LogOut.module.css';

const LogOut: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function clickButton(event: { preventDefault: () => void; }) {
    event.preventDefault();
    dispatch(actions.switchIsLogin());
    localStorage.clear();
    navigate("/");
  }

  return (
    <main className={cn(styles.logout)}>
      <div className={cn(styles.logout__container)}>
        <h2 className={cn(styles.logout__title)}>Вы уже зарегистрированы</h2>
        <button className={cn(styles.logout__button, 'button')}
          onClick={clickButton} type='button'>Покинуть учётную запись</button>
      </div>
    </main>
  );
};

export default LogOut;