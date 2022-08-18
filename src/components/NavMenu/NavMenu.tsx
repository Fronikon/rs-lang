import styles from './NavMenu.module.css';

const NavMenu: React.FC = () => {
  return (
    <div className={styles['nav-menu']}>
      <div className={styles['nav-menu__header']}></div>
      <ul className={styles['nav-menu__links']}>
        <li className={styles['nav-menu__link']}><a href="main">Главная</a></li>
        <li className={styles['nav-menu__link']}><a href="textbook">Учебник</a></li>
      </ul>
    </div>
  );
};

export default NavMenu;