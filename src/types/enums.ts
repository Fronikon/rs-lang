export enum ActionTypes {
  switchIsNavMenuOpen = 'SWITCH-IS-NAV-MENU-OPEN',
  setWords = 'SET-WORDS',
  setHardWords = 'SET-HARD-WORDS',
  setAudio = 'SET-AUDIO',
  setGroup = 'SET-GROUP',
  setPage = 'SET-PAGE',
  getWords = 'GET-WORDS',
  switchIsLogin = 'SWITCH-IS-LOGIN'
}

export enum Difficulties {
  learned = 'learned',
  learnedHard = 'learned-hard',
  hard = 'hard',
}

export const GameStatusData = {
  start: 'START',
  inProcess: 'IN-PROCESS',
  finish: 'RESULT'
};
