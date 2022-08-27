import cn from 'classnames';
import styles from './Sprint.module.css';
import FirstFox from '../../assets/images/first_fox.png';
import { useEffect, useState } from 'react';
import { wordsApi } from '../../api/api';
import { randomNumber, randomWord1, randomWord2 } from './Constants';
import {WordType} from '../../types/types';

type TPoints = {
  points: number;
  setPoints: React.Dispatch<React.SetStateAction<number>>;
};

const Game: React.FC<TPoints> = ({points, setPoints}) => {
  const [ruWord, setRuWord] = useState('');
  const [engWord, setEngWord] = useState('');
  const [trueArray, setTrueArray] = useState<WordType[]>([]);
  const [falseArray, setFalseArray] = useState<WordType[]>([]);
  const [currentArr, setCurrentArr] = useState<WordType[]>([]);
  useEffect(() => {
    if (randomNumber === 1) {
      wordsApi
        .getWords(1, 1)
        .then((data) => {
          setEngWord(data[randomWord1].word);
          setRuWord(data[randomWord1].wordTranslate);
          setCurrentArr([data[randomWord1], data[randomWord1]]);
        });
    } else {
      wordsApi.getWords(1, 1).then((data) => {
        setEngWord(data[randomWord1].word);
        setRuWord(data[randomWord2].wordTranslate);
        setCurrentArr([data[randomWord1], data[randomWord2]]);
      });
    }
    // console.log(randomNumber);
    // console.log('true: ' + trueArray);
    // console.log('false: ' + falseArray);
    // console.log(currentArr);
  });

  const trueBtnHandler = () => {
    if (currentArr[0].word === currentArr[1].word) {
      setTrueArray(trueArray.concat(currentArr[0]));
      setPoints(points + 10);
    } else {
      setFalseArray(falseArray.concat(currentArr[0]));
      setPoints(points - 10);
    }
  };

  const falseBtnHandler = () => {
    if (currentArr[0].word !== currentArr[1].word) {
      setTrueArray(trueArray.concat(currentArr[0]));
      setPoints(points + 10);
    } else {
      setFalseArray(falseArray.concat(currentArr[0]));
      setPoints(points - 10);
    }
  };
  return (
    <div className={cn(styles.game_wrapper)}>
      <div className={cn(styles.points)}>+10</div>
      <div className={cn(styles.checkboxes)}>
        <input className={cn(styles.checkbox)} type="checkbox" />
        <input className={cn(styles.checkbox)} type="checkbox" />
        <input className={cn(styles.checkbox)} type="checkbox" />
      </div>
      <img className={cn(styles.picture)} src={FirstFox} alt="fox" />
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