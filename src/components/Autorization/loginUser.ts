import { baseUrl } from '../../consts/consts';
import { IUser } from './createUser';

export let authData = {
  code: 0,
  message: ''
};

export const loginUser = async (user: IUser) => {
  const response = await fetch(`${baseUrl}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then (response => {
    switch (response.status) {
    case 200:
      authData = {
        code: 200,
        message: 'Вы вошли в систему'
      };
      localStorage.setItem('login', 'true');
      return response.json();
    case 403:
      authData = {
        code: 403,
        message: 'Неверный логин или пароль'
      };
      return response.status;
    case 404:
      authData = {
        code: 403,
        message: 'Пользователь не найден'
      };
      return response.status;
    }
  }).then (data => data);
  if (response.token) {    
    localStorage.setItem('token', response.token);
    console.log('localStorage.getItem("token")', localStorage.getItem('token'));  
  }
};