import { useTypedSelector } from 'hooks/useTypedSelectors';
import { Country } from '.';

export const Countries = () => {
  const { countries } = useTypedSelector((store) => store.countries);
  return (
    <div className="container">
      <ul className="grid grid-cols-4 gap-10 list-none p-0 m-0">
        {countries.map((country) => (
          <Country key={country.cca2} country={country} />
        ))}
      </ul>
    </div>
  );
};
