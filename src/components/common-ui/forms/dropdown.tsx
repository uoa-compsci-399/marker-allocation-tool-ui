import React from 'react';
// import clsx from 'clsx';

interface DropdownProps {
  label: string;
  options: string[];
}

const Dropdown = ({ label, options }: DropdownProps): JSX.Element => {
  return (
    <div className="flex flex-col space-y-1">
      <span className="text-sm text-gray-700">{label}</span>
      <select className="p-1 border border-gray-500 form-multiselect">
        {options.map((value, index) => (
          <option key={index}>{value}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
