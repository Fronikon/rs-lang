import cn from 'classnames';
import burgerMenuLogo from '../../assets/logo/menu.png';
import styles from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/actions';
import { StoreType } from '../../index';
import { Link } from 'react-router-dom';
import AuthIcon from './AuthIcon/AuthIcon';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const isNavMenuOpen = useSelector((state: StoreType): boolean => state.navMenu.isNavMenuOpen);

  const openNavMenu: React.MouseEventHandler<HTMLDivElement> = (e) => {
    dispatch(actions.switchIsNavMenuOpen());
    window.addEventListener('scroll', e => {
      window.scrollTo({top: 0});
    });
  };

  return (
    <header className={cn(styles.header, 'container')}>
      <div
        onClick={openNavMenu}
        className={cn(styles['burger-menu'], 'icon-button', isNavMenuOpen && styles['_active'])}>
        <img src={burgerMenuLogo} alt="burger-menu" width={40} height={40} />
      </div>
      <Link to="/">
        <h1 className={styles.title}>RS-LANG</h1>
      </Link>
      <AuthIcon />
    </header>
  );
};

export default Header;