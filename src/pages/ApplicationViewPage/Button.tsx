interface ButtonProps {
  statusFilter: string;
  requiredFilter: string;
  colour: string;
  colorHighlighted: string;
  setStatusFilter: any;
  label: string;
}

const Button = (data: ButtonProps): JSX.Element => {
  return (
    <button
      className={`w-32 px-4 py-2 mx-3 text-lg font-bold text-white ${
        data.statusFilter === data.requiredFilter ? data.colorHighlighted : data.colour
      } rounded-full hover:${data.colorHighlighted}`}
      onClick={(): void => data.setStatusFilter(data.requiredFilter)}
    >
      {data.label}
    </button>
  );
};

export default Button;
