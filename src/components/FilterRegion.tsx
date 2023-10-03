import { useActions } from 'hooks/useActions';
import { useState } from 'react';
import { Region } from 'types';
import { Icon } from 'ui/Icon';

const regions: Array<Region> = [
  Region.Africa,
  Region.Americas,
  Region.Antarctic,
  Region.Asia,
  Region.Europe,
  Region.Oceania,
];

export const FilterRegion = () => {
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [region, setRegion] = useState<null | Region>(null);

  const { filterByRegion, renderCountries } = useActions();

  const handleClick = () => {
    setOpenFilter((prev) => !prev);
  };

  const handleSelect = (select: null | Region) => {
    setRegion(select);
    setOpenFilter(false);
    filterByRegion(select);
    renderCountries();
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center gap-4 w-52 p-3 bg-element theme-text shadow-md rounded-lg">
        <span className="font-medium">{region ? region : 'Filter by Region'}</span>
        <button
          className={`p-2 hover:opacity-75 transition-all duration-300 ${
            openFilter ? 'rotate-180' : ''
          }`}
          type="button"
          onClick={handleClick}
        >
          <Icon icon="FaAngleDown" fill="gray" />
        </button>
      </div>
      <ul
        className={`absolute top-[105%] left-0 w-full bg-element theme-text shadow-md rounded-lg py-4 z-10 transition-all duration-300 ${
          openFilter ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        {region ? (
          <li
            className="px-5 py-1 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors text-center text-sm"
            onClick={() => handleSelect(null)}
          >
            Reset
          </li>
        ) : null}

        {regions.map((r) => (
          <li
            className="px-5 py-1 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
            key={r}
            onClick={() => handleSelect(r)}
          >
            {r}
          </li>
        ))}
      </ul>
    </div>
  );
};
