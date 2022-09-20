import { IUser } from '../types/types';
import { BASE_URL } from './api';

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

export const getNewTokens = async() => {
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