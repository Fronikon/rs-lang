import cn from 'classnames';
import styles from './NavMenu.module.css';
import { useSelector } from 'react-redux';
import { StoreType } from '../..';
import { Link } from 'react-router-dom';

const NavMenu: React.FC = () => {
  const isNavMenuOpen = useSelector((state: StoreType): boolean => state.navMenu.isNavMenuOpen);

  return (
    <div className={cn(styles['nav-menu'], isNavMenuOpen && styles.open)}>
      <div className={styles['nav-menu__header']}></div>
      <ul className={styles['nav-menu__links']}>
        <li className={styles['nav-menu__link']}>
          <Link to="/">Главная</Link>
        </li>
        <li className={styles['nav-menu__link']}>
          <Link to="/textbook">Учебник</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;