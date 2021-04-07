import React from 'react';
// import clsx from 'clsx';

interface RadioBoxesProps {
  label: string;
}

const RadioBoxes = ({ label }: RadioBoxesProps): JSX.Element => {
  return (
    <div className="flex flex-col space-y-3">
      <div className="text-sm">{label}</div>
      <div className="flex flex-col ">
        <div className="flex mb-3 space-x-3">
          <input type="radio" className="p-2.5 border border-gray-500" />
          <div className="text-sm">Yes</div>
        </div>
        <div className="flex mb-3 space-x-3">
          <input type="radio" className="p-2.5 border border-gray-500" />
          <div className="text-sm">No</div>
        </div>
      </div>
    </div>
  );
};

export default RadioBoxes;
