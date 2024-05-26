import React, { useEffect, useState } from 'react';
import './style.css';
import WeatherCard from './weatherCard';

// https://api.openweathermap.org/data/2.5/weather?q=pune&appid=3d09616389e52d31265d7aa830735577


const Temp = () => {
    const [searchValue, setSearchValue] = useState("pune");
    const [weatherInfo, setWeatherInfo] = useState({});
    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=3d09616389e52d31265d7aa830735577`;
            const res = await fetch(url);
            const data = await res.json();
            const {humidity, temp, pressure} = data.main;
            const {speed} = data.wind;
            const {main: weatherMood} = data.weather[0];
            const {name} = data;
            const {country, sunset} = data.sys;
            const myNewWeather = {
                humidity,
                temp,
                pressure,
                speed,
                weatherMood,
                name,
                country,
                sunset
            }
            setWeatherInfo(myNewWeather);
        }
        catch(error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getWeatherInfo();
    }, []);
    return (
        <>
            <div className='wrap'>
                <div className='search'>
                    <input
                        type='search'
                        placeholder='Enter city name...'
                        autoFocus
                        id='search'
                        className='searchTerm'
                        value={searchValue}
                        onChange={(event) => setSearchValue(event.target.value)}
                    />
                    <button
                        className='searchButton'
                        type='button'
                        onClick={getWeatherInfo}
                    >Search</button>
                </div>
            </div>
            <WeatherCard myNewWeather={weatherInfo} ></WeatherCard>
        </>
    )
}

export default Temp