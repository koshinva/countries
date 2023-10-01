import { useTypedSelector } from 'hooks/useTypedSelectors';
import { FC } from 'react';
import { useParams } from 'react-router-dom';

export const CountryDetail: FC = () => {
  const { slug } = useParams();
  const { countries } = useTypedSelector((store) => store.countries);
  const country = countries.find((c) => c.slug === slug);

  return !country ? <p>Not Found</p> : <p>{country['native name']}</p>;
};
