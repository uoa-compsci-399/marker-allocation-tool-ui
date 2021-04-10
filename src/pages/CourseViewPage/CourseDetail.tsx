import React from 'react';

import ButtonGroup from './ButtonGroup';
import { CourseData } from './type';

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
    currentMarkers,
  } = courseData[0];

  const markers = currentMarkers.map((marker: string) => {
    return (
      <a href="/" className="">
        {marker},{' '}
      </a>
    );
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
        <div className="font-normal">{markers}</div>
      </div>
      <ButtonGroup />
    </div>
  );
};

export default CourseDetail;
