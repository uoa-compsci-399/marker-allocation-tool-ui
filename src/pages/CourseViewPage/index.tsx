import React from 'react';

import CourseList from './CourseList';
import ExtendedFAB from '../../components/common-ui/ExtendedFAB';
import useFetchCourses from '../../hooks/useFetchCourses';
import { USER_DETAILS } from '../../utils/Constants';

const CourseViewPage = (): JSX.Element => {
  //TODO: Filter course list by userID
  const [courses, loading] = useFetchCourses();
  return (
    <div>
      <div className="flex flex-wrap shadow-md bg-blue-100 mb-10 p-5">
        <p className="font-semibold text-2xl text-gray-600 tracking-tight ml-4 my-4">
          Manage Courses
        </p>
        {USER_DETAILS.identity === '1' ? (
          <ExtendedFAB identity={USER_DETAILS.identity} userId={USER_DETAILS.userId} />
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
