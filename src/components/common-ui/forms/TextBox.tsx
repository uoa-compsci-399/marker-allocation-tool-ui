import { ErrorMessage, Field } from 'formik';

interface TextboxProps {
  field: string;
  label: string;
  placeholder?: string;
}

const Textbox = ({ field, label, placeholder }: TextboxProps): JSX.Element => {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-sm text-gray-900">{label}</label>
      <Field
        className="p-1 border border-gray-500"
        type="textbox"
        id="firstName"
        name={field}
        placeholder={placeholder}
      />
      <ErrorMessage name={field}>
        {(msg): JSX.Element => <div className="text-red-600">{msg}</div>}
      </ErrorMessage>
    </div>
  );
};

export default Textbox;
