import { UserWordFilterResultType, UserWordOptionalType, UserWordOptionsType } from "../types/types";
import { BASE_URL } from "./api";
import { WordType } from './../types/types';

export const getUserWords = async (): Promise<UserWordOptionsType[]> => {
  const token = JSON.parse(window.localStorage.getItem('token') as string);
  const userId = JSON.parse(window.localStorage.getItem('userId') as string);

  const url = `${BASE_URL}users/${userId}/words`;
  const options = {
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  };

  const res = await fetch(url, options);
  return await res.json();
};

export const getNotLearnedWords = async (group: number, page: number): Promise<WordType[]> => {
  const token = JSON.parse(window.localStorage.getItem('token') as string);
  const userId = JSON.parse(window.localStorage.getItem('userId') as string);

  const url = `${BASE_URL}users/${userId}/aggregatedWords?filter={"$and":[{"$or":[{"userWord.optional.isLearned":false},{"userWord":null}]},{"group":${group}},{"page":${page}}]}&wordsPerPage=20`;
  const options = {
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  };

  const res = await fetch(url, options);
  const data: UserWordFilterResultType[] = await res.json();
  const paginatedResults = data[0].paginatedResults;
  const response: WordType[] = paginatedResults.map((item) => {
    return {
      id: item._id,
      group: item.group,
      page: item.page,
      word: item.word,
      image: item.image,
      audio: item.audio,
      audioMeaning: item.audioMeaning,
      audioExample: item.textExample,
      textMeaning: item.textMeaning,
      textExample: item.textExample,
      transcription: item.transcription,
      wordTranslate: item.wordTranslate,
      textMeaningTranslate: item.textMeaningTranslate,
      textExampleTranslate: item.textExampleTranslate,
      difficulty: item.userWord?.difficulty,
      optional: item.userWord?.optional
    };
  });
  return response;
};

export const getHardWords = async (): Promise<UserWordFilterResultType[]> => {
  const token = JSON.parse(window.localStorage.getItem('token') as string);
  const userId = JSON.parse(window.localStorage.getItem('userId') as string);

  const url = `${BASE_URL}users/${userId}/aggregatedWords?filter={"userWord.difficulty":"hard"}&wordsPerPage=3600`;
  const options = {
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  };

  return fetch(url, options).then((res) => res.json());
};

export const updateUserWord = async (wordId: string, difficulty: string, optional: UserWordOptionalType) => {
  const token = JSON.parse(window.localStorage.getItem('token') as string);
  const userId = JSON.parse(window.localStorage.getItem('userId') as string);

  const url = `${BASE_URL}users/${userId}/words/${wordId}`;
  const options = {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
      difficulty,
      optional
    })
  };

  return fetch(url, options);
};

export const postUserWord = async (wordId: string, difficulty: string, optional: UserWordOptionalType) => {
  const token = JSON.parse(window.localStorage.getItem('token') as string);
  const userId = JSON.parse(window.localStorage.getItem('userId') as string);

  const url = `${BASE_URL}users/${userId}/words/${wordId}`;
  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
      difficulty,
      optional
    })
  };

  return fetch(url, options);
};