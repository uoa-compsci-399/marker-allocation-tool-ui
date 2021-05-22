import React from 'react';
import InputField from './InputField';

const AddCCFields = (): JSX.Element => {
  return (
    <>
      <InputField field="firstName" label="First Name" />
      <InputField field="lastName" label="Last Name" />
      <InputField field="email" label="Email" />
      <InputField field="UPI" label="UPI" />
      <div className="text-center">
        <button
          type="submit"
          className=" className=w-32 h-12 bg-green-500 hover:bg-green-600 text-white text-xl font-bold py-2 px-4 rounded transition ease-in duration-200 focus:outline-none"
        >
          Add
        </button>
      </div>
    </>
  );
};

export default AddCCFields;
