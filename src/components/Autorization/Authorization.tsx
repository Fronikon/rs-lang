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
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>('');
  const isLogin = useCustomSelector((state): boolean => state.auth.isLogin);

  useEffect(() => {
    if (isModalActive) {
      setTimeout(() => setIsModalActive(false), 1000);
    }
  }, [isModalActive]);
  
  if (isLogin) {
    return (
      <main className={cn(styles.author)}>
        <LogOut />
      </main>
    );
  } else {
    return (
      <main className={cn(styles.author)}>
        <FormRegister setIsModalActive={setIsModalActive} setModalMessage={setModalMessage} />
        <FormLogin setIsModalActive={setIsModalActive} setModalMessage={setModalMessage} />
        {isModalActive && <Modal message={modalMessage}/>}
      </main>
    );
  }
};

export default Authorization;