interface ButtonProps {
  statusFilter: string;
  requiredFilter: string;
  colour: string;
  setStatusFilter: any;
  label: string;
}

const Button = (data: ButtonProps): JSX.Element => {
  return (
    <button
      className={`w-32 px-4 py-2 mx-3 text-lg font-bold text-white ${
        data.statusFilter === data.requiredFilter
          ? `bg-${data.colour}-600`
          : `bg-${data.colour}-300`
      } rounded-full hover:bg-${data.colour}-600`}
      onClick={(): void => data.setStatusFilter(data.requiredFilter)}
    >
      {data.label}
    </button>
  );
};

export default Button;
