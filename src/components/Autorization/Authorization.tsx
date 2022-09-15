import cn from 'classnames';
import { useEffect, useState } from 'react';
import { AuthInputDataType } from '../../types/types';
import styles from './Authorization.module.css';
import FormRegister from './FormRegister/FormRegister';
import FormLogin from './FormLogin/FormLogin';
import LogOut from './LogOut/LogOut';
import Modal from './Modal/Modal';
import { useCustomSelector } from '../../hooks/redax-hooks';

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

  useEffect(() => {
    if (modalMessage) {
      setTimeout(() => setModalMessage(''), 2000);
    }
  }, [modalMessage]);
  
  if (isLogin) {
    return (
      <main className={cn(styles.author)}>
        <LogOut />
      </main>
    );
  } else {
    return (
      <main className={cn(styles.author)}>
        <FormRegister setModalMessage={setModalMessage} />
        <FormLogin setModalMessage={setModalMessage} />
        {modalMessage && <Modal message={modalMessage}/>}
      </main>
    );
  }
};

export default Authorization;