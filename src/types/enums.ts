export enum ActionTypes {
  switchIsNavMenuOpen = 'SWITCH-IS-NAV-MENU-OPEN',
  setWords = 'SET-WORDS',
  setHardWords = 'SET-HARD-WORDS',
  setAudio = 'SET-AUDIO',
  setGroup = 'SET-GROUP',
  setPage = 'SET-PAGE',
  getWords = 'GET-WORDS',
  switchIsLogin = 'SWITCH-IS-LOGIN',
  switchIsStartGameFromTextbook = 'IS-START-GAME-FROM-TEXTBOOK',
  switchIsLoading = 'SWITCH-IS-LOADING',
  switchIsLoadingHardWords = 'SWITCH-IS-LOADING-HARD-WORDS'
}

export enum Difficulties {
  common = 'common',
  hard = 'hard',
}

export enum GameType {
  audioChallenge = 'AUDIO-CHALLENGE',
  sprint = 'SPRINT'
}

export const GameStatusData = {
  start: 'START',
  inProcess: 'IN-PROCESS',
  finish: 'RESULT'
};
