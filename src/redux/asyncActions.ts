import { UserWordFilterResultType, UserWordOptionsType, WordType } from '../types/types';
import { actions } from './actions';
import { AppDispatchType, StoreType } from '../store/store';
import { getWords } from '../api/wordsApi';
import { getHardWords, getUserWords } from '../api/userWordsApi';

export const asyncActions = {
  getWords() {
    return async (dispatch: AppDispatchType, getState: () => StoreType) => {
      dispatch(actions.switchIsLoading(true));
      const state = getState();

      const wordCards: WordType[] = await getWords(state.textbook.currentGroup, state.textbook.currentPage);

      if (state.auth.isLogin) {
        const userWords: UserWordOptionsType[] = await getUserWords();
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
  getHardWords() {
    return async (dispatch: AppDispatchType) => {
      dispatch(actions.switchIsLoadingHardWords(true));
      const hardWordCards: UserWordFilterResultType[] = await getHardWords();
      
      dispatch(actions.setHardWords(hardWordCards[0].paginatedResults));
      dispatch(actions.switchIsLoadingHardWords(false));
    };
  }
};