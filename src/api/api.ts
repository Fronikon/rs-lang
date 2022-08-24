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

// *********************************************
export let eventUser = {
  code: 0,
  message: ''
};

export const loginUser = async (user: IUser) => {
  const response = await fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then (response => {
    switch (response.status) {
    case 200:
      eventUser = {
        code: 200,
        message: 'Вы вошли в систему'
      };
      localStorage.setItem('login', 'true');
      return response.json();
    case 403:
      eventUser = {
        code: 403,
        message: 'Неверный логин или пароль'
      };
      return response.status;
    case 404:
      eventUser = {
        code: 403,
        message: 'Пользователь не найден'
      };
      return response.status;
    }
  }).then (data => data);
  if (response.token) {    
    localStorage.setItem('token', response.token);
  }
};

// *********************************************

export const createUser = async (user: IUser) => {
  const response = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then (response => {
    switch (response.status) {
    case 200:
      eventUser = {
        code: 200,
        message: 'Вы успешно зарегистрировались'
      };
      return response.json();
    case 422:
      eventUser = {
        code: 200,
        message: 'Неверный логин или пароль'
      };
      return response.status;
    case 417:
      eventUser = {
        code: 200,
        message: 'Пользователь с таким email уже зарегистрирован'
      };
      return response.status;
    }
  }).then (data => data);
  return response;
};