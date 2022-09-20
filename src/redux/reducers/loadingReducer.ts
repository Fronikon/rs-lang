import { ActionTypes } from "../../types/enums";
import { AnyAction } from 'redux';

const initialState = {
  isLoading: false,
  isLoadingHardWords: false
};

type InitialStateType = typeof initialState

const loadingReducer = (state: InitialStateType = initialState, action: AnyAction): InitialStateType => {
  switch (action.type) {
  case ActionTypes.switchIsLoading: {
    return { ...state, isLoading: action.status };
  }
  case ActionTypes.switchIsLoadingHardWords: {
    return { ...state, isLoadingHardWords: action.status };
  }
  default: {
    return state;
  }
  }
};

export default loadingReducer;