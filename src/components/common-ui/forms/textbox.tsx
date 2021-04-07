import React from 'react';
// import clsx from 'clsx';

interface TextboxProps {
  label: string;
}

const Textbox = ({ label }: TextboxProps): JSX.Element => {
  return (
    <div className="flex flex-col space-y-1">
      <div className="text-sm">{label}</div>
      <input type="textbox" className="p-1 border border-gray-500" />
    </div>
  );
};

export default Textbox;
