import { FC } from 'react';
import { ICountryData } from 'types/countryApi.types';
import { Specification } from '.';
import { Link } from 'react-router-dom';

interface IProps {
  country: ICountryData;
}

const specification: Array<keyof Omit<ICountryData, 'border countries'>> = [
  'population',
  'region',
  'capital',
];

export const Country: FC<IProps> = ({ country }) => {
  return (
    <li>
      <Link
        to={`/country/${country.slug}`}
        className="flex flex-col rounded-xl shadow-lg bg-element min-h-[400px] overflow-hidden hover:opacity-75 transition-opacity"
      >

        <div className="h-auto md:h-[250px] lg:h-[200px]">
          <img
            src={country.image}
            width="100%"
            height={200}
            alt={country.name}
            className="h-full object-cover shadow-md"
          />
        </div>

        <div className="theme-text px-4 py-6">
          <h2 className="mb-2 sm:mb-4 text-lg sm:text-xl font-bold">{country.name}</h2>
          <div className="flex flex-col gap-2">
            {specification.map((spec) => (
              <Specification key={spec} title={spec} value={country[spec]} />
            ))}
          </div>
        </div>

      </Link>
    </li>
  );
};
