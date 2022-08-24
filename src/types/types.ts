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

export type WordType = {
  id: string,
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

export interface IUser {
  username?: string,
  email: string,
  password: string,
}
