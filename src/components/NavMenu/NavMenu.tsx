import cn from 'classnames';
import styles from './NavMenu.module.css';
import { Link } from 'react-router-dom';
import { actions } from './../../redux/actions';
import { MouseEventHandler } from 'react';
import { useCustomDispatch } from '../../hooks/redax-hooks';
import GameSelect from './GameSelect';

const NavMenu: React.FC = () => {
  const dispatch = useCustomDispatch();

  const closeNavMenu: MouseEventHandler = (e) => {
    const target = e.target as HTMLElement;

    if(target.classList.contains(styles.shadow) ||
      target.tagName === 'A') {
      dispatch(actions.switchIsNavMenuOpen());
    }
  };
  
  return (
    <div className={styles.shadow} onClick={closeNavMenu}>
      <div className={cn(styles['nav-menu'])}>
        <div className={styles['nav-menu__header']}></div>
        <ul className={styles['nav-menu__links']}>
          <li className={styles['nav-menu__link']}>
            <Link to="/">Главная</Link>
          </li>
          <li className={styles['nav-menu__link']}>
            <Link to="/textbook">Учебник</Link>
          </li>
          <GameSelect />
          <li className={styles['nav-menu__link']}>
            <Link to="/statistics">Статистика</Link>
          </li>
          <li className={styles['nav-menu__link']}>
            <Link to="/about">О команде</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;