import { Field, ErrorMessage } from 'formik';

interface RadioBoxesProps {
  field: string;
  label: string;
}

const RadioBoxes = ({ field, label }: RadioBoxesProps): JSX.Element => {
  return (
    <div className="flex flex-col space-y-3">
      <label className="text-sm text-gray-900">{label}</label>
      <div className="flex flex-col ">
        <div className="flex mb-3 space-x-3">
          <Field
            type="radio"
            name={field}
            value="Yes"
            className="form-radio p-2.5 border border-gray-500"
          />
          <div className="text-sm">Yes</div>
        </div>
        <div className="flex mb-3 space-x-3">
          <Field
            type="radio"
            name={field}
            value="No"
            className="form-radio p-2.5 border border-gray-500"
          />
          <div className="text-sm">No</div>
        </div>
        <ErrorMessage name={field}>
          {(msg): JSX.Element => <div className="text-red-600">{msg}</div>}
        </ErrorMessage>
      </div>
    </div>
  );
};

export default RadioBoxes;
