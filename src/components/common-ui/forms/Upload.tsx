import { useFormikContext, ErrorMessage } from 'formik';

interface UploadProps {
  field: string;
  label: string;
}

const Upload = ({ field, label }: UploadProps): JSX.Element => {
  const { setFieldValue, getFieldMeta } = useFormikContext();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const file: any = getFieldMeta(field);
  let fileLabel = '';

  if (file.value) {
    fileLabel = file.value.name;
  }

  return (
    <div className="flex flex-col space-y-1">
      <label className="text-sm text-gray-900">{label}</label>
      <label className="flex flex-col items-center w-64 px-2 py-4 tracking-wide uppercase bg-white border border-gray-700 cursor-pointer text-blue border-blue hover:bg-blue-500 hover:text-white">
        <svg
          className="w-7 h-7"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <label className="text-center">
          {fileLabel ? `${fileLabel.substring(0, 20)}...` : <></>}
        </label>
        <input
          type="file"
          onChange={(event): void => {
            if (!event.currentTarget.files) return;
            setFieldValue(field, event.currentTarget.files[0]);
            event.target.value = '';
          }}
          accept=".doc,.docx,.pdf,.txt"
          className="hidden"
        />
      </label>
      <ErrorMessage name={field}>
        {(msg): JSX.Element => <div className="text-red-600">{msg}</div>}
      </ErrorMessage>
    </div>
  );
};

export default Upload;
