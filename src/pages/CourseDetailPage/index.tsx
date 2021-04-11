import React from 'react';

import Application from '../ApplicationViewPage/Application';
import ButtonGroup from '../CourseViewPage/ButtonGroup';
import { Application as ApplicationType, CourseData } from '../../constants/types';

// URL endpoint: /courses/:id

interface CourseDetailProps {
  courseData: CourseData[];
}

const CourseDetail = ({ courseData }: CourseDetailProps): JSX.Element => {
  const {
    courseCood,
    // courseId,
    courseName,
    availableSpots,
    maxSpots,
    applications,
    currentMarkers,
  } = courseData[0];

  const renderMarkers = currentMarkers.map((marker: string) => {
    return (
      <a href="/" className="">
        {marker},{' '}
      </a>
    );
  });

  const renderApplications = applications.map((application: ApplicationType) => {
    const { title, date, applicantName } = application;
    return <Application title={title} date={date} applicantName={applicantName} />;
  });

  return (
    <div className="w-11/12 h-full border-2 mx-auto shadow-md my-12 rounded">
      <div className="text-center text-5xl my-16">{courseName}</div>
      <div className="font-semibold text-2xl ml-12 my-8">
        Course Coodrdinator:{' '}
        <a href="/" className="font-normal">
          {courseCood}
        </a>
      </div>
      <div className="font-semibold text-2xl ml-12 my-8">
        Current Available Spots:{' '}
        <span className="font-normal">{`${availableSpots}/${maxSpots}`}</span>
      </div>
      <div className="font-semibold text-2xl ml-12 my-6">
        Current Markers:
        <div className="font-normal">{renderMarkers}</div>
      </div>
      <div className="font-semibold text-2xl ml-12 my-6">
        Current Applications:
        <div>{renderApplications}</div>
      </div>
      <ButtonGroup />
    </div>
  );
};

export default CourseDetail;
