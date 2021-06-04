const NameInputField = (): JSX.Element => {
  return (
    <div className="relative flex flex-wrap items-stretch w-1/4 mb-4">
      <input
        type="text"
        className="relative flex-auto flex-grow flex-shrink w-px h-10 px-3 mr-4 leading-normal border rounded rounded-l-none border-grey-light focus:border-blue focus:shadow"
        placeholder="First Name"
      />
      <input
        type="text"
        className="relative flex-auto flex-grow flex-shrink w-px h-10 px-3 leading-normal border rounded rounded-l-none border-grey-light focus:border-blue focus:shadow"
        placeholder="Last Name"
      />
    </div>
  );
};

export default NameInputField;
