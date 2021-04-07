import React from 'react';

interface ApplicationProps {
  title: string;
  date: string;
}

const Application = ({ title, date }: ApplicationProps): JSX.Element => {
  return (
    <div className="w-5/6 h-full overflow-auto bg-white mx-auto rounded shadow-md border-gray-400 border-2 my-5">
      <div className="md:flex">
        <a
          href="/"
          className="w-full block text-center text-2xl font-medium leading-tight text-black hover:underline"
        >
          {title}
        </a>
        <div className="text-s mr-4">{date}</div>
      </div>
    </div>
  );
};

export default Application;
