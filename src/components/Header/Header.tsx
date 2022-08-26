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

  const onClickBurger: React.MouseEventHandler<HTMLDivElement> = (e) => {
    dispatch(actions.switchIsNavMenuOpen());
  };

  return (
    <header className={cn(styles.header, 'container')}>
      <div
        onClick={onClickBurger}
        className={cn(styles['burger-menu'], 'icon-button', isNavMenuOpen && styles['_active'])}>
        <img src={burgerMenuLogo} alt="burger-menu" />
      </div>
      <Link to="/">
        <h1 className={styles.title}>RS-LANG</h1>
      </Link>
      <AuthIcon />
    </header>
  );
};

export default Header;