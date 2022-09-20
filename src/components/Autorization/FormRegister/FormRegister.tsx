import cn from 'classnames';
import { useEffect, useState } from "react";
import styles from '../Authorization.module.css';
import { AuthInputDataType, AuthInputValueType } from "../../../types/types";
import { authDatas } from '../Authorization';
import LabelForm from "../LabelForm/LabelForm";
import validation from '../../../utils/validation';
import { createUser } from './../../../api/authApi';
import { Link, useNavigate } from 'react-router-dom';

type PropsType = {
  setModalMessage: React.Dispatch<React.SetStateAction<string>>
}

const FormRegister: React.FC<PropsType> = (props) => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
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

  const getMessageRegister = (status: number) => {
    switch (status) {
    case 200:
      return 'Вы успешно зарегистрировались';
    case 422:
      return 'Неверный логин или пароль';
    case 417:
      return 'Пользователь с таким email уже зарегистрирован';
    default:
      return 'Неизвестная ошибка';
    }
  };

  useEffect(() => {
    if (isSubmitting && Object.values(error).every((item) => item === '')) {
      createUser({
        username: input.username,
        email: input.email,
        password: input.password,
      }).then(response => {
        const message = getMessageRegister(response.status);
        props.setModalMessage(message);
        if (response.status === 200) {
          navigate("/auth/login");
        }
      });
    }
    setIsSubmitting(false);
  }, [isSubmitting, error, input.email, input.password, input.username, props, navigate]);
  
  const submitCreateUser = async (event: React.FormEvent) => {
    event.preventDefault();

    Object.entries(input).forEach((item) => {
      setError(prev => validation(prev, item[0], item[1]));
    });

    setIsSubmitting(true);
  };

  return (
    <form className={cn(styles.author__form)}  onSubmit={submitCreateUser} key='FormRegister'>
      <h2 className={cn(styles.author__title, 'title-page')}>Регистрация</h2>
      {authDatas.map((data: AuthInputDataType) => {
        return <LabelForm
          key={data.key + 'register'}
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
      <p className='reset-margin'>Есть учётная запись? <Link to='/auth/login'><span className='default-link'>Войти</span></Link></p>
      <input className={cn(styles.button, "button")} type="submit" value="Регистрация"/>
    </form>
  );
};

export default FormRegister;