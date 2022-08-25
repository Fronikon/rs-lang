import { IUser } from "../types/types";

const BASE_URL = 'https://rs-lang-team47.herokuapp.com/';

export const wordsApi = {
  getWords: (group: number, page: number) => {
    const url = `${BASE_URL}words?group=${group}&page=${page}`;
    return fetch(url).then((res) => res.json());
  }
}; 

export const usersApi = {
  
};

export const authApi = {
  
};

export const loginUser = async (user: IUser) => {
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

export const createUser = async (user: IUser) => {
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
export const refreshToken = async (userId: IUser) => {
  const response = await fetch(`${BASE_URL}/users/${userId}/tokens`, {
    method: 'GET',
    body: JSON.stringify(userId)
  }).then (response => {
    if (response.status === 200) return response.json();
  }).then (data => data);
  localStorage.setItem('token', response.token);
  localStorage.setItem('refreshToken', response.refreshToken);
  return  response;
};
