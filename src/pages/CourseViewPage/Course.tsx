import React from 'react';

// courseCood, courseId, courseName, availableSpots, maxSpots, currentMarkers

interface CourseProps {
  courseCood: string;
  courseId: string;
  courseName: string;
  availableSpots: string;
  maxSpots: string;
  currentMarkers: string[];
}

const Course = ({
  courseCood,
  courseId,
  courseName,
  availableSpots,
  maxSpots,
  currentMarkers,
}: CourseProps): JSX.Element => {
  return (
    <div className="w-5/6 h-full  overflow-auto bg-white mx-auto rounded shadow-md border-gray-400 border my-5 py-4">
      <div className="md:flex">
        <a
          href={`/${courseId}`}
          className="w-full text-center text-2xl my-2 font-medium hover:text-blue-600"
        >
          {courseName}
        </a>
      </div>
    </div>
  );
};

export default Course;
