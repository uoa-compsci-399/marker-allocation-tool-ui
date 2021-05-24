import { useHistory } from 'react-router-dom';
import { FormApplication } from 'models/FormApplication';

const Application = ({
  courseID,
  courseName,
  applicantName,
  applicationID,
}: FormApplication): JSX.Element => {
  const history = useHistory();
  return (
    <div className="w-7/12 h-full py-4 mx-auto my-5 overflow-auto bg-white border-2 rounded shadow-md">
      <div className="md:flex">
        <p
          className="w-full my-2 text-2xl font-medium text-center cursor-pointer hover:text-blue-600"
          onClick={(): void => {
            history.push(`/courses/${courseID}/applications/${applicationID}`);
          }}
        >
          {applicantName}
        </p>
      </div>
      <div className="justify-between my-4 md:flex">
        <div className="my-4 text-lg text-left ml-28">{applicationID}</div>
        <div>
          <div className="mx-12 text-right text-gray-600 md:text-sm">{`${courseName}`}</div>
        </div>
      </div>
    </div>
  );
};

export default Application;
