import cn from 'classnames';
import { useEffect, useState } from 'react';
import { AuthInputDataType } from '../../types/types';
import styles from './Authorization.module.css';
import FormRegister from './FormRegister/FormRegister';
import FormLogin from './FormLogin/FormLogin';
import LogOut from './LogOut/LogOut';
import Modal from '../general/Modal/Modal';
import { useCustomSelector } from '../../hooks/redax-hooks';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

export const authDatas: AuthInputDataType[] = [
  {
    key: '0',
    lableName: 'Логин',
    dataName: 'username',
    inputName: 'username',
    inputType: 'username',
    placeholder: 'Введите логин'
  },
  {
    key: '1',
    lableName: 'E-mail',
    dataName: 'email',
    inputName: 'email',
    inputType: 'email',
    placeholder: 'Введите e-mail'
  },
  {
    key: '2',
    lableName: 'Пароль',
    dataName: 'password',
    inputName: 'password',
    inputType: 'password',
    placeholder: 'Введите пароль'
  },
];

const Authorization: React.FC = () => {
  const [modalMessage, setModalMessage] = useState<string>('');
  const isLogin = useCustomSelector((state): boolean => state.auth.isLogin);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (modalMessage) {
      setTimeout(() => setModalMessage(''), 2000);
    }
  }, [modalMessage]);

  useEffect(() => {
    if (isLogin) {
      navigate('logout');
    } else {
      if (location.pathname.includes('register')) {
        navigate('register');
      } else {
        navigate('login');
      }
    }
  }, [location.pathname, isLogin, navigate]);

  return (
    <main className={cn(styles.author)}>
      {modalMessage && <Modal message={modalMessage}/>}
      <Routes>
        <Route path="logout" element={<LogOut />} />
        <Route path="login" element={<FormLogin setModalMessage={setModalMessage} />} />
        <Route path="register" element={<FormRegister setModalMessage={setModalMessage} />} />
      </Routes>
    </main>
  );
};

export default Authorization;