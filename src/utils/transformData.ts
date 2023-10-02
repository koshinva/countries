import { Currencies, ICountryApi, ICountryData } from 'types/countryApi.types';
import { generateSlug } from '.';

const arrayToString = (value: string[] | undefined): string => {
  return value && value.length ? value.join(', ') : '';
};

const transformCurrencies = (crs: Currencies | undefined): string => {
  let result = '';
  if (crs && Object.keys(crs).length) {
    result = Object.values(crs)
      .map((c) => c.name)
      .join(', ');
  }
  return result;
};

const transformLanguages = (lgs: { [key: string]: string } | undefined): string => {
  let result = '';
  if (lgs && Object.keys(lgs).length) {
    result = Object.values(lgs).join(', ');
  }
  return result;
};

export const transformData = (data: ICountryApi[]): ICountryData[] => {
  let countries: ICountryData[] = [];
  const cca3ToName: { [key: string]: string } = {};

  data.forEach((d) => {
    cca3ToName[d.cca3] = d.name.common;

    countries.push({
      slug: generateSlug(d.name.common),
      name: d.name.common,
      region: d.region,
      flag: d.flag,
      population: d.population,
      capital: arrayToString(d.capital),
      image: d.flags.svg,
      'native name': d.name.official,
      'sub region': d.subregion ? d.subregion : '',
      'top level domain': arrayToString(d.tld),
      currencies: transformCurrencies(d.currencies),
      languages: transformLanguages(d.languages),
      'border countries': d.borders ? d.borders : [],
    });
  });

  countries = countries.map((c) => ({
    ...c,
    'border countries': c['border countries'].map((bc) => cca3ToName[bc]),
  }));

  return countries;
};
