import React from 'react';

const NameInputField = (): JSX.Element => {
  return (
    <div className="flex flex-wrap items-stretch w-1/4 mb-4 relative">
      <input
        type="text"
        className="flex-shrink flex-grow flex-auto leading-normal mr-4 w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow"
        placeholder="First Name"
      />
      <input
        type="text"
        className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow"
        placeholder="Last Name"
      />
    </div>
  );
};

export default NameInputField;
