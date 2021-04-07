import React from 'react';
// import clsx from 'clsx';

interface DateProps {
  label: string;
}

const Date = ({ label }: DateProps): JSX.Element => {
  return (
    <div className="flex flex-col space-y-1">
      <div className="text-sm">{label}</div>
      <input type="date" className="p-1 border border-gray-500" />
    </div>
  );
};

export default Date;
