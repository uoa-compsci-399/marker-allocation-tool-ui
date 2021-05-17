import React from 'react';
import { RouteComponentProps } from 'react-router';

import Application from './Application';
import { FormApplication, FormApplication as ApplicationType } from '../../models/FormApplication';

//TODO: Send GET request to get a list applications for that course
const applicantDetails = (id: string, name: string): FormApplication[] => {
  return [
    {
      courseID: id,
      title: `${name}  Application #1`,
      date: '11/04/21',
      applicantName: 'Songyan Teng',
      applicationID: '2456879',
    },
    {
      courseID: id,
      title: `${name}  Application #2`,
      date: '08/04/21',
      applicantName: 'Isaac Kaabel',
      applicationID: '1234567',
    },
    {
      courseID: id,
      title: `${name}  Application #3`,
      date: '05/04/21',
      applicantName: 'Darren Chen',
      applicationID: '5968745',
    },
  ];
};

const renderMarkers = (): JSX.Element => {
  return (
    <p
      className="font-semibold text-indigo-800 text-xl tk-neue-haas-grotesk-display tracking-wide cursor-pointer"
      onClick={(): void => {
        //TODO: Query current markers from DB and show in a modal
      }}
    >
      View Current Markers
    </p>
  );
};

const renderApplications = (courseId: string, courseName: string): JSX.Element[] =>
  applicantDetails(courseId, courseName).map((application: ApplicationType) => {
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

const CourseDetail = (props: RouteComponentProps): JSX.Element => {
  const { location } = props;

  const { courseCoordinators, courseID, courseName, semesters } = location.state;

  //TODO: Get this data using API Call
  const availableSpots = 7;
  const maxSpots = 10;

  return (
    <div>
      <div className="flex flex-wrap m-auto shadow-md bg-blue-100 p-1">
        <div className="flex flex-col m-auto ml-7 my-7">
          <div className="font-semibold text-2xl tracking-tight text-gray-600 mb-3">
            Course Applications
          </div>
          <div className="text-xl tk-neue-haas-grotesk-display tracking-wide text-gray-600">
            {courseName}
          </div>
          <div className="text-lg tk-neue-haas-grotesk-display tracking-wide text-gray-500">
            {semesters}
          </div>
        </div>
        <div className="flex flex-grow m-auto place-content-evenly">
          <div className="font-semibold tk-neue-haas-grotesk-display tracking-wide text-xl">
            Course Coordinator:{' '}
            <a href="/" className="font-normal">
              {courseCoordinators}
            </a>
          </div>
          <div className="font-semibold tk-neue-haas-grotesk-display tracking-wide text-xl">
            Current Available Spots:{' '}
            <span className="font-normal">{`${availableSpots}/${maxSpots}`}</span>
          </div>
          <div>{renderMarkers()}</div>
        </div>
      </div>
      <div className="font-semibold text-2xl my-6">
        <div className="w-7/12 m-auto text-right mt-10 mb-4">
          <label className="mx-4 text-lg font-semibold">Sort by:</label>
          <select className="text-lg">
            <option>Latest</option>
            <option>GPA</option>
            <option>Location</option>
          </select>
        </div>
        <div>{renderApplications(courseID, courseName)}</div>
      </div>
    </div>
  );
};

export default CourseDetail;
