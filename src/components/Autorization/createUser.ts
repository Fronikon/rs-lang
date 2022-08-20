interface IUser {
  username?: string,
  email: string,
  password: string,
}

export const createUser = async (user: IUser) => {
  const rawResponse = await fetch('https://rs-lang-team47.herokuapp.com/users', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  const content = await rawResponse.json();
  console.log('content: ', content);
};