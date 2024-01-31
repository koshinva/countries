import { ChangeEvent, useEffect, useState } from 'react';
import { useActions } from 'hooks/useActions';
import { useDebounce } from 'hooks/useDebounce';
import { Icon } from 'ui/Icon';

export const SearchCountry = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce<string>(searchQuery);
  const { searchCountry, renderCountries } = useActions();

  useEffect(() => {
    searchCountry(debouncedSearchQuery);
    renderCountries();
  }, [debouncedSearchQuery, renderCountries, searchCountry]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchCountry(searchQuery);
    renderCountries();
  };

  return (
    <form
      className="bg-element theme-text px-6 py-2 flex items-center gap-3 shadow-md rounded-lg basis-full lg:basis-1/3"
      onSubmit={handleSubmit}
    >
      <button className="text-xl theme-text" type="submit">
        <Icon icon="BiSearchAlt2" fill="gray" />
      </button>
      <input
        className="bg-transparent w-full outline-none px-2 py-1 placeholder:text-sm"
        type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Search for a country..."
      />
    </form>
  );
};
