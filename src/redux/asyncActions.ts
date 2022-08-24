import { WordType } from '../types/types';
import { wordsApi } from './../api/api';
import { actions, getWordsAction } from './actions';
import { Dispatch } from 'react';

type getWordsDispatchType = getWordsAction

export const asyncActions = {
  getWords: (group: number, page: number) => {
    return async (dispatch: Dispatch<getWordsDispatchType>) => {
      const words: WordType[] = await wordsApi.getWords(group, page);
      dispatch(actions.setWords(words));
    };
  }
};