import { ActionTypes } from "../types/enums";
import { UsersWordType, WordType } from "../types/types";

export type switchIsNavMenuOpenAction = {type: ActionTypes.switchIsNavMenuOpen}
export type getWordsAction = {
  type: ActionTypes.setWords
  words: WordType[]
}
export type setHardWordsAction = {
  type: ActionTypes.setHardWords
  words: UsersWordType[]
}
export type setAudioAction = {
  type: ActionTypes.setAudio
  newAudio: null | HTMLAudioElement
}
export type setGroupAction = {
  type: ActionTypes.setGroup
  group: number
}
export type setPageAction = {
  type: ActionTypes.setPage
  page: number
}
export type switchIsLogin = {
  type: ActionTypes.switchIsLogin
  status: boolean
}
export type switchIsStartGameFromTextbookActions = {
  type: ActionTypes.switchIsStartGameFromTextbook
}
export type switchIsLoadingActions = {
  type: ActionTypes.switchIsLoading
  status: boolean
}
export type switchIsLoadingHardWordsActions = {
  type: ActionTypes.switchIsLoadingHardWords
  status: boolean
}

export const actions = {
  switchIsNavMenuOpen: (): switchIsNavMenuOpenAction => ({type: ActionTypes.switchIsNavMenuOpen}),
  setWords: (words: WordType[]): getWordsAction => ({type: ActionTypes.setWords, words}),
  setHardWords: (words: UsersWordType[]): setHardWordsAction => ({type: ActionTypes.setHardWords, words}),
  setAudio: (newAudio: null | HTMLAudioElement): setAudioAction => ({type: ActionTypes.setAudio, newAudio}),
  setGroup: (group: number): setGroupAction => ({type: ActionTypes.setGroup, group}),
  setPage: (page: number): setPageAction => ({type: ActionTypes.setPage, page}),
  switchIsStartGameFromTextbook: (): switchIsStartGameFromTextbookActions => ({type: ActionTypes.switchIsStartGameFromTextbook}),
  switchIsLogin: (status: boolean): switchIsLogin => ({type: ActionTypes.switchIsLogin, status}),
  switchIsLoading: (status: boolean): switchIsLoadingActions => ({type: ActionTypes.switchIsLoading, status}),
  switchIsLoadingHardWords: (status: boolean): switchIsLoadingHardWordsActions => ({type: ActionTypes.switchIsLoadingHardWords, status})
};