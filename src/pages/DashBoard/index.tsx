import React from 'react';
import { Link } from 'react-router-dom';

const DashBoardViewPage = (): JSX.Element => {
  return (
    <div>
      <div className="flex flex-wrap shadow-md bg-blue-100 mb-10 p-5">
        <p className="font-semibold text-2xl text-gray-600 tracking-tight ml-4 my-4">DashBoard</p>
      </div>

      <div className="mt-8 grid lg:grid-cols-4">
        <Link
          to={{
            pathname: `/courses`,
          }}
        >
          <div className="dashCard">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMOdyxB8r2jBbJ0QdBrUAMAA-J1NT2NHckcg&usqp=CAU"
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="m-4">
              <span className="font-bold"> Manage Courses </span>
              <span className="block text-gray-500 text-sm"> Something </span>
            </div>
          </div>
        </Link>

        <Link
          to={{
            pathname: `/apply`,
          }}
        >
          <div className="dashCard">
            <img
              src="https://uploads-ssl.webflow.com/5a9423a3f702750001758d4f/5c473d17f83b6b98c0a3d449_Canary%20Yellow.png"
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="m-4">
              <span className="font-bold"> Manage Markers </span>
              <span className="block text-gray-500 text-sm"> Something </span>
            </div>
          </div>
        </Link>

        <Link
          to={{
            pathname: `/application`,
          }}
        >
          <div className="dashCard">
            <img
              src="https://images.saymedia-content.com/.image/t_share/MTc1MDA5Njg3NTA1Njc2MDc1/shades-green-greensleeves.jpg"
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="m-4">
              <span className="font-bold"> View Applicants </span>
              <span className="block text-gray-500 text-sm"> Something </span>
            </div>
          </div>
        </Link>

        <Link
          to={{
            pathname: `/apptable`,
          }}
        >
          <div className="dashCard">
            <img
              src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2017%2F05%2Fblue0517.jpg&q=85"
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="m-4">
              <span className="font-bold"> Manage Course Coordinators </span>
              <span className="block text-gray-500 text-sm"> Something </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DashBoardViewPage;
