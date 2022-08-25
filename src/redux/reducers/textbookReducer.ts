import { ActionTypes } from "../../types/enums";
import { WordCardsType } from "../../types/types";
import { setAudioAction, getWordsAction, setGroupAction, setPageAction } from "../actions";

const initialState = {
  wordCards: [] as WordCardsType[],
  currentAudio: null as null | HTMLAudioElement,
  currentGroup: 0 as number,
  currentPage: 0 as number
};

type initialStateType = typeof initialState
type ActionType = getWordsAction | setAudioAction | setGroupAction | setPageAction

const textbookReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
  switch (action.type) {
  case ActionTypes.setWords: {
    return {...state, wordCards: action.newWordCards};
  }
  case ActionTypes.setAudio: {
    return {...state, currentAudio: action.newAudio};
  }
  case ActionTypes.setGroup: {
    return {...state, currentGroup: action.group, currentPage: 0};
  }
  case ActionTypes.setPage: {
    return {...state, currentPage: action.page};
  }
  default: {
    return state;
  }
  }
};

export default textbookReducer;