import { IUser } from './createUser';

export const loginUser = async (user: IUser) => {
  const response = await fetch('https://rs-lang-team47.herokuapp.com/signin', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  console.log(response.status);
  if (response.status === 403) {
    console.log('Неверный логин или пароль.');
  } else if (response.status === 404) {
    console.log('Пользователь не найден.');
  }
};