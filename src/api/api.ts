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

const getMessageLogin = (status: number) => {
  switch (status) {
  case 200:
    return 'Вы вошли в систему';
  case 403:
    return 'Неверный логин или пароль';
  case 404:
    return 'Пользователь не найден';
  default:
    return 'Неизвестная ошибка';
  }
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

  if (response.status === 200) {
    response.json().then((res) => {
      localStorage.setItem('login', 'true');
      localStorage.setItem('token', res.token);
      localStorage.setItem('userId', res.userId);
    });
  }

  return getMessageLogin(response.status);
};

// *********************************************

const getMessageRegister = (status: number) => {
  switch (status) {
  case 200:
    return 'Вы успешно зарегистрировались';
  case 422:
    return 'Неверный логин или пароль';
  case 417:
    return 'Пользователь с таким email уже зарегистрирован';
  default:
    return 'Неизвестная ошибка';
  }
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

  return getMessageRegister(response.status);
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
