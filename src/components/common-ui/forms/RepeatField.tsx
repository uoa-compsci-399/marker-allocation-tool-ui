import { ErrorMessage, Field, FieldArray } from 'formik';
import { WorkloadDistribution } from 'models/WorkloadDistribution';

interface TextboxProps {
  name: string;
  labels: string[];
}

const RepeatField = ({ name, labels }: TextboxProps): JSX.Element => {
  return (
    <FieldArray
      name={name}
      render={(arrayHelpers): JSX.Element => (
        <div>
          {arrayHelpers.form.values.workloadDistributions.map(
            (workloadDistribution: WorkloadDistribution, index: number) => (
              <div className="grid min-w-full grid-cols-2 row-span-1 gap-x-7 gap-y-2" key={index}>
                <div className="flex flex-col space-y-1">
                  <label className="text-sm text-gray-900">{labels[0]}</label>
                  <Field
                    name={`workloadDistributions[${index}].assignment`}
                    className="p-1 border border-gray-500"
                  />
                </div>

                <div className="flex flex-col space-y-1">
                  <label className="text-sm text-gray-900">{labels[1]}</label>
                  <Field
                    name={`workloadDistributions.${index}.workload`}
                    className="p-1 border border-gray-500"
                  />
                  <ErrorMessage name={`workloadDistributions.${index}.workload`}>
                    {(msg): JSX.Element => <div className="text-red-600">{msg}</div>}
                  </ErrorMessage>
                </div>

                <div />
                <div className="my-2 justify-self-end">
                  <button
                    className="px-2 mx-1.5 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                    type="button"
                    onClick={(): void => {
                      index !== 0
                        ? arrayHelpers.remove(index)
                        : arrayHelpers.replace(index, { assignment: '', workload: '' });
                    }}
                  >
                    -
                  </button>
                  <button
                    className="px-2 mx-1.5 justify-self-end font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                    type="button"
                    onClick={(): void =>
                      arrayHelpers.insert(index + 1, { assignment: '', workload: '' })
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      )}
    />
  );
};

export default RepeatField;
