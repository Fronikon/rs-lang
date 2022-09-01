import React from 'react';
import styles from './Loader.module.css';
import cn from 'classnames';

const Loader: React.FC = () => {
  return (
    <div className={cn(styles.lds_ring)}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;