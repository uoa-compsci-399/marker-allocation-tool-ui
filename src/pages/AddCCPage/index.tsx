import { RouteComponentProps } from 'react-router';
import AddCCForm from './AddCCForm';
import { NULL_USER_ID } from 'utils/Constants';

const AddCCPage = (props: RouteComponentProps): JSX.Element => {
  const { location } = props;

  const { userID } = location.state;

  return (
    <div>
      <div className="flex flex-wrap shadow-md bg-blue-100 mb-10 p-5">
        <p className="font-semibold text-2xl text-gray-600 tracking-tight ml-4 my-4">
          {userID === NULL_USER_ID ? (
            <span>Add Course Coordinator</span>
          ) : (
            <span>Edit Course Coordinator</span>
          )}
        </p>
      </div>
      <div className="flex m-auto my-10 font-sans text-sm 3xl:max-w-screen-2xl">
        <AddCCForm userID={userID} />
      </div>
    </div>
  );
};

export default AddCCPage;
