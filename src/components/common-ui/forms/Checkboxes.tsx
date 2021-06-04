import { Field, ErrorMessage } from 'formik';

interface CheckBoxProps {
  field: string;
  label: string;
  options: string[];
}

const CheckBoxes = ({ field, label, options }: CheckBoxProps): JSX.Element => {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm text-gray-900">{label}</label>
      <div className="grid grid-cols-2 ">
        {options
          .filter((_item, i) => i < 4) //A limit of 4 checkboxes
          .map((value, i) => {
            return (
              <div key={i} className="flex mb-3 space-x-3">
                <Field type="checkbox" className="p-2.5 border" name={field} value={value} />
                <div className="text-sm text-gray-900">{value}</div>
              </div>
            );
          })}
      </div>
      <ErrorMessage name={field}>
        {(msg): JSX.Element => <div className="text-red-600">{msg}</div>}
      </ErrorMessage>
    </div>
  );
};

export default CheckBoxes;
