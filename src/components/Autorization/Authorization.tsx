import cn from 'classnames';
import { AuthInputDataType } from '../../types/types';
import styles from './Authorization.module.css';
import FormRegister from './FormRegister/FormRegister';
import FormLogin from './FormLogin/FormLogin';

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
  return (
    <main className={cn(styles.author)}>
      <FormRegister />
      <FormLogin />
    </main>
  );
};

export default Authorization;