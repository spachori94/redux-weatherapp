import axios from 'axios';
const API_KEY = '76496ce9f537dacc7ba442da5af9b46b';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (city){
  const url = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&q=${city},us`;
  const request = axios.get(url);
  console.log(request);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
