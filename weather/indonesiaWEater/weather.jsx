import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';

const WeatherSearch = () => {
    const [weather, setWeather] = useState(null);
    const apiKey = '795d53bb8cd3e0daf1d4562a2604a475';
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast`;

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get(apiUrl, {// fetch api properties
                    params: {
                        q: 'Bali, ID', //sets the area used for api
                        appid: apiKey,
                        units: 'metric', //change to celcius
                    },
                });
                setWeather(response.data);
            } catch (error) {
                console.error('Error fetching weather:', error);
            }
        };

        fetchWeather();
    }, []);

    const changeColourBasedOfWeather = () => {
        if (!weather) return null;

        const mapColours = {
            'Clear': {
                color: 'rgb(135, 206, 250)', // Light Blue(Clear Sky)
                displayName: 'Clear Sky'
            },
            'Clouds': {
                color: 'rgb(192, 192, 192)', // Light Gray (Few Clouds & Scattered Clouds & Broken Clouds)
                displayName: 'Cloudy'
            },
            'Drizzle': {
                color: 'rgb(176, 196, 222)', // Light Steel Blue (Shower Rain)
                displayName: 'Drizzle'
            },
            'Rain': {
                color: 'rgb(70, 130, 180)', // Steel Blue (Normal Rain)
                displayName: 'Rain'
            },
            'Thunderstorm': {
                color: 'rgb(47, 79, 79)', // Dark Slate Gray (Thunderstorm)
                displayName: 'Thunderstorm'
            },
            'Snow': {
                color: 'rgb(255, 255, 255)', // White(Snow) 
                displayName: 'Snow'
            },
            'Mist': {
                color: 'rgb(224, 255, 255)', // Light Cyan (Mist)
                displayName: 'Mist'
            },
        };

        const weekData = weather.list.filter(item => {
            const date = new Date(item.dt_txt);
            return date.getHours() === 12; //set 12pm to display weather
        });

        return (
            <div className="weather-forecast">
                {weekData.map(item => {
                    const weatherCondition = item.weather[0].main;
                    const { color, displayName } = mapColours[weatherCondition] || {};
                    const backgroundColor = color || 'transparent';
                    const date = new Date(item.dt * 1000);
                    const formattedDate = date.toLocaleDateString('en-GB', {
                        day: '2-digit', //dd
                        month: 'short', //mmm
                    });
                    return (
                        <div key={item.dt} className="weather-container" style={{ backgroundColor }}>
                            <p className="weather-date">{formattedDate}</p>
                            {item.weather[0].icon && (
                                <div className="tooltip-container">
                                    <img
                                        src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                                        alt={item.weather[0].description}
                                        className="weather-icon"
                                    />
                                    <span className="tooltip-text">{displayName}</span>
                                </div>
                            )}
                            <p className="weather-temperature">{item.main.temp}°C</p>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="weather-container-wrapper">
            {changeColourBasedOfWeather()}
        </div>
    );
};

export default WeatherSearch;
