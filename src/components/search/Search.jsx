import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { geoApiOptions, GEO_API_URL } from '../../api';

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const handleLoadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `${GEO_API_URL}?namePrefix=${inputValue}`,
        geoApiOptions
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const result = await response.json();
      return {
        options: result.data.map((location) => {
          return {
            label: `${location.name}, ${location.country}`,
            value: `${location.latitude} ${location.longitude}`,
          };
        }),
      };
    } catch (error) {
      console.error(error);
      return [];
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
