import cn from 'classnames';
import styles from './NavMenu.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actions } from './../../redux/actions';
import { MouseEventHandler } from 'react';

const NavMenu: React.FC = () => {
  const dispatch = useDispatch();

  const closeNavMenu: MouseEventHandler = (e) => {
    const target = e.target as HTMLElement

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
          <li className={styles['nav-menu__link']}>
            <Link to="/about">О команде</Link>
          </li>
          <li className={styles['nav-menu__link']}>
            <Link to="/sprint">Спринт</Link>
          </li>
          <li className={styles['nav-menu__link']}>
            <Link to="/audio">Аудиовызов</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;