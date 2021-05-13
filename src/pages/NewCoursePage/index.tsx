import NewCourseForm from './NewCourseForm';
import { RouteComponentProps } from 'react-router';
import React from 'react';

const NewCoursePage = (props: RouteComponentProps): JSX.Element => {
  const { location } = props;

  const { userRole, userId, courseId } = location.state;

  return (
    <div>
      <div className="flex flex-wrap shadow-md bg-blue-100 mb-10 p-5">
        <p className="font-semibold text-2xl text-gray-600 tracking-tight ml-4 my-4">
          {courseId === '-9999' ? <span>Add a New Course</span> : <span>Edit a Course</span>}
        </p>
      </div>
      <div className="flex m-auto my-10 font-sans text-sm 3xl:max-w-screen-2xl">
        <NewCourseForm userRole={userRole} userId={userId} courseId={courseId} />
      </div>
    </div>
  );
};

export default NewCoursePage;
