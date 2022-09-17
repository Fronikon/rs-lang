import { ChangeEvent } from 'react';
import { AuthInputValueType } from '../../../types/types';
import styles from './LabelForm.module.css';
import validation from '../../../utils/validation';

export type LabelFormPropsType = {
  name: string
  errorName: string
  placeholder: string
  inputType: string
  inputName: string
  inputValue: string
  setInput: React.Dispatch<React.SetStateAction<AuthInputValueType>>
  setError: React.Dispatch<React.SetStateAction<AuthInputValueType>>
}

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
    <label className={styles.author__label}>{props.name}
      <input
        className={styles.author__input}
        type={props.inputType}
        name={props.inputName}
        value={props.inputValue}
        onChange={changeInput}
        onBlur={validateInput}
        placeholder={props.placeholder}
        autoComplete="on"
      ></input>
      {props.errorName && <span className={styles.err}>{props.errorName}</span>}
    </label>
  );
};

export default LabelForm;