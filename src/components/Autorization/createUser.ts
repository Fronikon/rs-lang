import { baseUrl } from "../../consts/consts";

export interface IUser {
  username?: string,
  email: string,
  password: string,
}

export let eventCreateUser = {
  code: 0,
  message: ''
};

export const createUser = async (user: IUser) => {
  const response = await fetch(`${baseUrl}/users`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then (response => {
    switch (response.status) {
    case 200:
      eventCreateUser = {
        code: 200,
        message: 'Вы успешно зарегистрировались'
      };
      return response.json();
    case 422:
      eventCreateUser = {
        code: 200,
        message: 'Неверный логин или пароль'
      };
      return response.status;
    case 417:
      eventCreateUser = {
        code: 200,
        message: 'Пользователь с таким email уже зарегистрирован'
      };
      return response.status;
    }
  }).then (data => data);
  return response;
};