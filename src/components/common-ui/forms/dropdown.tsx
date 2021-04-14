import React from 'react';
import { Field, ErrorMessage } from 'formik';

interface DropdownProps {
  field: string;
  label: string;
  options: string[];
}

const Dropdown = ({ field, label, options }: DropdownProps): JSX.Element => {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-sm text-gray-900">{label}</label>
      <Field as="select" name={field} className="p-1 border border-gray-500 form-multiselect">
        <option value="" hidden />
        {options.map((value, index) => (
          <option key={index}>{value}</option>
        ))}
      </Field>
      <ErrorMessage name={field}>
        {(msg): JSX.Element => <div className="text-red-600">{msg}</div>}
      </ErrorMessage>
    </div>
  );
};

export default Dropdown;
