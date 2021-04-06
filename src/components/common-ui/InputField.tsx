import React from 'react';

interface InputFieldProps {
  isGroup?: boolean;
  type: string;
  placeholder: string;
  size: string;
}

// const renderFields = (isGroup: boolean) => {
//   if (isGroup) {
//   }
// };

const InputField = ({ isGroup, type, placeholder, size }: InputFieldProps): JSX.Element => {
  return (
    <div className={`flex flex-wrap items-stretch w-${size} mb-4 relative`}>
      <input
        type={type}
        className="flex-shrink flex-grow flex-auto leading-normal mr-4 w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
