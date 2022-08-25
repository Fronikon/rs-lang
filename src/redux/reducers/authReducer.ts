import { ActionTypes } from "../../types/enums";

const authState = {
  isLogin: false
};

type authStateType = typeof authState

type ActionType = {
  type: string,
}

const authReducer = (state: authStateType = authState, action: ActionType): authStateType => {
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