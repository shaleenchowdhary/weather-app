const CurrentWeather = ({ currentWeatherData }) => {
  return (
    <div
      id="weather"
      className="mt-5 px-4 w-full sm:w-fit mx-auto rounded-lg border border-blue-600 shadow-custom-shadow text-white bg-slate-600"
    >
      <div className="flex justify-between items-center gap-x-4 text-left py-4">
        <div>
          <p id="city" className="text-lg leading-tight">
            {currentWeatherData.location}
          </p>
          <p className="text-xs">{currentWeatherData.weather[0].description}</p>
        </div>
        <h1 className="text-2xl">
          {currentWeatherData.main.temp}
          <span className="align-top text-2xl">°C</span> /
          {((currentWeatherData.main.temp * 9) / 5 + 32).toFixed()}
          <span className="align-top text-2xl">°F</span>
        </h1>
      </div>

      <div className="flex justify-evenly items-center gap-x-4 pb-4">
        <img
          src={`icons/${currentWeatherData.weather[0].icon}.png`}
          alt="weather"
        />
        <div className="text-xs text-left">
          <div className="flex sm:flex-row gap-y-4 gap-x-4 flex-col">
            <div className="border-2 border-slate-200 px-4 py-1 rounded-lg">
              <p>Feels like</p>
              <p className="font-semibold">
                {currentWeatherData.main.feels_like}
                <span className="align-top">°C</span> /{' '}
                {((currentWeatherData.main.feels_like * 9) / 5 + 32).toFixed(3)}
                <span className="align-top">°F</span>
              </p>
            </div>
            <div className="border-2 border-slate-200 px-4 py-1 rounded-lg">
              <p>Wind Speed</p>
              <p className="font-semibold">
                {currentWeatherData.wind.speed} m/s
              </p>
            </div>
            <div className="border-2 border-slate-200 px-4 py-1 rounded-lg">
              <p>Humidity</p>
              <p className="font-semibold">
                {currentWeatherData.main.humidity}%
              </p>
            </div>
            <div className="border-2 border-slate-200 px-4 py-1 rounded-lg">
              <p>Pressure</p>
              <p className="font-semibold">
                {currentWeatherData.main.pressure} hPa
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CurrentWeather;
