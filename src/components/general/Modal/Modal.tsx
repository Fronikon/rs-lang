import cn from 'classnames';
import React from 'react';
import { AuthDataType } from '../../../types/types';
import styles from './Modal.module.css';

const Modal: React.FC<AuthDataType> = (props) => {
  return (
    <div className={cn(styles.modal__content)}>
      <p className={cn(styles.modal__text)}>{props.message}</p>
    </div>
  );
};

export default Modal;