import CourseList from './CourseList';
import ExtendedFAB from 'components/common-ui/ExtendedFAB';
import useFetchCourses from 'hooks/useFetchCourses';
import Spinner from 'components/common-ui/Spinner';
import { NULL_COURSE_ID, USER_DETAILS } from 'utils/Constants';

const CourseViewPage = (): JSX.Element => {
  //TODO: Filter course list by userID
  const [courses, loading] = useFetchCourses();
  return (
    <div>
      <div className="flex flex-wrap p-5 mb-10 bg-blue-100 shadow-md">
        <p className="my-4 ml-4 text-2xl font-semibold tracking-tight text-gray-600">
          Manage Courses
        </p>
        {USER_DETAILS.identity === '1' ? (
          <ExtendedFAB
            title={'Add a New Course'}
            to={{
              pathname: `/courses/new`,
              state: {
                userRole: USER_DETAILS.identity,
                userId: USER_DETAILS.userId,
                courseId: NULL_COURSE_ID,
              },
            }}
          />
        ) : null}
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <CourseList courseData={courses.data} />
        </>
      )}
    </div>
  );
};

export default CourseViewPage;
