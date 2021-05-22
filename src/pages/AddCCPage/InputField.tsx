import React from 'react';
import { ErrorMessage, Field } from 'formik';

interface InputFieldProps {
  field: string;
  label: string;
}

const InputField = ({ field, label }: InputFieldProps): JSX.Element => {
  return (
    <div className="justify-center text-center my-8 flex">
      <label className="w-12 text-xl mr-20">{label}: </label>
      <Field className="w-1/4 h-12 border-2 rounded-md" id={field} name={field} label={label} />
      <ErrorMessage name={field}>
        {(msg): JSX.Element => <div className="text-red-600">{msg}</div>}
      </ErrorMessage>
    </div>
  );
};

export default InputField;
