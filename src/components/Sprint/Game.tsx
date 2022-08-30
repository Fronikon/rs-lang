import cn from 'classnames';
import styles from './Sprint.module.css';
import FirstFox from '../../assets/images/first_fox.png';
import SecondFox from '../../assets/images/second_fox.png';
import ThirdFox from '../../assets/images/third_fox.png';
import ForthFox from '../../assets/images/forth_fox.png';
import { useEffect, useState } from 'react';
import { wordsApi } from '../../api/api';
import {WordType} from '../../types/types';

type TPoints = {
  points: number;
  setPoints: React.Dispatch<React.SetStateAction<number>>;
  trueArray: WordType[];
  setTrueArray: React.Dispatch<React.SetStateAction<WordType[]>>;
  falseArray: WordType[];
  setFalseArray: React.Dispatch<React.SetStateAction<WordType[]>>;
  groupNumber: number;
  scale: number;
  setScale: React.Dispatch<React.SetStateAction<number>>;
  inARow: number;
  setInARow: React.Dispatch<React.SetStateAction<number>>;
  fox: string;
  setFox: React.Dispatch<React.SetStateAction<string>>;
};

const Game: React.FC<TPoints> = ({
  points,
  setPoints,
  trueArray,
  setTrueArray,
  falseArray,
  setFalseArray,
  groupNumber,
  scale,
  setScale,
  inARow,
  setInARow,
  fox,
  setFox,
}) => {
  const [ruWord, setRuWord] = useState('');
  const [engWord, setEngWord] = useState('');
  const [currentArr, setCurrentArr] = useState<WordType[]>([]);
  const [pointsColor, setPointsColor] = useState('green_points');

  useEffect(() => {
    const randomNumber = Math.round(Math.random());
    const randomWord1 = Math.floor(Math.random() * 20);
    const randomWord2 = Math.floor(Math.random() * 20);
    const randomPage = Math.floor(Math.random() * 30);

    if (randomNumber === 1) {
      wordsApi.getWords(groupNumber, randomPage).then((data) => {
        setEngWord(data[randomWord1].word);
        setRuWord(data[randomWord1].wordTranslate);
        setCurrentArr([data[randomWord1], data[randomWord1]]);
      });
    } else {
      wordsApi.getWords(groupNumber, randomPage).then((data) => {
        setEngWord(data[randomWord1].word);
        setRuWord(data[randomWord2].wordTranslate);
        setCurrentArr([data[randomWord1], data[randomWord2]]);
      });
    }
  }, [groupNumber, trueArray, falseArray]);

  useEffect(() => {
    if (inARow === 0) {
      setScale(10);
      setPointsColor('green_points');
      setFox(FirstFox);
    } else if (inARow === 4) {
      setScale(20);
      setPointsColor('orange_points');
      setFox(SecondFox);
    } else if (inARow === 8) {
      setScale(40);
      setPointsColor('red_points');
      setFox(ThirdFox);
    } else if (inARow === 12) {
      setScale(80);
      setPointsColor('purple_points');
      setFox(ForthFox);
    }
  }, [inARow, setScale, setFox, trueArray, falseArray]);

  const trueBtnHandler = () => {
    if (currentArr[0].word === currentArr[1].word) {
      setInARow(inARow + 1);
      setTrueArray(trueArray.concat(currentArr[0]));
      setPoints(points + scale);
    } else {
      setInARow(0);
      setFalseArray(falseArray.concat(currentArr[0]));
    }
  };

  const falseBtnHandler = () => {
    if (currentArr[0].word !== currentArr[1].word) {
      setInARow(inARow + 1);
      setTrueArray(trueArray.concat(currentArr[0]));
      setPoints(points + scale);
    } else {
      setInARow(0);
      setFalseArray(falseArray.concat(currentArr[0]));
    }
  };
  return (
    <div className={cn(styles.game_wrapper)}>
      <div className={cn(styles.points, styles[pointsColor])}>+{scale}</div>
      <div className={cn(styles.checkboxes)}>
        <label className={cn(styles.label)}>
          <input
            className={cn(styles.checkbox)}
            type="checkbox"
            checked={inARow % 4 >= 1}
          />
          <div className={cn(styles.check)}></div>
        </label>
        <label className={cn(styles.label)}>
          <input
            className={cn(styles.checkbox)}
            type="checkbox"
            checked={inARow % 4 >= 2}
          />
          <div className={cn(styles.check)}></div>
        </label>
        <label className={cn(styles.label)}>
          <input
            className={cn(styles.checkbox)}
            type="checkbox"
            checked={inARow % 4 >= 3}
          />
          <div className={cn(styles.check)}></div>
        </label>
      </div>
      <img className={cn(styles.picture)} src={fox} alt="fox" />
      <h3 className={cn(styles.english_word)}>{engWord}</h3>
      <p className={cn(styles.russian_word)}>{ruWord}</p>
      <div className={cn(styles.line)}></div>
      <div className={cn(styles.game_buttons_wrapper)}>
        <button className={cn(styles.true)} onClick={trueBtnHandler}>
          <p className={cn(styles.true_text)}>Верно</p>
        </button>
        <button className={cn(styles.false)} onClick={falseBtnHandler}>
          <p className={cn(styles.false_text)}>Не верно</p>
        </button>
      </div>
    </div>
  );
};

export default Game;