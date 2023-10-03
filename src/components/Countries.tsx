import { useState } from 'react';
import { useTypedSelector } from 'hooks/useTypedSelectors';
import { Country } from '.';

export const Countries = () => {
  const { displayedCountries: countries } = useTypedSelector((store) => store.countries);
  const [limit, setLimit] = useState<number>(12);

  const handleClickMore = () => {
    setLimit((prev) => prev + 8);
  };

  return (
    <div className="container">
      <ul className="grid grid-cols-4 gap-10 list-none p-0 m-0">
        {countries.slice(0, limit).map((country) => (
          <Country key={country.name} country={country} />
        ))}
      </ul>
      {limit <= countries.length ? (
        <button
          type="button"
          onClick={handleClickMore}
          className="block py-4 px-12 border mt-6 mx-auto rounded-md theme-text-invert bg-element-invert hover:opacity-75 transition-opacity text-lg font-semibold"
        >
          More
        </button>
      ) : (
        ''
      )}
    </div>
  );
};
