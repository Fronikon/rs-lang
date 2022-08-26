import { WordType } from '../types/types';
import { wordsApi } from './../api/api';
import { actions, getWordsAction } from './actions';
import { Dispatch } from 'react';

export const asyncActions = {
  getWords: (group: number, page: number) => {
    return async (dispatch: Dispatch<getWordsAction>) => {
      const wordCards: WordType[] = await wordsApi.getWords(group, page);
      dispatch(actions.setWords(wordCards));
    };
  }
};