interface InputFieldProps {
  isGroup?: boolean;
  type: string;
  placeholder: string;
  size: string;
}

// const renderFields = (isGroup: boolean) => {
//   if (isGroup) {
//   }
// };

const InputField = ({ isGroup, type, placeholder, size }: InputFieldProps): JSX.Element => {
  return (
    <div className={`flex flex-wrap items-stretch w-${size} mb-4 relative`}>
      <input
        type={type}
        className="relative flex-auto flex-grow flex-shrink w-px h-10 px-3 mr-4 leading-normal border rounded rounded-l-none border-grey-light focus:border-blue focus:shadow"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
