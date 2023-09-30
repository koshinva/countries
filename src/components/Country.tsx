import { FC } from 'react';
import { ICountryData } from 'types/countryApi.types';
import { Specification } from '.';

interface IProps {
  country: ICountryData;
}

const specification: Array<keyof ICountryData> = ['population', 'region', 'capital'];

export const Country: FC<IProps> = ({ country }) => {
  return (
    <li className="flex flex-col rounded-xl shadow-lg bg-element min-h-[400px] overflow-hidden">
      <div className="h-1/2 flex justify-center items-center">
        <img
          src={`https://flagcdn.com/${country.cca2}.svg`}
          width="100%"
          alt={country.name}
          className="h-full object-cover shadow-md"
        />
      </div>
      <div className="theme-text px-4 py-6">
        <h2 className="mb-4 text-xl font-bold">{country.name}</h2>
        <div className="flex flex-col gap-2">
          {specification.map((spec) => (
            <Specification key={spec} title={spec} value={country[spec]} />
          ))}
        </div>
      </div>
    </li>
  );
};
