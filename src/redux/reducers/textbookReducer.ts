import { ActionTypes } from "../../types/enums";
import { UsersWordType, WordType } from "../../types/types";
import { setAudioAction, getWordsAction, setGroupAction, setPageAction, setHardWordsAction } from "../actions";

const initialState = {
  wordCards: [] as WordType[],
  hardWordCards: [] as UsersWordType[],
  currentAudio: null as null | HTMLAudioElement,
  currentGroup: 0 as number,
  currentPage: 0 as number
};

type initialStateType = typeof initialState
type ActionType = getWordsAction | setAudioAction | setGroupAction | setPageAction | setHardWordsAction

const textbookReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
  switch (action.type) {
  case ActionTypes.setWords: {
    return {...state, wordCards: action.words};
  }
  case ActionTypes.setHardWords: {
    return {...state, hardWordCards: action.words};
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