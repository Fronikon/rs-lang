import cn from 'classnames';
import authLogo from '../../assets/logo/auth.png';
import burgerMenuLogo from '../../assets/logo/menu.png';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={cn(styles.header, 'container')}>
      <div className={cn(styles['burger-menu'], 'icon-button')}>
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