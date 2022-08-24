import styles from './Sprint.module.css';
import cn from 'classnames';
import ArrowDown from '../../assets/logo/Vector.svg';
import React, { useState } from 'react';
import options from './Constants';

type SelectedType = {
  selected: string,
  setSelected: React.Dispatch<React.SetStateAction<string>>,
};

const Dropdown: React.FC<SelectedType> = (
  {selected,
    setSelected}
) => {
  const [isActive, setIsActive] = useState(false);
  const drop_item = options.map((item) => (
    <div
      onClick={() => {
        setSelected(item);
        setIsActive(false);
      }}
      className={cn(styles.dropdown_item)}
      key={item.charAt(0)}
    >
      {item}
    </div>
  ));

  return (
    <div className={cn(styles.dropdown)}>
      <div
        className={cn(styles.chapter)}
        onClick={() => setIsActive(!isActive)}
      >
        <p className={cn(styles.chapter_text)}>{selected}</p>
        <img
          className={cn(styles.chapter_arrow)}
          src={ArrowDown}
          alt="Arrow Down"
        />
      </div>
      {isActive && (
        <div className={cn(styles.dropdown_content)}>{drop_item}</div>
      )}
    </div>
  );
};

export default Dropdown;
