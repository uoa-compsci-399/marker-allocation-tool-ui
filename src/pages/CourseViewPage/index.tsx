import CourseList from './CourseList';
import ExtendedFAB from 'components/common-ui/ExtendedFAB';
import useFetchCourses from 'hooks/useFetchCourses';
import Spinner from 'components/common-ui/Spinner';

const CourseViewPage = (): JSX.Element => {
  const [courses, loading] = useFetchCourses();

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="flex flex-wrap p-5 mb-10 bg-blue-100 shadow-md">
            <p className="my-4 ml-4 text-2xl font-semibold tracking-tight text-gray-600">
              Manage Courses
            </p>
            <ExtendedFAB />
          </div>
          <CourseList courseData={courses} />
        </>
      )}
    </div>
  );
};

export default CourseViewPage;
