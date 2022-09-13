import { UserWordFilterResultType, UserWordOptionsType, WordType } from '../types/types';
import { wordsApi } from './../api/api';
import { actions } from './actions';
import { AppDispatchType, StoreType } from '../store/store';

export const asyncActions = {
  getWords: () => {
    return async (dispatch: AppDispatchType, getState: () => StoreType) => {
      dispatch(actions.switchIsLoading(true));
      const state = getState();

      const wordCards: WordType[] = await wordsApi.getWords(state.textbook.currentGroup, state.textbook.currentPage);

      if (state.auth.isLogin) {
        const userWords: UserWordOptionsType[] = await wordsApi.getUserWords();
        wordCards.forEach((word) => {
          const userWord = userWords.find((userWord) => userWord.wordId === word.id);
          if (userWord) {
            word.difficulty = userWord.difficulty;
            word.optional = userWord.optional;
          }
        });
      }

      dispatch(actions.setWords(wordCards));
      dispatch(actions.switchIsLoading(false));
    };
  },
  getHardWords: () => {
    return async (dispatch: AppDispatchType) => {
      dispatch(actions.switchIsLoadingHardWords(true));
      const hardWordCards: UserWordFilterResultType[] = await wordsApi.getHardWords();
      
      dispatch(actions.setHardWords(hardWordCards[0].paginatedResults));
      dispatch(actions.switchIsLoadingHardWords(false));
    };
  }
};