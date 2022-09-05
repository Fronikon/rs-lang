import { ActionTypes } from "../../types/enums";
import { UsersWordType, WordType } from "../../types/types";
import { AnyAction } from 'redux';

const initialState = {
  wordCards: [] as WordType[],
  hardWordCards: [] as UsersWordType[],
  currentAudio: null as null | HTMLAudioElement,
  currentGroup: 0 as number,
  currentPage: 0 as number,
  isStartGameFromTextbook: false as boolean
};

type initialStateType = typeof initialState

const textbookReducer = (state: initialStateType = initialState, action: AnyAction): initialStateType => {
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
  case ActionTypes.switchIsStartGameFromTextbook: {
    return {...state, isStartGameFromTextbook: !state.isStartGameFromTextbook};
  }
  default: {
    return state;
  }
  }
};

export default textbookReducer;