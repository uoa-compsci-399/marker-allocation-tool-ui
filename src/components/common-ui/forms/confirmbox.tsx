import { useField, ErrorMessage } from 'formik';

interface ConfirmProps {
  field: string;
  label: string;
  terms: string;
}

const ConfirmBox = ({ field, label, terms }: ConfirmProps): JSX.Element => {
  const [value] = useField(field);

  return (
    <div className="flex flex-col space-y-1">
      <label className="text-lg font-bold text-gray-900">{label}</label>
      <div className="flex mb-3 space-x-3">
        <input type="checkbox" className="p-2.5 border" {...value} />
        <div className="text-sm text-gray-900">{terms}</div>
      </div>
      <ErrorMessage name={field}>
        {(msg): JSX.Element => <div className="text-red-600">{msg}</div>}
      </ErrorMessage>
    </div>
  );
};

export default ConfirmBox;
