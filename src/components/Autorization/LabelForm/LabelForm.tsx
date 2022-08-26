import cn from 'classnames';
import { ChangeEvent } from 'react';
import styles from '../Authorization.module.css';
import { LabelFormPropsType } from '../../../types/types';
import { validation } from './validation';

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