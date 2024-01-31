import { useState } from 'react';
import { useTypedSelector } from 'hooks/useTypedSelectors';
import { Country } from '.';
import { Loader } from 'ui/Loader';

export const Countries = () => {
  const { displayedCountries: countries, isLoading } = useTypedSelector((store) => store.countries);
  const [limit, setLimit] = useState<number>(12);

  const handleClickMore = () => {
    setLimit((prev) => prev + 8);
  };

  if (isLoading)
    return (
      <div className="container">
        <div className="grid place-content-center h-screen">
          <Loader />
        </div>
      </div>
    );

  return (
    <div className="container">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 list-none p-0 m-0">
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
