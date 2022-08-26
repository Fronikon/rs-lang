import cn from 'classnames';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthDataType } from '../../../types/types';
import styles from './Modal.module.css';

const Modal: React.FC<AuthDataType> = (props) => {
  const navigate = useNavigate();
  function clickButton(event: { preventDefault: () => void; }) {
    event.preventDefault();
    navigate(-1);
  }

  return (
    <div role="button" className={cn(styles.modal)} onClick={clickButton}>
      <div className={cn(styles.modal__content)}>
        <p className={cn(styles.modal__text)}>{props.message}</p>
      </div>
    </div>
  );
};

export default Modal;