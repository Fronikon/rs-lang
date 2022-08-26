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
  email: string,
  password: string,
  username?: string,
}

export type AuthDataType = {
  message: string
  code?: number
}
