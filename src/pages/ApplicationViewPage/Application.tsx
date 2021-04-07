import React from 'react';

interface ApplicationProps {
  title: string;
  date: string;
  applicantName: string;
}

const Application = ({ title, date, applicantName }: ApplicationProps): JSX.Element => {
  return (
    <div className="w-5/6 h-full  overflow-auto bg-white mx-auto rounded shadow-md border-gray-400 border my-5 py-4">
      <div className="md:flex">
        <a href="/" className="w-full text-center text-2xl my-2 font-medium hover:text-blue-600">
          {title}
        </a>
      </div>
      {/* <div className="border-t w-full"></div> */}
      <div className="md:flex justify-between my-4">
        <div className="text-left text-xl ml-28">{applicantName}</div>
        <div className="text-right text-lg mr-28">{date}</div>
      </div>
    </div>
  );
};

export default Application;
