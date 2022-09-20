import { WordType } from './../types/types';
import { BASE_URL } from './api';

export const getWords = (group: number, page: number): Promise<WordType[]> => {
  const url = `${BASE_URL}words?group=${group}&page=${page}`;
  return fetch(url).then((res) => res.json());
};