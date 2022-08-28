import cn from 'classnames';
import { Key, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { StoreType } from '../../../..';
import { wordsApi } from '../../../../api/api';
import { WordType } from '../../../../types/types';
import styles from './QuestionPage.module.css';
import WordQuest from './Word';

function setRandomNumbersArray() {
  const randomNumbersArray: number[] = [];
  let count = 0;
  while (count !== 5) {
    const randomNumber = Math.floor(Math.random() * 20);
    if (!randomNumbersArray.includes(randomNumber)) {
      randomNumbersArray.push(randomNumber);
      count++;
    }
  }
  return randomNumbersArray;
}

const QuestionPage: React.FC = () => {
  const currentGroup = useSelector((state: StoreType): number => state.textbook.currentGroup);
  const currentPage = useSelector((state: StoreType): number => state.textbook.currentPage);

  // const [currentArray, setCurrentArray] = useState<WordType[]>([]);
  // const [randomNumbersArray, setRandomNumbersArray] = useState<WordType[]>([]);
  useEffect(() => {
    wordsApi.getWords(currentGroup, currentPage)
      .then((data) => {
        const currentArray: WordType[] = [];
        const randomNumbersArray = setRandomNumbersArray();
        randomNumbersArray.forEach(el => {
          currentArray.push(data[el].wordTranslate);
        });
        console.log('currentArray: ', currentArray);
      });
  });

  return (
    <div className={cn(styles.questionPage__container)}>
      <div className={cn(styles.questionPage__headerContainer)}>
        <div className={cn(styles.questionPage__counter)}>0/20</div>
        <button className={cn(styles.questionPage__closeButton)} type='button'></button>
      </div>
      <button className={cn(styles.questionPage__button)} type='button'></button>
      <ul className={cn(styles.questionPage__list)}>
        {currentArray.map((el: Key | null | undefined) => <WordQuest
          key={el}
        />)}
      </ul>
      <button className={cn(styles.questionPage__skipButton)} type='button'>Не знаю</button>
    </div>
  );
};

export default QuestionPage;