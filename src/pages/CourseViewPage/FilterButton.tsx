import React from 'react';

interface FilterButtonProps {
  title: string;
  isLast: boolean;
}

const FilterButton = ({ title, isLast }: FilterButtonProps): JSX.Element => {
  const renderButton = (title: string, isLast: boolean): JSX.Element => {
    if (isLast) {
      return (
        <div className="flex flex-col w-1/4 h-full my-auto">
          <button className="h-full my-auto hover:bg-blue-500 hover:text-white font-semibold text-lg">
            {title}
          </button>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col w-1/4 h-full my-auto border-blue-500 border-r">
          <button className="h-full my-auto hover:bg-blue-500 hover:text-white font-semibold text-lg">
            {title}
          </button>
        </div>
      );
    }
  };

  return <>{renderButton(title, isLast)}</>;
};

export default FilterButton;
