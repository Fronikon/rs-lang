import { ActionTypes } from "../../types/enums";
import { AnyAction } from 'redux';

const authState = {
  isLogin: false
};

type authStateType = typeof authState

const authReducer = (state: authStateType = authState, action: AnyAction): authStateType => {
  switch (action.type) {
  case ActionTypes.switchIsLogin: {
    return {...state, isLogin: !state.isLogin};
  }
  default: {
    return state;
  }
  }
};

export default authReducer;