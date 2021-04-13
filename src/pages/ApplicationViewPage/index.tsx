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
      applicantName: 'Songyan',
      applicationID: '2456879',
    },
    {
      title: '399 Application #2',
      date: '08/04/21',
      applicantName: 'Isaac',
      applicationID: '1234567',
    },
    {
      title: '358 Application #1',
      date: '05/04/21',
      applicantName: 'Issac',
      applicationID: '5968745',
    },
  ];
};

//TODO: Get data using props from routes
const CourseDetail = (routeData: CourseData): JSX.Element => {
  const { courseCoord, courseId, courseName, availableSpots, maxSpots } = {
    courseCoord: 'Asma Shakil',
    courseId: 'cs399',
    courseName: 'COMPSCI 399',
    availableSpots: '7',
    maxSpots: '10',
  };

  const renderMarkers = (): JSX.Element => {
    return (
      <p
        className="font-semibold tracking-wide text-indigo-700 uppercase text-xl ml-12 my-8 cursor-pointer"
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
    <div className="w-11/12 h-full border-2 mx-auto shadow-md my-12 rounded">
      <div className="text-center text-5xl my-16">{courseName}</div>
      <div className="font-semibold text-2xl ml-12 my-8">
        Course Coordinator:{' '}
        <a href="/" className="font-normal">
          {courseCoord}
        </a>
      </div>
      <div className="font-semibold text-2xl ml-12 my-8">
        Current Available Spots:{' '}
        <span className="font-normal">{`${availableSpots}/${maxSpots}`}</span>
      </div>
      <div className="font-normal">{renderMarkers()}</div>
      <div className="font-semibold text-2xl ml-12 my-6">
        <div className="flex justify-end mx-12 my-4">
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
