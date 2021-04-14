import { Field, ErrorMessage } from 'formik';

interface DateProps {
  field: string;
  label: string;
}

const Date = ({ field, label }: DateProps): JSX.Element => {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-sm text-gray-900">{label}</label>
      <Field type="date" className="p-1 border border-gray-500" id="firstName" name={field} />
      <ErrorMessage name={field}>
        {(msg): JSX.Element => <div className="text-red-600">{msg}</div>}
      </ErrorMessage>
    </div>
  );
};

export default Date;
