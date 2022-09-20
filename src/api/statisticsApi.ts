import { statisticsInitial } from "../data/statisticsInitial";
import { ResponseStatisticsType, StatisticsType } from "../types/types";
import { BASE_URL } from "./api";

export const updateStatistics = (body: StatisticsType) => {
  const token = JSON.parse(window.localStorage.getItem('token') as string);
  const userId = JSON.parse(window.localStorage.getItem('userId') as string);

  const url = `${BASE_URL}users/${userId}/statistics`;
  const options = {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(body)
  };

  return fetch(url, options);
};

export const getStatistics = async(): Promise<StatisticsType> => {
  const token = JSON.parse(window.localStorage.getItem('token') as string);
  const userId = JSON.parse(window.localStorage.getItem('userId') as string);

  let res = await fetch(`${BASE_URL}users/${userId}/statistics`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
    },
  });  

  if (res.status === 404) {
    res = await updateStatistics(statisticsInitial);
  }

  const data: ResponseStatisticsType = await res.json();

  if (!data.optional || data.optional.lastVisit !== new Date().getDate()) {
    const updateRes = await updateStatistics(statisticsInitial);
    const response = await updateRes.json();
    delete response.id;
    return response;
  }
  
  if (data.id) {
    delete data.id;
  }
  return data;
};