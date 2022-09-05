import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import styles from '../Authorization.module.css';
import { AuthInputDataType, AuthInputValueType } from '../../../types/types';
import { authDatas } from './../Authorization';
import LabelForm from '../LabelForm/LabelForm';
import { loginUser } from '../../../api/api';
import { actions } from '../../../redux/actions';
import validation from '../LabelForm/validation';

type PropsType = {
  setIsModalActive: React.Dispatch<React.SetStateAction<boolean>>
  setModalMessage: React.Dispatch<React.SetStateAction<string>>
}

const FormLogin: React.FC<PropsType> = (props) => {
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
  const dispatch = useDispatch();

  const getMessageLogin = (status: number) => {
    switch (status) {
    case 200:
      return 'Вы вошли в систему';
    case 403:
      return 'Неверный логин или пароль';
    case 404:
      return 'Пользователь не найден';
    default:
      return 'Неизвестная ошибка';
    }
  };

  useEffect(() => {
    if (isSubmitting && Object.values(error).every((item) => item === '')) {
      loginUser({
        email: input.email,
        password: input.password,
      }).then((response) => {
        if (response.status === 200) {
          dispatch(actions.switchIsLogin(true));
          response.json().then((res) => {
            localStorage.setItem('userId', JSON.stringify(res.userId));
            localStorage.setItem('token', JSON.stringify(res.token));
            localStorage.setItem('refreshToken', JSON.stringify(res.refreshToken));
            localStorage.setItem('timeLogin', JSON.stringify(Date.now()));
          });
        }
        const message = getMessageLogin(response.status);
        props.setModalMessage(message);
        props.setIsModalActive(true);
      });
    }
    
    setIsSubmitting(false);
  }, [isSubmitting, error, input.email, input.password, props, dispatch]);
  
  const submitLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    Object.entries(input).forEach((item) => {
      if (item[0] !== 'username') {
        setError(prev => validation(prev, item[0], item[1]));
      }
    });
    setIsSubmitting(true);
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