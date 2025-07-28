import { useEffect, useState } from 'react'
import './Information.css'
import axios from 'axios';

function Information () {
  const [data, setData] = useState(null);

  useEffect(()=> {
    const API_KEY = '57388f5537da4cf7daca539f7fe4a995'
    const CITY = 'Seoul';
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;
    
    axios(URL)
    .then(response => {
      console.log('APIdata:',response.data)
      setData(response.data)
    })
    .catch(error => {
      console.error('날씨정보 에러:', error);
    })
  }, []);

  return (
    <>
    <div className='weather-container'>
      {data ? (
        <div className='seoul'>
          <h1>도시 이름 : {data.name}</h1>
          <p>날씨 : {data.weather[0].main}</p>
          <p>날씨 설명 : {data.weather[0].description}</p>
          <p>풍향 : {data.wind.deg}</p>
          <p>풍속 : {data.wind.speed}</p>
        </div>
      ) : (
        <p>날씨 정보 불러오는 중...</p>
      )}
    </div>
    </>
  )
}

export default Information