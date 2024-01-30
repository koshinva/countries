export const toCapitalize = (value: string): string => {
  return value
    .split(' ')
    .map((v) => v[0].toUpperCase() + v.slice(1).toLowerCase())
    .join(' ');
};

export const transformNumber = (value: number): string => {
  return new Intl.NumberFormat('en-GB').format(value);
};

export const generateSlug = (nameCountry: string): string => {
  return nameCountry.toLowerCase().replaceAll(/\s+/g, '-');
};
