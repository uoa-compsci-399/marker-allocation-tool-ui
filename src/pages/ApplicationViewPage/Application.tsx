import React from 'react';
import { useHistory } from 'react-router-dom';
import { FormApplication } from '../../models/FormApplication';

const Application = ({
  title,
  date,
  applicantName,
  applicationID,
}: FormApplication): JSX.Element => {
  const history = useHistory();
  return (
    <div className="w-5/6 h-full  overflow-auto bg-white mx-auto rounded shadow-md border-gray-400 border my-5 py-4">
      <div className="md:flex">
        <p
          className="w-full text-center text-2xl my-2 font-medium hover:text-blue-600 cursor-pointer"
          onClick={(): void => {
            history.push(`/applications/${applicationID}`);
          }}
        >
          {title}
        </p>
      </div>
      {/* <div className="border-t w-full"></div> */}
      <div className="md:flex justify-between my-4">
        <div className="text-left text-lg ml-28">{applicationID}</div>
        <div className="text-left text-xl">{applicantName}</div>
        <div className="text-right text-lg mr-28">{date}</div>
      </div>
    </div>
  );
};

export default Application;
