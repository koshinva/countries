import { FC } from 'react';
import { Link } from 'react-router-dom';
import { generateSlug } from 'utils';

interface IProps {
  borderCountry: string[];
}

export const BorderCountries: FC<IProps> = ({ borderCountry }) => {
  return (
    <div className="flex items-center gap-6">
      <strong className="theme-text inline-block min-w-max">Border Countries:</strong>
      <ul className="flex flex-wrap gap-2">
        {borderCountry.map((country) => (
          <li key={country}>
            <Link
              className="inline-block px-4 py-2 border bg-element rounded-lg theme-text hover:opacity-75 transition-opacity"
              to={`../${generateSlug(country)}`}
              relative="path"
            >
              {country}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
