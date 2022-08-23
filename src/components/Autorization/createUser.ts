import { baseUrl } from "../../consts/consts";

export interface IUser {
  username?: string,
  email: string,
  password: string,
}

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
    case 200: console.log('Вы успешно зарегистрировались.');
      return response.json();
    case 422: console.log('Неверный логин или пароль.');
      return response.status;
    case 417: console.log('Пользователь с таким email уже зарегистрирован.');
      return response.status;
    }
  }).then (data => data);
  console.log('response: ', response);
};