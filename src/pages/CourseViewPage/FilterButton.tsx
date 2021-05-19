interface FilterButtonProps {
  title: string;
  isLast: boolean;
}

const FilterButton = ({ title, isLast }: FilterButtonProps): JSX.Element => {
  const renderButton = (title: string, isLast: boolean): JSX.Element => {
    if (isLast) {
      return (
        <div className="flex flex-col w-1/4 h-full my-auto">
          <button className="h-full my-auto text-lg font-semibold hover:bg-blue-500 hover:text-white">
            {title}
          </button>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col w-1/4 h-full my-auto border-r border-blue-500">
          <button className="h-full my-auto text-lg font-semibold hover:bg-blue-500 hover:text-white">
            {title}
          </button>
        </div>
      );
    }
  };

  return <>{renderButton(title, isLast)}</>;
};

export default FilterButton;
