import styles from './NavMenu.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const GameSelect: React.FC = () => {
  const [isOpenGameSelect, setIsOpenGameSelect] = useState<boolean>(false);

  const openGameSelect = () => {
    setIsOpenGameSelect(!isOpenGameSelect);
  };

  return (
    <li className={styles['game-select']}>
      <span
        className={styles['game-select__title']}
        onClick={openGameSelect}
      >Игры{isOpenGameSelect ? '▾' : '▿'}</span>
      {isOpenGameSelect && <ul className={styles['game-select__list']}>
        <li className={styles['nav-menu__link']}>
          <Link to="/sprint">Спринт</Link>
        </li>
        <li className={styles['nav-menu__link']}>
          <Link to="/audio">Аудиовызов</Link>
        </li>
      </ul>}
    </li>
  );
};

export default GameSelect;