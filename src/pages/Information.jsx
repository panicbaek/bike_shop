import { useEffect, useState } from 'react';
import './Information.css';
import axios from 'axios';

function Information() {
  const [data, setData] = useState([]);
  const [cityNum, setCityNum] = useState(1,2,3,4,5,6,7,8);

  useEffect(() => {
    const API_KEY = '57388f5537da4cf7daca539f7fe4a995';
    const CITY = ["Seoul", "Busan", "Daejeon", "Gwangju", "Ulsan", "Jeju", "Gangneung", "Daegu"];

    CITY.forEach(city => {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=kr`;

      axios(URL)
        .then(response => {
          setData(prevData => [...prevData, response.data]);
        })
        .catch(error => {
          console.error(`${city} 날씨정보 에러:`, error);
        });
    });
  }, []);
  return (
    <div className='weather-container'>
      <div className='korea-map'>
        <img
          src="https://image.utoimage.com/preview/cp926996/2021/01/202101012649_800.jpg"
          alt="지도이미지"
        />
      <div className='citys'>
        {data.length === 0 ? (
          <p>날씨 정보 불러오는 중...</p>
        ) : (
          data.map((cityData, index) => (
            <div className={`cityname${cityData.name}`} key={index}>
              <h6>도시: {cityData.name}</h6>
              <p>날씨: {cityData.weather[0].main}</p>
              <p>설명: {cityData.weather[0].description}</p>
              <p>풍향: {cityData.wind.deg}°</p>
              <p>풍속: {cityData.wind.speed} m/s</p>
            </div>
          ))
        )}
        </div>
      </div>
    </div>
  );
}

export default Information;
