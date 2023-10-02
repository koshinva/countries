import { useTypedSelector } from 'hooks/useTypedSelectors';
import { FC } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BorderCountries, NotFound, Specification } from '.';
import { Icon } from 'ui/Icon';
import { ICountryData } from 'types';

const specification: Array<keyof Omit<ICountryData, 'border countries'>> = [
  'native name',
  'population',
  'region',
  'sub region',
  'capital',
  'top level domain',
  'currencies',
  'languages',
];

export const CountryDetail: FC = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { countries } = useTypedSelector((store) => store.countries);
  const country = countries.find((c) => c.slug === slug);

  if (!country) return <NotFound />;

  return (
    <div className="mt-10">
      <div className="container">
        <button
          type="button"
          className="flex gap-2 items-center theme-text bg-element px-4 py-2 mb-10 rounded-lg shadow-md hover:opacity-75 transition-opacity"
          onClick={() => navigate(-1)}
        >
          <Icon icon="HiOutlineArrowNarrowLeft" />
          Back
        </button>

        <div className="flex gap-8 items-center justify-between">
          <div className="basis-5/12">
            <img src={country.image} alt={country.name} />
          </div>
          <div className="basis-1/2">
            <h2 className="theme-text text-3xl font-bold mb-4">{country.name}</h2>
            <div className="grid grid-cols-2 grid-rows-5-min-content grid-flow-col gap-x-4 gap-y-2 mb-6 theme-text">
              {specification.map((spec) => (
                <Specification key={spec} title={spec} value={country[spec]} />
              ))}
            </div>
            {country['border countries'] && country['border countries'].length ? (
              <BorderCountries borderCountry={country['border countries']} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
