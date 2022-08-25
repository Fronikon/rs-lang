import { ActionTypes } from "../types/enums";
import { WordCardsType } from "../types/types";

export type switchIsNavMenuOpenAction = {type: ActionTypes.switchIsNavMenuOpen}
export type getWordsAction = {
  type: ActionTypes.setWords
  newWordCards: WordCardsType[]
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

export const actions = {
  switchIsNavMenuOpen: (): switchIsNavMenuOpenAction => ({type: ActionTypes.switchIsNavMenuOpen}),
  getWords: (newWordCards: WordCardsType[]): getWordsAction => ({type: ActionTypes.setWords, newWordCards}),
  setAudio: (newAudio: null | HTMLAudioElement): setAudioAction => ({type: ActionTypes.setAudio, newAudio}),
  setGroup: (group: number): setGroupAction => ({type: ActionTypes.setGroup, group}),
  setPage: (page: number): setPageAction => ({type: ActionTypes.setPage, page}),
};