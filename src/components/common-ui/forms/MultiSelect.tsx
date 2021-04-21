import { ErrorMessage, useFormikContext, FieldMetaProps } from 'formik';
import Select, { Theme } from 'react-select';

interface DropdownProps {
  field: string;
  options: string[];
  label: string;
}

interface SelectOption {
  value: string;
  label: string;
}

const MultiSelect = ({ field, options, label }: DropdownProps): JSX.Element => {
  const { setFieldValue, getFieldMeta } = useFormikContext();

  const selectField: FieldMetaProps<string[]> = getFieldMeta(field);
  const selectedValues: string[] = selectField.value;

  const data = options.map((value: string) => {
    return {
      value: value,
      label: value,
    };
  });

  const handleChange = (selected: unknown): void => {
    if (Array.isArray(selected)) {
      setFieldValue(
        field,
        selected.map((x: SelectOption) => x.value)
      );
    } else {
      setFieldValue(field, []);
    }
  };

  return (
    <div className="flex flex-col space-y-1">
      <label className="text-sm text-gray-900">{label}</label>
      <Select
        isMulti
        options={data}
        value={data.filter((obj) => selectedValues.includes(obj.value))} // removes selected values
        onChange={handleChange}
        theme={(theme): Theme => ({
          ...theme,
          borderRadius: 0,
        })}
      />
      <ErrorMessage name={field}>
        {(msg): JSX.Element => <div className="text-red-600">{msg}</div>}
      </ErrorMessage>
    </div>
  );
};

export default MultiSelect;
