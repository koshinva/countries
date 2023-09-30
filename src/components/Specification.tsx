import { FC } from 'react';
import { ICountryData } from 'types/countryApi.types';
import { toCapitalize, transformNumber } from 'utils';

interface IProps {
  title: keyof ICountryData;
  value: string | number;
}

export const Specification: FC<IProps> = ({ title, value }) => {
  return (
    <p className="m-0">
      <strong className="mr-2 font-semibold">{toCapitalize(title)}:</strong>
      <span>{title === 'population' ? transformNumber(value as number) : value}</span>
    </p>
  );
};
