import React from 'react';
import { Link } from 'react-router-dom';

interface DashBoardCardProps {
  path: string;
  title: string;
  body: string;
  imgURL: string;
}

const DashBoardCard = ({ path, title, body, imgURL }: DashBoardCardProps): JSX.Element => {
  return (
    <Link to={path}>
      <div className="bg-white rounded overflow-auto shadow-md relative border-2 mx-4 my-6 hover:opacity-50">
        <img src={imgURL} className="w-full h-32 sm:h-48 object-cover" alt="" />
        <div className="m-4">
          <span className="font-bold">{title}</span>
          <span className="block text-gray-500 text-sm">{body}</span>
        </div>
      </div>
    </Link>
  );
};

export default DashBoardCard;
