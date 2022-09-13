import cn from 'classnames';
import styles from './AuthIcon.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StoreType } from '../../../store/store';

const AuthIcon: React.FC = () => {
  const isLogin = useSelector((state: StoreType): boolean => state.auth.isLogin);

  return (
    <Link to="/auth">
      <div className={cn(styles['auth'], 'icon-button', isLogin && styles['_active'])}>
      </div>
    </Link>
  );      
};

export default AuthIcon;