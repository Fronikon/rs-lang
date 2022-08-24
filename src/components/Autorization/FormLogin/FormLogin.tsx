import { useEffect, useState } from 'react';
import { AuthInputDataType, AuthInputValueType } from '../../../types/types';
import cn from 'classnames';
import { authDatas } from './../Authorization';
import styles from '../Authorization.module.css';
import LabelForm from '../LabelForm/LabelForm';
import { loginUser } from '../../../api/api';
import { validation } from './../LabelForm/LabelForm';

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

  useEffect(() => {
    if (isSubmitting && Object.values(error).every((item) => item === '')) {
      loginUser({
        email: input.email,
        password: input.password,
      }).then((message) => {
        props.setModalMessage(message);
        props.setIsModalActive(true);
      });
    }
    setIsSubmitting(false);
  }, [isSubmitting, error, input.email, input.password, props]);
  
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