import React from 'react';
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaSistrix } from 'react-icons/fa/index.esm';
import "../styles/Weather.css"
const WeatherUI = ({ data }) => {
    return (
        <div>
            <h3>{data.main ? `${data.main.temp}°F` : null}</h3>

            <div className='cardContainer'>
                <div className='Cards'>
                    <div>
                        <FaLocationCrosshairs />
                    </div>
                    <span>{data.name && data.sys ? `${data.name} (${data.sys.country})` : 'Location....'}</span>
                    <div>
                        <span>Sea Level </span>
                        <span>{data.main ? ` ${data.main?.sea_level || ""}` : null}</span>
                    </div>
                </div>

                <div className='Cards'>
                    <div>
                        <span>Humidity </span>
                        <span>{data.main ? ` ${data.main.humidity}` : null}</span>
                    </div>
                    <div>
                        <span>Weather </span>
                        <span>{data.weather ? ` ${data.weather[0].description}` : null}</span>
                    </div>
                    <div>
                        <span>Visibility </span>
                        <span>{data.visibility ? ` ${data.visibility}` : null}</span>
                    </div>
                </div>

                <div className='Cards'>
                    <div>Wind</div>
                    <div>
                        <span>Speed </span>
                        <span>{data.wind ? ` ${data.wind.speed}` : null}</span>
                    </div>
                    <div>
                        <span>Deg</span>
                        <span>{data.wind ? `${data.wind.deg}` : null}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherUI;
