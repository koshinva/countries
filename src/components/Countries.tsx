import { useTypedSelector } from 'hooks/useTypedSelectors';

export const Countries = () => {
  const { countries } = useTypedSelector((store) => store.countries);
  return (
    <div>
      {countries.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </div>
  );
};
