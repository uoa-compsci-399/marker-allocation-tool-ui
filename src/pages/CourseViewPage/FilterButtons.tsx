import React from 'react';

import FilterButton from './FilterButton';

const FilterButtons = (): JSX.Element => {
  return (
    <div className="flex flex-wrap w-10/12 h-12 border-blue-500 border-2 rounded mx-auto my-10">
      <FilterButton title="Filter By #1" isLast={false} />
      <FilterButton title="Filter By #2" isLast={false} />
      <FilterButton title="Filter By #3" isLast={false} />
      <FilterButton title="Filter By #4" isLast={true} />
    </div>
  );
};

export default FilterButtons;
