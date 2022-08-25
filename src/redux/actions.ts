import { ActionTypes } from "../types/enums";
import { WordType } from "../types/types";

export type switchIsNavMenuOpenAction = {type: ActionTypes.switchIsNavMenuOpen}
export type getWordsAction = {
  type: ActionTypes.getWords
  words: WordType[]
}
export type switchIsLogin = {type: ActionTypes.switchIsLogin}

export const actions = {
  switchIsNavMenuOpen: (): switchIsNavMenuOpenAction => ({type: ActionTypes.switchIsNavMenuOpen}),
  setWords: (words: WordType[]): getWordsAction => ({type: ActionTypes.getWords, words}),
  switchIsLogin: (): switchIsLogin => ({type: ActionTypes.switchIsLogin})
};