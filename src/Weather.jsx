import Search from './components/search/Search';

const Weather = () => {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };
  return (
    <div className="w-4/5 my-5 mx-auto">
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
};
export default Weather;
