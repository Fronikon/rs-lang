import cn from 'classnames';
import { AuthInputDataType } from '../../types/types';
import styles from './Authorization.module.css';
import FormRegister from './FormRegister/FormRegister';
import FormLogin from './FormLogin/FormLogin';
import LogOut from './LogOut/LogOut';
import Modal from './Modal/Modal';
import { useEffect, useState } from 'react';
import { authData } from './loginUser';

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
  const [isModalActive, setIsModalActive] = useState(false);
  useEffect(() => {
    const timerFunc = setTimeout(() => {
      setIsModalActive(true);
    }, 1000);
    return () => clearTimeout(timerFunc);
  }, [isModalActive]);

  if (localStorage.getItem('login') === 'true') {
    return (
      <main className={cn(styles.author)}>
        <LogOut />
      </main>
    );
  } else {
    return (
      <main className={cn(styles.author)}>
        <FormRegister />
        <FormLogin />
        {isModalActive && <Modal message={authData.message}/>}
      </main>
    );
  }
};

export default Authorization;