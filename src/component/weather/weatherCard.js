import React, { useEffect, useState } from 'react'

const WeatherCard = ({myNewWeather}) => {

    const date = new Date(myNewWeather.sunset * 1000);
    
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let newformat = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const sunset = hours + ':' + minutes + ' ' + newformat;

    const weatherMood = myNewWeather.weatherMood;
    const [weatherIconClass, setWeatherIconClass] = useState("");
    useEffect(() => {
        if(weatherMood) {
            console.log(weatherMood);
            switch(weatherMood) {
                case "Clouds":
                    setWeatherIconClass("wi-day-cloudy");
                    break;
                case "Haze":
                    setWeatherIconClass("wi-fog");
                    break;
                case "Clear":
                    setWeatherIconClass("wi-day-sunny");
                    break;
                case "Rain":
                    setWeatherIconClass("wi-day-rain");
                    break;

                default: break;
            }
        }
        console.log(weatherIconClass);
    }, [weatherMood]) 

    return (
        <>
            <article className='widget'>
                <div className='weatherIcon'>
                    <i className={`wi ${weatherIconClass}`}> </i>
                </div>
                <div className='weatherInfo'>
                    <div className='temperature'>
                        <span>{myNewWeather.temp}&deg;</span>
                    </div>
                    <div className='description'>
                        <div className='weatherCondition'>{myNewWeather.weatherMood}</div>
                        <div className='place'>{myNewWeather.name}, {myNewWeather.country}</div>
                    </div>
                </div>
                <div className='date'>{new Date().toLocaleString()}</div>

                {/* Our 4 column section */}
                <div className='extra-temp'>
                    <div className='temp-info-minmax'>
                        <div className='two-sided-section'>
                            <p>
                                <i className={"wi wi-sunset"}></i>
                            </p>
                            <p className='extra-info-leftside'>
                                {sunset} <br />
                                Sunset
                            </p>
                        </div>
                        <div className='two-sided-section'>
                            <p>
                                <i className={"wi wi-humidity"}></i>
                            </p>
                            <p className='extra-info-leftside'>
                                {myNewWeather.humidity} %<br />
                                Humidity
                            </p>
                        </div>
                    </div>
                    <div className='weather-extra-info'>
                        <div className='two-sided-section'>
                            <p>
                                <i className={"wi wi-rain"}></i>
                            </p>
                            <p className='extra-info-leftside'>
                                {myNewWeather.pressure} Pa<br />
                                Pressure
                            </p>
                        </div>
                        <div className='two-sided-section'>
                            <p>
                                <i className={"wi wi-strong-wind"}></i>
                            </p>
                            <p className='extra-info-leftside'>
                                {myNewWeather.speed} Km/h<br />
                                Wind
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default WeatherCard