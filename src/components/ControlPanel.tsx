import { FilterRegion, SearchCountry, SortCountry } from '.';

export const ControlPanel = () => {
  return (
    <div className="container">
      <div className="flex justify-between">
        <SearchCountry />
        <SortCountry />
        <FilterRegion />
      </div>
    </div>
  );
};
