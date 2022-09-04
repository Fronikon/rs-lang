import { Difficulties } from "./enums";

export type AuthInputValueType = {
  [index: string]: string
  username: string
  email: string
  password: string
}

export type AuthInputDataType = {
  key: string
  lableName: string,
  dataName: string,
  inputName: string,
  inputType: string,
  placeholder: string
}

export type LabelFormPropsType = {
  name: string
  errorName: string
  placeholder: string
  inputType: string
  inputName: string
  inputValue: string
  setInput: React.Dispatch<React.SetStateAction<AuthInputValueType>>
  setError: React.Dispatch<React.SetStateAction<AuthInputValueType>>
}

export interface generalWordType {
  group: number,
  page: number,
  word: string,
  image: string,
  audio: string,
  audioMeaning: string,
  audioExample: string,
  textMeaning: string,
  textExample: string,
  transcription: string,
  wordTranslate: string,
  textMeaningTranslate: string,
  textExampleTranslate: string
}

export interface WordType extends generalWordType {
  id: string,
  difficulty?: Difficulties
}

export interface UsersWordType extends generalWordType {
  _id: string,
  userWord?: {
    difficulty?: Difficulties
  }
}

type WordTotalCountType = {
  count: number
}

export type UserWordFilterResultType = {
  paginatedResults: UsersWordType[],
  totalCount: WordTotalCountType[]
}

export type UserWordOptionsType = {
  id: string,
  difficulty: Difficulties,
  wordId: string
}

export interface IUser {
  email: string,
  password: string,
  username?: string,
}

export type AuthDataType = {
  message: string
  code?: number
}

export type StatisticsType = {
  learnedWords: number
  optional: {
    lastVisit: Date
    sprint: {
      countNewWordsPerDay: number
      countLearnedWordsPerDay: number
      seriesSucсessAnswersPerDay: number
      countAnswersPerDay: number
      countSucсessAnswersPerDay: number
    }
    audiochallenge: {
      countNewWordsPerDay: number
      countLearnedWordsPerDay: number
      seriesSucсessAnswersPerDay: number
      countAnswersPerDay: number
      countSucсessAnswersPerDay: number
    }
  }
}
