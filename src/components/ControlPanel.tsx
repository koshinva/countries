import { FilterRegion, SearchCountry } from '.';

export const ControlPanel = () => {
  return (
    <div className="">
      <div className="container">
        <div className="flex justify-between">
          <SearchCountry />
          <FilterRegion />
        </div>
      </div>
    </div>
  );
};
