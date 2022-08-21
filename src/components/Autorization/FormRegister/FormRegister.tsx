import { useState } from "react";
import { AuthInputDataType, AuthInputValueType } from "../../../types/types";
import { createUser } from "../createUser";
import cn from 'classnames';
import { authDatas } from '../Authorization';
import styles from '../Authorization.module.css';
import LabelForm from "../LabelForm/LabelForm";

const FormRegister: React.FC = () => {
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

  const submitCreateUser = (event: React.FormEvent) => {
    event.preventDefault();
    createUser({
      username: input.username,
      email: input.email,
      password: input.password,
    });
  };

  return (
    <form className={cn(styles.author__form)}  onSubmit={submitCreateUser}>
      <h2 className={cn(styles.author__title)}>Регистрация</h2>
      {authDatas.map((data: AuthInputDataType) => {
        return <LabelForm 
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