import { useState } from 'react';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import CurrentWeather from './components/current-weather/CurrentWeather';
import Search from './components/search/Search';
// import ForecastWeather from './components/forecast-weather/ForecastWeather';

const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState('');
  const [forecastWeather, setforecastWeather] = useState('');

  const handleOnSearchChange = async (searchData) => {
    const [latitude, longitude] = searchData.value.split(' ');
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastWeatherFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );

    try {
      const [current, forecast] = await Promise.all([
        currentWeatherFetch,
        forecastWeatherFetch,
      ]);
      const currentWeatherResponse = await current.json();
      const forecastWeatherResponse = await forecast.json();
      setCurrentWeather({
        location: searchData.label,
        ...currentWeatherResponse,
      });
      setforecastWeather({
        location: searchData.label,
        ...forecastWeatherResponse,
      });
    } catch (error) {
      console.error('Error Fetching Data: ', error);
    }
  };
  console.log(currentWeather);
  console.log(forecastWeather);

  return (
    <div className="w-4/5 my-5 mx-auto">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather currentWeatherData={currentWeather} />}
      {/* <ForecastWeather /> */}
    </div>
  );
};
export default Weather;
