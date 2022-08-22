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
  });
  console.log(response.status);
  if (response.status === 422) {
    console.log('Неверный логин или пароль.');
  } else if (response.status === 417) {
    console.log('Пользователь с таким email уже зарегистрирован.');
  }
};