import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelectors';
import { useState } from 'react';
import { TSortBy, TSortOrder } from 'types/countriesSlice.types';
import { Icon } from 'ui/Icon';
import { SortWrapper } from 'ui/SortWrapper';

const listSortBy: TSortBy[] = ['name', 'population'];
const listSortOrder: TSortOrder[] = ['asc', 'desc'];

export const SortCountry = () => {
  const [openSortBy, setOpenSortBy] = useState(false);
  const [openSortOrder, setOpenSortOrder] = useState(false);
  const { changeSortBy, changeSortOrder, renderCountries } = useActions();
  const { sortBy, sortOrder } = useTypedSelector((store) => store.countries);

  const handleClickSortBy = (sort: TSortBy) => {
    setOpenSortBy((prev) => !prev);
    changeSortBy(sort);
    renderCountries();
  };
  const handleClickSortOrder = (sort: TSortOrder) => {
    setOpenSortOrder((prev) => !prev);
    changeSortOrder(sort);
    renderCountries();
  };

  const getClassIcon = (sort: TSortOrder) => {
    return `text-2xl ${
      sort === sortOrder ? 'fill-blue-950 dark:fill-blue-300' : 'fill-gray-400 dark:fill-white'
    }`;
  };

  return (
    <div className="flex items-center gap-4">
      <SortWrapper title="Sort By" open={openSortBy} setOpen={setOpenSortBy}>
        {listSortBy.map((sort, idx) => (
          <li
            key={idx}
            className={`px-5 py-1 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors text-left text-md ${
              sortBy === sort ? 'text-blue-950 dark:text-blue-300 font-bold' : ''
            }`}
            onClick={() => handleClickSortBy(sort)}
          >
            {sort[0].toUpperCase() + sort.slice(1)}
          </li>
        ))}
      </SortWrapper>

      <SortWrapper title="Sort Order" open={openSortOrder} setOpen={setOpenSortOrder}>
        {listSortOrder.map((sort, idx) => (
          <li
            key={idx}
            className="px-5 py-1 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors text-left text-md"
            onClick={() => handleClickSortOrder(sort)}
          >
            {sort === 'asc' ? (
              <Icon icon="HiSortAscending" className={getClassIcon(sort)} />
            ) : (
              <Icon icon="HiSortDescending" className={getClassIcon(sort)} />
            )}
          </li>
        ))}
      </SortWrapper>
    </div>
  );
};
