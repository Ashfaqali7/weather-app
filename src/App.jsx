import { useState, useEffect } from 'react'
import { FaSistrix } from 'react-icons/fa/index.esm';
import { FaLocationCrosshairs } from "react-icons/fa6";

import axios from 'axios';
import './App.css'
import WeatherUI from './Components/Weather';

function App() {
  const [location, setLocation] = useState("karachi")
  const [data, setData] = useState("")
  const apiKey = "683d44af0c9f0609208060083fb42e9d";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`
  const getWeather = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getWeather()

    return () => {

    }
  }, [])

  return (
    <>
      <div className='Body'>
        <div className='SearchContainer'>
          <input placeholder='Enter Your Location Name' value={location} onChange={(e) => setLocation(e.target.value)} />
          <FaSistrix className='icon' onClick={getWeather} />
        </div>

        <WeatherUI data={data} />
      </div>
    </>
  )
}

export default App
