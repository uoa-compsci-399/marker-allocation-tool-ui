import React from 'react';
import { ErrorMessage, Field } from 'formik';

interface InputFieldProps {
  field: string;
  label: string;
}

const InputField = ({ field, label }: InputFieldProps): JSX.Element => {
  return (
    <div className="flex flex-col space-y-1 mb-3">
      <label className="text-lg text-gray-900">{label}: </label>
      <Field className="p-2 border-2 rounded-md" id={field} name={field} label={label} />
      <ErrorMessage name={field}>
        {(msg): JSX.Element => <div className="text-red-600">{msg}</div>}
      </ErrorMessage>
    </div>
  );
};

export default InputField;
