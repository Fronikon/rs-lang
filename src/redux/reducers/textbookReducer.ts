import { ActionTypes } from "../../types/enums";
import { WordCardsType } from "../../types/types";
import { setAudioAction, getWordsAction } from "../actions";

const initialState = {
  wordCards: [] as WordCardsType[],
  currentAudio: null as null | HTMLAudioElement,
  currentGroup: 0 as number,
  currentPage: 0 as number
};

type initialStateType = typeof initialState
type ActionType = getWordsAction | setAudioAction

const textbookReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
  switch (action.type) {
  case ActionTypes.setWords: {
    return {...state, wordCards: action.newWordCards};
  }
  case ActionTypes.setAudio: {
    return {...state, currentAudio: action.newAudio};
  }
  default: {
    return state;
  }
  }
};

export default textbookReducer;