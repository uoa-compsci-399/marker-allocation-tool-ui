import React from 'react';

import Application from './Application';
import { FormApplication, FormApplication as ApplicationType } from '../../models/FormApplication';
import { CourseData } from '../../models/CourseData';

//TODO: Send GET request to get a list applications for that course
const applicantDetails = (id: string): FormApplication[] => {
  return [
    {
      title: '399 Application #1',
      date: '11/04/21',
      applicantName: 'Songyan Teng',
      applicationID: '2456879',
    },
    {
      title: '399 Application #2',
      date: '08/04/21',
      applicantName: 'Isaac Kaabel',
      applicationID: '1234567',
    },
    {
      title: '358 Application #3',
      date: '05/04/21',
      applicantName: 'Darren Chen',
      applicationID: '5968745',
    },
  ];
};

//TODO: Get data using props from routes
const CourseDetail = (routeData: CourseData): JSX.Element => {
  const { courseCoord, courseId, courseName, semester, availableSpots, maxSpots } = {
    courseCoord: 'Asma Shakil',
    courseId: 'cs399',
    courseName: 'COMPSCI 399',
    semester: 'Semester 1, 2021',
    availableSpots: '7',
    maxSpots: '10',
  };

  const renderMarkers = (): JSX.Element => {
    return (
      <p
        className="font-semibold text-blue-800 text-2xl my-8 cursor-pointer"
        onClick={(): void => {
          //TODO: Query current markers from DB and show in a modal
        }}
      >
        View Current Markers
      </p>
    );
  };

  const renderApplications = applicantDetails(courseId).map((application: ApplicationType) => {
    const { title, date, applicantName, applicationID } = application;
    return (
      <Application
        title={title}
        date={date}
        applicantName={applicantName}
        applicationID={applicationID}
      />
    );
  });

  return (
    <div>
      <div className="w-5/6 h-full border-2 mx-auto shadow-md my-12 rounded">
        <div className="text-center text-5xl mt-10 mb-4 m-auto">{courseName}</div>
        <div className="text-center text-xl mb-16 text-gray-600 m-auto">{semester}</div>
        <div className="flex m-auto place-content-evenly">
          <div className="font-semibold text-2xl my-8">
            Course Coordinator:{' '}
            <a href="/" className="font-normal">
              {courseCoord}
            </a>
          </div>
          <div className="font-semibold text-2xl my-8">
            Current Available Spots:{' '}
            <span className="font-normal">{`${availableSpots}/${maxSpots}`}</span>
          </div>
          <div>{renderMarkers()}</div>
        </div>
      </div>
      <div className="font-semibold text-2xl my-6">
        <div className="flex w-5/6 m-auto justify-end my-4">
          <label className="mx-4 text-lg font-semibold">Sort by:</label>
          <select className="text-lg">
            <option>Latest</option>
            <option>GPA</option>
            <option>Location</option>
          </select>
        </div>
        <div>{renderApplications}</div>
      </div>
    </div>
  );
};

export default CourseDetail;
