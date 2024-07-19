import { useState } from 'react';

const ForecastWeather = ({ forecastWeatherData }) => {
  const [state, setState] = useState(null);
  const toggle = (i) => {
    setState((prev) => (prev === i ? null : i));
  };
  const weekDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const day = new Date().getDay();
  const days = weekDays
    .slice(day, weekDays.length)
    .concat(weekDays.slice(0, day));

  return (
    <div className="my-4">
      <h3 className="text-lg font-semibold text-forecast-heading">
        Daily Weather Forecast
      </h3>
      {forecastWeatherData.list.slice(0, 7).map((day, index) => {
        return (
          <div key={index}>
            <div
              onClick={() => toggle(index)}
              className="flex items-center h-12 bg-blue-100 rounded-lg m-1 cursor-pointer py-1 px-2 sm:px-8"
            >
              <div className="h-full">
                <img
                  className="w-full h-full"
                  src={`icons/${day.weather[0].icon}.png`}
                  alt="weather"
                />
              </div>
              <div className="sm:mx-3 mx-1 font-semibold flex-grow text-left text-sm">
                {days[index]}
              </div>
              <p className="text-xs text-wrap mr-1 font-normal">
                {day.weather[0].description}
              </p>
              <p className="text-xs font-normal bg-forecast-box text-forecast-text px-2 py-1 rounded-3xl">
                {day.main.temp}
                <span className="align-top text-xs">°C</span> /{' '}
                {((day.main.temp * 9) / 5 + 32).toFixed()}
                <span className="align-top text-xs">°F</span>
              </p>
            </div>
            {state === index ? (
              <div className="transition-all duration-10000 transition-show flex items-center gap-x-4 text-sm text-left rounded-lg m-1 cursor-pointer p-2 sm:px-8 mb-2 overflow-hidden overflow-x-scroll">
                <div className="border border-white px-4 py-1 rounded-lg text-nowrap bg-forecast-box text-forecast-text">
                  <p>Feels like</p>
                  <p className="font-semibold">
                    {day.main.feels_like}
                    <span className="align-top">°C</span> /{' '}
                    {((day.main.feels_like * 9) / 5 + 32).toFixed(3)}
                    <span className="align-top">°F</span>
                  </p>
                </div>
                <div className="border border-white px-4 py-1 rounded-lg text-nowrap bg-forecast-box text-forecast-text">
                  <p>Wind Speed</p>
                  <p className="font-semibold">{day.wind.speed} m/s</p>
                </div>
                <div className="border border-white px-4 py-1 rounded-lg text-nowrap bg-forecast-box text-forecast-text">
                  <p>Humidity</p>
                  <p className="font-semibold">{day.main.humidity}%</p>
                </div>
                <div className="border border-white px-4 py-1 rounded-lg text-nowrap bg-forecast-box text-forecast-text">
                  <p>Pressure</p>
                  <p className="font-semibold">{day.main.pressure} hPa</p>
                </div>
                <div className="border border-white px-4 py-1 rounded-lg text-nowrap bg-forecast-box text-forecast-text">
                  <p>Clouds</p>
                  <p className="font-semibold">{day.clouds.all} hPa</p>
                </div>
              </div>
            ) : (
              <div className="transition-all duration-10000 transition-hide"></div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default ForecastWeather;
