import React from 'react';
// import { Link } from 'react-router-dom';

import DashBoardCard from './DashBoardCard';

const imgURLs = {
  courses:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMOdyxB8r2jBbJ0QdBrUAMAA-J1NT2NHckcg&usqp=CAU',
  apply:
    'https://uploads-ssl.webflow.com/5a9423a3f702750001758d4f/5c473d17f83b6b98c0a3d449_Canary%20Yellow.png',
  applcations:
    'https://images.saymedia-content.com/.image/t_share/MTc1MDA5Njg3NTA1Njc2MDc1/shades-green-greensleeves.jpg',
  appTable:
    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2017%2F05%2Fblue0517.jpg&q=85',
};

const DashBoardViewPage = (): JSX.Element => {
  return (
    <div>
      <div className="flex flex-wrap shadow-md bg-blue-100 mb-10 p-5">
        <p className="font-semibold text-2xl text-gray-600 tracking-tight ml-4 my-4">DashBoard</p>
      </div>

      <div className="mt-8 grid lg:grid-cols-4">
        <DashBoardCard
          path="/courses"
          title="Manage Courses"
          body="Something"
          imgURL={imgURLs.courses}
        />
        <DashBoardCard
          path="/manage-markers"
          title="Manage Markers"
          body="Something"
          imgURL={imgURLs.apply}
        />
        <DashBoardCard
          path="/saved-applications"
          title="View Applications"
          body="Something"
          imgURL={imgURLs.applcations}
        />
        <DashBoardCard
          path="/manage-course-coordinators"
          title="Manage Course Coordinators"
          body="Something"
          imgURL={imgURLs.appTable}
        />
      </div>
    </div>
  );
};

export default DashBoardViewPage;
