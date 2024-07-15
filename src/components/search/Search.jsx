import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { geoApiOptions, GEO_API_URL } from '../../api';

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  const handleOnChange = (event) => {
    const searchData = event.target.value;
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const handleLoadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `${GEO_API_URL}?namePrefix=${inputValue}`,
        geoApiOptions
      );
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AsyncPaginate
      placeholder="Search for city..."
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={handleLoadOptions}
    />
  );
};
export default Search;
