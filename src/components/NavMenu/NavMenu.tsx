import cn from 'classnames';
import styles from './NavMenu.module.css';
import { useSelector } from 'react-redux';
import { StoreType } from '../..';

const NavMenu: React.FC = () => {
  const isNavMenuOpen = useSelector((state: StoreType): boolean => state.navMenu.isNavMenuOpen);

  return (
    <div className={cn(styles['nav-menu'], isNavMenuOpen && styles.open)}>
      <div className={styles['nav-menu__header']}></div>
      <ul className={styles['nav-menu__links']}>
        <li className={styles['nav-menu__link']}><a href="main">Главная</a></li>
        <li className={styles['nav-menu__link']}><a href="textbook">Учебник</a></li>
      </ul>
    </div>
  );
};

export default NavMenu;