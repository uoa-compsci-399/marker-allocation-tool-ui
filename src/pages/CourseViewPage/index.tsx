import React from 'react';

import CourseList from './CourseList';
import ExtendedFAB from '../../components/common-ui/ExtendedFAB';
import { UserRole } from '../../models/UserRole';
import useFetchCourses from '../../hooks/useFetchCourses';

//TODO: GET user role using /whoami from backend
//0: Marker, 1: MC, 2: CC
export const userDetails: UserRole = {
  identity: Math.floor(Math.random() * 3).toString(),
  userId: '12345678',
};

const CourseViewPage = (): JSX.Element => {
  //TODO: Filter course list by userID
  const [courses, loading] = useFetchCourses();
  return (
    <div>
      <div className="flex flex-wrap shadow-md bg-blue-100 mb-10 p-5">
        <p className="font-semibold text-2xl text-gray-600 tracking-tight ml-4 my-4">
          Manage Courses
        </p>
        {userDetails.identity === '1' ? (
          <ExtendedFAB identity={userDetails.identity} userId={userDetails.userId} />
        ) : null}
      </div>
      {loading ? (
        <div className="m-auto ease-linear border-8 border-t-8 border-gray-200 rounded-full w-14 h-14 loader"></div>
      ) : (
        <>
          <CourseList courseData={courses.data} />
        </>
      )}
    </div>
  );
};

export default CourseViewPage;
