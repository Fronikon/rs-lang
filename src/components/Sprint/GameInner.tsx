import cn from 'classnames';
import styles from './Sprint.module.css';
import FirstFox from '../../assets/images/first_fox.png';
import SecondFox from '../../assets/images/second_fox.png';
import ThirdFox from '../../assets/images/third_fox.png';
import ForthFox from '../../assets/images/forth_fox.png';
import { useEffect, useState } from 'react';
import {WordType} from '../../types/types';
import { GameStatusData } from './../../types/enums';

type PropsType = {
  setGameStatus: React.Dispatch<React.SetStateAction<string>>
  pageArray: WordType[];
  points: number;
  setPoints: React.Dispatch<React.SetStateAction<number>>;
  trueArray: WordType[];
  setTrueArray: React.Dispatch<React.SetStateAction<WordType[]>>;
  falseArray: WordType[];
  setFalseArray: React.Dispatch<React.SetStateAction<WordType[]>>;
};

const GameInner: React.FC<PropsType> = ({
  setGameStatus,
  pageArray,
  points,
  setPoints,
  trueArray,
  setTrueArray,
  falseArray,
  setFalseArray,
}) => {
  const [ruWord, setRuWord] = useState('');
  const [engWord, setEngWord] = useState('');
  const [numberCurrentWord, setNumberCurrentWord] = useState<number>(0);
  const [currentArr, setCurrentArr] = useState<WordType[]>([]);
  const [pointsColor, setPointsColor] = useState('green_points');
  const [fox, setFox] = useState(FirstFox);
  const [scale, setScale] = useState(10);
  const [inARow, setInARow] = useState(0);

  useEffect(() => {
    const randomNumber = Math.round(Math.random());
    const randomWord2 = Math.floor(Math.random() * pageArray.length);

    if (randomNumber === 1) {
      setEngWord(pageArray[numberCurrentWord].word);
      setRuWord(pageArray[numberCurrentWord].wordTranslate);
      setCurrentArr([pageArray[numberCurrentWord], pageArray[numberCurrentWord]]);
    } else {
      setEngWord(pageArray[numberCurrentWord].word);
      setRuWord(pageArray[randomWord2].wordTranslate);
      setCurrentArr([pageArray[numberCurrentWord], pageArray[randomWord2]]);
    }
  }, [numberCurrentWord, pageArray]);

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

  const answerCheck = (check: boolean) => {
    if (check) {
      setInARow(inARow + 1);
      setTrueArray(trueArray.concat(currentArr[0]));
      setPoints(points + scale);
    } else {
      setInARow(0);
      setFalseArray(falseArray.concat(currentArr[0]));
    }
    if (numberCurrentWord < pageArray.length - 1) {
      setNumberCurrentWord(numberCurrentWord + 1);
    } else {
      setGameStatus(GameStatusData.finish);
    }
  };

  const trueBtnHandler = () => {
    answerCheck(currentArr[0].word === currentArr[1].word);
  };
  const falseBtnHandler = () => {
    answerCheck(currentArr[0].word !== currentArr[1].word);
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
            readOnly
          />
          <div className={cn(styles.check)}></div>
        </label>
        <label className={cn(styles.label)}>
          <input
            className={cn(styles.checkbox)}
            type="checkbox"
            checked={inARow % 4 >= 2}
            readOnly
          />
          <div className={cn(styles.check)}></div>
        </label>
        <label className={cn(styles.label)}>
          <input
            className={cn(styles.checkbox)}
            type="checkbox"
            checked={inARow % 4 >= 3}
            readOnly
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

export default GameInner;