import React from 'react';
import { RouteComponentProps } from 'react-router';

import Application from './Application';
import { FormApplication, FormApplication as ApplicationType } from '../../models/FormApplication';

//TODO: Send GET request to get a list applications for that course
const applicantDetails = (id: string): FormApplication[] => {
  const courseNumber = id.substr(2);
  return [
    {
      courseID: id,
      title: `${courseNumber}  Application #1`,
      date: '11/04/21',
      applicantName: 'Songyan Teng',
      applicationID: '2456879',
    },
    {
      courseID: id,
      title: `${courseNumber}  Application #2`,
      date: '08/04/21',
      applicantName: 'Isaac Kaabel',
      applicationID: '1234567',
    },
    {
      courseID: id,
      title: `${courseNumber}  Application #3`,
      date: '05/04/21',
      applicantName: 'Darren Chen',
      applicationID: '5968745',
    },
  ];
};

const CourseDetail = (props: RouteComponentProps): JSX.Element => {
  const { location } = props;

  const { courseCoord, courseId, courseName, semester } = location.state;

  //TODO: Get this data using API Call
  const availableSpots = 7;
  const maxSpots = 10;

  const renderMarkers = (): JSX.Element => {
    return (
      <p
        className="font-semibold text-blue-800 text-xl my-8 cursor-pointer"
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
        courseID={courseId}
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
        <div className="flex flex-wrap m-auto place-content-evenly">
          <div className="font-semibold text-xl my-8">
            Course Coordinator:{' '}
            <a href="/" className="font-normal">
              {courseCoord}
            </a>
          </div>
          <div className="font-semibold text-xl my-8">
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
