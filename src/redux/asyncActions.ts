import { UserWord, WordType } from '../types/types';
import { wordsApi } from './../api/api';
import { actions, getWordsAction } from './actions';
import { Dispatch } from 'react';
import { StoreType } from '..';

export const asyncActions = {
  getWords: () => {
    return async (dispatch: Dispatch<getWordsAction>, getState: () => StoreType) => {
      const state = getState();

      const wordCards: WordType[] = await wordsApi.getWords(state.textbook.currentGroup, state.textbook.currentPage);

      if (state.auth.isLogin) {
        const userWords: UserWord[] = await wordsApi.getUserWords();
        wordCards.forEach((word) => {
          const userWord = userWords.find((userWord) => userWord.wordId === word.id);
          if (userWord) {
            word.difficulty = userWord.difficulty;
          }
        });
      }

      dispatch(actions.setWords(wordCards));
    };
  }
};