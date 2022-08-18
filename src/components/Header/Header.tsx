import cn from 'classnames';
import authLogo from '../../assets/logo/auth.png';
import burgerMenuLogo from '../../assets/logo/menu.png';
import styles from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { switchIsNavMenuOpenAC } from '../../redux/actions';
import { StoreType } from '../../index';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const isNavMenuOpen = useSelector((state: StoreType): boolean => state.navMenu.isNavMenuOpen);

  const onClickBurger: React.MouseEventHandler<HTMLDivElement> = (e) => {
    dispatch(switchIsNavMenuOpenAC());
  };

  return (
    <header className={cn(styles.header, 'container')}>
      <div
        onClick={onClickBurger}
        className={cn(styles['burger-menu'], 'icon-button', isNavMenuOpen && styles['_active'])}>
        <img src={burgerMenuLogo} alt="burger-menu" />
      </div>
      <h1 className={styles.title}>RS-LANG</h1>
      <div className={cn(styles['auth'], 'icon-button')}>
        <img src={authLogo} alt="auth" />
      </div>
    </header>
  );
};

export default Header;