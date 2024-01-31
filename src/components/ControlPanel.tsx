import { FilterRegion, SearchCountry, SortCountry } from '.';

export const ControlPanel = () => {
  return (
    <div className="container">
      <div className="flex justify-start lg:justify-between gap-4 flex-wrap">
        <SearchCountry />
        <SortCountry />
        <FilterRegion />
      </div>
    </div>
  );
};
