import { useEffect, useState } from "react";
import { AuthInputDataType, AuthInputValueType } from "../../../types/types";
import cn from 'classnames';
import { authDatas } from '../Authorization';
import styles from '../Authorization.module.css';
import LabelForm from "../LabelForm/LabelForm";
import { createUser } from "../../../api/api";
import { validation } from './../LabelForm/LabelForm';

type PropsType = {
  setIsModalActive: React.Dispatch<React.SetStateAction<boolean>>
  setModalMessage: React.Dispatch<React.SetStateAction<string>>
}

const FormRegister: React.FC<PropsType> = (props) => {
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
      createUser({
        username: input.username,
        email: input.email,
        password: input.password,
      }).then(message => {
        props.setModalMessage(message);
      });
  
      props.setIsModalActive(true);
    }
    setIsSubmitting(false);
  }, [isSubmitting, error, input.email, input.password, input.username, props]);
  
  const submitCreateUser = async (event: React.FormEvent) => {
    event.preventDefault();

    Object.entries(input).forEach((item) => {
      setError(prev => validation(prev, item[0], item[1]));
    });

    setIsSubmitting(true);
  };

  return (
    <form className={cn(styles.author__form)}  onSubmit={submitCreateUser} key='FormRegister'>
      <h2 className={cn(styles.author__title)}>Регистрация</h2>
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
      <input className={cn(styles.button, "button")} type="submit" value="Регистрация"/>
    </form>
  );
};

export default FormRegister;