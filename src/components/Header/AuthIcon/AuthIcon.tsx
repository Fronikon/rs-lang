import cn from 'classnames';
import styles from './AuthIcon.module.css';
import { Link } from 'react-router-dom';
import { useCustomSelector } from '../../../hooks/redax-hooks';

const AuthIcon: React.FC = () => {
  const isLogin = useCustomSelector((state): boolean => state.auth.isLogin);

  return (
    <Link to="/auth">
      <div className={cn(styles['auth'], 'icon-button', isLogin && styles['_active'])}>
      </div>
    </Link>
  );      
};

export default AuthIcon;