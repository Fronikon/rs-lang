export const BASE_URL = 'https://rs-lang-team47.herokuapp.com/';

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