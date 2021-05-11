import React from 'react';
import { useHistory } from 'react-router-dom';
import { FormApplication } from '../../models/FormApplication';

const SavedApplication = ({
  courseID,
  title,
  date,
  applicantName,
  applicationID,
}: FormApplication): JSX.Element => {
  const history = useHistory();
  return (
    <div className="w-7/12 h-full overflow-auto bg-white mx-auto rounded shadow-md border-2 my-5 py-4">
      <div className="md:flex">
        <p
          className="w-full text-center text-2xl my-2 font-medium hover:text-blue-600 cursor-pointer"
          onClick={(): void => {
            history.push(`/courses/${courseID}/applications/${applicationID}`);
          }}
        >
          {applicantName}
        </p>
      </div>
      <div className="md:flex justify-between my-4">
        <div className="text-left text-lg ml-28 my-4">{applicationID}</div>
        <div>
          <div className="mx-12 font-semibold text-lg my-4">
            Date Submitted: <span className="font-medium">{date}</span>
          </div>
          <div className="mx-12 text-right md:text-sm text-gray-600">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default SavedApplication;
