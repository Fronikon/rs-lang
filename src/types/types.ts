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
  optional?: UserWordOptionalType
}

export interface UsersWordType extends generalWordType {
  _id: string,
  userWord?: {
    difficulty?: Difficulties
    optional?: UserWordOptionalType
  }
}

type WordTotalCountType = {
  count: number
}

export type UserWordFilterResultType = {
  paginatedResults: UsersWordType[],
  totalCount: WordTotalCountType[]
}

export type UserWordOptionalType = {
  isLearned: boolean
  sucsessAttempts: number
}

export type UserWordOptionsType = {
  id: string,
  difficulty: Difficulties,
  optional?: UserWordOptionalType
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

export type GameStatisticsType = {
  countNewWordsPerDay: number
  countLearnedWordsPerDay: number
  seriesSucсessAnswersPerDay: number
  countAnswersPerDay: number
  countSucсessAnswersPerDay: number
}

export type StatisticsType = {
  learnedWords: number
  optional: {
    lastVisit: number
    sprint: GameStatisticsType
    audiochallenge: GameStatisticsType
  }
}

export type StatItemsType = {
  key: string
  text: string
  data: string
}

export type StatDatasType = {
  key: string
  title: string
  list: StatItemsType[]
}

export interface ResponseStatisticsType extends StatisticsType {
  id?: string
}