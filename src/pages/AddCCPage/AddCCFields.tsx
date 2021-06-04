import InputField from './InputField';
import { NULL_USER_ID } from 'utils/Constants';
import { User } from 'models/User';

const AddCCFields = (state: User): JSX.Element => {
  return (
    <>
      <InputField field="firstName" label="First Name" />
      <InputField field="lastName" label="Last Name" />
      <InputField field="email" label="Email" />
      <InputField field="upi" label="UPI" />
      <div className="text-center">
        <button
          type="submit"
          className=" className=w-32 h-12 bg-green-500 hover:bg-green-600 text-white text-xl font-bold py-2 px-4 rounded transition ease-in duration-200 focus:outline-none"
        >
          {state.userID === NULL_USER_ID ? (
            <span>Add Coordinator</span>
          ) : (
            <span>Update Coordinator </span>
          )}
        </button>
      </div>
    </>
  );
};

export default AddCCFields;
