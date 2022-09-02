import { IUser, UserWordFilterResultType, UserWordOptionsType, WordType } from "../types/types";

export const BASE_URL = 'https://rs-lang-team47.herokuapp.com/';

export const wordsApi = {
  getWords(group: number, page: number): Promise<WordType[]> {
    const url = `${BASE_URL}words?group=${group}&page=${page}`;
    return fetch(url).then((res) => res.json());
  },

  getUserWords(): Promise<UserWordOptionsType[]> {
    const token = window.localStorage.getItem('token');
    const userId = window.localStorage.getItem('userId');

    const url = `${BASE_URL}users/${userId}/words`;
    const options = {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    };

    return fetch(url, options).then((res) => res.json());
  },

  getHardWords(): Promise<UserWordFilterResultType[]> {
    const token = window.localStorage.getItem('token');
    const userId = window.localStorage.getItem('userId');

    const url = `${BASE_URL}users/${userId}/aggregatedWords?filter={"$or":[{"userWord.difficulty":"hard"},{"userWord.difficulty":"learned-hard"}]}&wordsPerPage=3600`;
    const options = {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    };

    return fetch(url, options).then((res) => res.json());
  },

  async updateUserWord(wordId: string, difficulty: string) {
    const token = window.localStorage.getItem('token');
    const userId = window.localStorage.getItem('userId');

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
        optional: {}
      })
    };

    return fetch(url, options);
  },

  async postUserWord(wordId: string, difficulty: string) {
    const token = window.localStorage.getItem('token');
    const userId = window.localStorage.getItem('userId');

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
        optional: {}
      })
    };

    return fetch(url, options);
  },
  async deleteUserWord(wordId: string) {
    const token = window.localStorage.getItem('token');
    const userId = window.localStorage.getItem('userId');

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

export const loginUser = async (user: IUser): Promise<Response> => {
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

export const createUser = async (user: IUser): Promise<Response> => {
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

// *********************************************
export const refreshToken = async (userId: IUser): Promise<Response> => {
  const response = await fetch(`${BASE_URL}/users/${userId}/tokens`, {
    method: 'GET',
    body: JSON.stringify(userId)
  }).then(response => {
    if (response.status === 200) return response.json();
  }).then(data => data);
  localStorage.setItem('token', response.token);
  localStorage.setItem('refreshToken', response.refreshToken);
  return response;
};
