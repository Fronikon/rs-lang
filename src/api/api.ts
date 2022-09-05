import { IUser, UserWordFilterResultType, UserWordOptionalType, UserWordOptionsType, WordType } from "../types/types";

export const BASE_URL = 'https://rs-lang-team47.herokuapp.com/';

export const wordsApi = {
  getWords(group: number, page: number): Promise<WordType[]> {
    const url = `${BASE_URL}words?group=${group}&page=${page}`;
    return fetch(url).then((res) => res.json());
  },

  getUserWords(): Promise<UserWordOptionsType[]> {
    const token = JSON.parse(window.localStorage.getItem('token') as string);
    const userId = JSON.parse(window.localStorage.getItem('userId') as string);

    const url = `${BASE_URL}users/${userId}/words`;
    const options = {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    };

    return fetch(url, options).then((res) => res.json());
  },

  async getNotLearnedWords(group: number, page: number): Promise<WordType[]> {
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
  },

  getHardWords(): Promise<UserWordFilterResultType[]> {
    const token = JSON.parse(window.localStorage.getItem('token') as string);
    const userId = JSON.parse(window.localStorage.getItem('userId') as string);

    const url = `${BASE_URL}users/${userId}/aggregatedWords?filter={"userWord.difficulty":"hard"}&wordsPerPage=3600`;
    const options = {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    };

    return fetch(url, options).then((res) => res.json());
  },

  async updateUserWord(wordId: string, difficulty: string, optional: UserWordOptionalType) {
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
  },

  async postUserWord(wordId: string, difficulty: string, optional: UserWordOptionalType) {
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
  },
  async deleteUserWord(wordId: string) {
    const token = JSON.parse(window.localStorage.getItem('token') as string);
    const userId = JSON.parse(window.localStorage.getItem('userId') as string);

    const url = `${BASE_URL}users/${userId}/words/${wordId}`;
    const options = {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };

    return fetch(url, options);
  }
};

export const usersApi = {

};

export const authApi = {

};

export const loginUser = async(user: IUser): Promise<Response> => {
  const response = await fetch(`${BASE_URL}signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  return response;
};

export const createUser = async(user: IUser): Promise<Response> => {
  const response = await fetch(`${BASE_URL}users`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  return response;
};

export const getRefreshToken = async() => {
  const refreshToken = JSON.parse(window.localStorage.getItem('refreshToken') as string);
  const userId = JSON.parse(window.localStorage.getItem('userId') as string);

  return await fetch(`${BASE_URL}users/${userId}/tokens`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${refreshToken}`,
      'Accept': 'application/json',
    },
  });  
};

export const getStatistics = async() => {
  const token = JSON.parse(window.localStorage.getItem('token') as string);
  const userId = JSON.parse(window.localStorage.getItem('userId') as string);

  return await fetch(`${BASE_URL}users/${userId}/statistics`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
    },
  });  
};
