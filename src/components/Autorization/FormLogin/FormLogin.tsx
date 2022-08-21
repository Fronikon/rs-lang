import { useState } from 'react';
import { AuthInputDataType, AuthInputValueType } from '../../../types/types';
import { loginUser } from './../loginUser';
import cn from 'classnames';
import { authDatas } from './../Authorization';
import styles from '../Authorization.module.css';
import LabelForm from '../LabelForm/LabelForm';

const FormLogin: React.FC = () => {
  const [input, setInput] = useState<AuthInputValueType>({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState<AuthInputValueType>({
    username: "",
    email: "",
    password: "",
  });

  const submitLogin = (event: React.FormEvent) => {
    event.preventDefault();
    loginUser({
      email: input.email,
      password: input.password,
    });
  };

  return (
    <form className={cn(styles.author__form)}  onSubmit={submitLogin} key='FormLogin'>
      <h2 className={cn(styles.author__title)}>Войти</h2>
      {authDatas.filter((item)=> item.dataName !== 'username').map((data: AuthInputDataType) => {
        return <LabelForm
          key={data.key + 'login'}
          name={data.lableName}
          errorName={error[data.dataName]}
          inputValue={input[data.dataName]}
          inputName={data.inputName}
          inputType={data.inputType}
          placeholder={data.placeholder}
          setInput={setInput}
          setError={setError}
        />;
      })}
      <input className={cn(styles.button, "button")} type="submit" value="Войти"/>
    </form>
  );
};

export default FormLogin;