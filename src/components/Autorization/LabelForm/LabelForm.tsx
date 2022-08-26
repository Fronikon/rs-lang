import cn from 'classnames';
import { ChangeEvent } from 'react';
import styles from '../Authorization.module.css';
import { AuthInputValueType } from '../../../types/types';

type LabelFormPropsType = {
  name: string
  errorName: string
  placeholder: string
  inputType: string
  inputName: string
  inputValue: string
  setInput: React.Dispatch<React.SetStateAction<AuthInputValueType>>
  setError: React.Dispatch<React.SetStateAction<AuthInputValueType>>
}

export const validation = (prev: AuthInputValueType, name: string, value: string) => {
  const stateObj = { ...prev, [name]: "" };
  const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
 
  switch (name) {
  case "username":
    if (!value) {
      stateObj[name] = "Пожалуйста введите логин.";
    }
    break;

  case "email":
    if (!value) {
      stateObj[name] = "Пожалуйста введите email.";
    } else if (!pattern.test(value)) {
      stateObj[name] = "Введите корректный email.";
    }
    break;
 
  case "password":
    if (!value) {
      stateObj[name] = "Пожалуйста введите пароль.";
    }
    if (value.length < 8 && value.length > 0) {
      stateObj[name] = "Пароль должен быть не менее 8ми символов.";
    }
    break;
 
  default:
    break;
  }
 
  return stateObj;
};

export const LabelForm: React.FC<LabelFormPropsType> = (props) => {
  const validateInput = (event: ChangeEvent<HTMLInputElement>) => {
    
    const { name, value } = event.target;
    props.setError(prev => validation(prev, name, value));
  };

  const changeInput = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();
    props.setInput(prev => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
    validateInput(event);
  };

  return (
    <label className={cn(styles.author__label)}>{props.name}
      <input className={cn(styles.author__input)} type={props.inputType} name={props.inputName} value={props.inputValue}
        onChange={changeInput} onBlur={validateInput} placeholder={props.placeholder}>   
      </input>
      {props.errorName && <span className={cn(styles.err)}>{props.errorName}</span>}
    </label>
  );
};

export default LabelForm;