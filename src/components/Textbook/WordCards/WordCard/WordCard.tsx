import styles from "./WordCard.module.css";
import VoiceButton from './VoiceButton/VoiceButton';
import WordCardChoice from "./WordCardChoice/WordCardChoice";
import { Difficulties } from "../../../../types/enums";

type WordCardPropsType = {
  id: string
  img: string
  audio: string
  audioMeaning: string
  audioExample: string
  word: string
  transcription: string
  wordTranslate: string
  textMeaning: string
  textMeaningTranslate: string
  textExample: string
  textExampleTranslate: string
  difficulty?: Difficulties
  isLogin: boolean
}

type WordCardMeaningPropsType = {
  textMeaning: string
  textMeaningTranslate: string
}

type WordCardExamplePropsType = {
  textExample: string
  textExampleTranslate: string
}

type WordCardNameContainerPropsType = {
  audio: string
  audioMeaning: string
  audioExample: string
  word: string
  transcription: string
  wordTranslate: string
}

const WordCardNameContainer: React.FC<WordCardNameContainerPropsType> = (props) => (
  <div className={styles['word-name__wrapper']}>
    <VoiceButton
      audio={props.audio}
      audioMeaning={props.audioMeaning}
      audioExample={props.audioExample}
    />
    <span className={styles['word-name']}>
      <b>{props.word}</b>
      {` ${props.transcription}`}
      {' — '}
      <span className={styles.translate}>{props.wordTranslate}</span>
    </span>
  </div>
);

const WordCardMeaning: React.FC<WordCardMeaningPropsType> = (props) => (
  <p className={styles['word-meaning']}>
    <b dangerouslySetInnerHTML={{ __html: props.textMeaning }}></b>
    {' — '}
    <span
      className={styles.translate}
      dangerouslySetInnerHTML={{ __html: props.textMeaningTranslate }}
    ></span>
  </p>
);

const WordCardExample: React.FC<WordCardExamplePropsType> = (props) => (
  <p className={styles['word-example']}>
    <span dangerouslySetInnerHTML={{ __html: props.textExample }}></span>
    {' — '}
    <span
      className={styles.translate}
      dangerouslySetInnerHTML={{ __html: props.textExampleTranslate }}
    ></span>
  </p>
);

const WordCard: React.FC<WordCardPropsType> = (props) => {
  return (
    <div className={styles['word-card']}>
      <img className={styles.img} src={props.img} alt="word" />
      <div className={styles['word-card__inner']}>
        <WordCardNameContainer 
          audio={props.audio}
          audioMeaning={props.audioMeaning}
          audioExample={props.audioExample}
          word={props.word}
          transcription={props.transcription}
          wordTranslate={props.wordTranslate}
        />
        <WordCardMeaning
          textMeaning={props.textMeaning}
          textMeaningTranslate={props.textMeaningTranslate}
        />
        <WordCardExample
          textExample={props.textExample}
          textExampleTranslate={props.textExampleTranslate}
        />
        {props.isLogin && <WordCardChoice
          wordId={props.id}
          difficulty={props.difficulty}
        />}
      </div>
    </div>
  );
};

export default WordCard;