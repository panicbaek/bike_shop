import { useEffect, useState } from 'react'
import './Information.css'
import axios from 'axios';

function Information () {
  const [data, setData] = useState(null);

  useEffect(()=> {
    const API_KEY = '57388f5537da4cf7daca539f7fe4a995'
    const CITY = 'Seoul';
    const URL = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}'

    axios(URL)
    .then(response => {
      console.log(response.data)
      setData(response.data)
    })
  })
  return (
    <>
    </>
  )
}

export default Information