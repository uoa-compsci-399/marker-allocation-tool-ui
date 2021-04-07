import React from 'react';
// import clsx from 'clsx';

interface CheckBoxProps {
  label: string;
  options: string[];
}

const CheckBoxes = ({ label, options }: CheckBoxProps): JSX.Element => {
  return (
    <div className="flex flex-col space-y-3">
      <div className="text-sm">{label}</div>
      <div className="grid grid-cols-2 ">
        {options
          .filter((item, i) => i < 4) //A limit of 4 checkboxes
          .map((value, i) => {
            return (
              <div key={i} className="flex mb-3 space-x-3">
                <input type="checkbox" className="p-2.5 border border-gray-500" />
                <div className="text-sm">{value}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CheckBoxes;
