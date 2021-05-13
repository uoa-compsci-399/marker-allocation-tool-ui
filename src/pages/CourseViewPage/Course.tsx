import { CourseData } from 'models/CourseData';
import { Link } from 'react-router-dom';

//TODO: GET application count from DB using a query
const getApplicationCount = (courseId: string): number => {
  return 5;
};

const Course = ({
  courseCoord,
  courseId,
  courseName,
  semester,
  closingDate,
}: CourseData): JSX.Element => {
  return (
    <div className="w-7/12 h-full py-4 mx-auto my-5 overflow-auto bg-white border-2 rounded shadow-md">
      <div className="md:flex">
        <Link
          className="w-full mx-12 mt-6 text-3xl font-semibold hover:text-blue-600"
          to={{
            pathname: `/courses/${courseId}/applications/`,
            state: {
              courseId: courseId,
              courseCoord: courseCoord,
              courseName: courseName,
              semester: semester,
            },
          }}
        >
          {courseName}
        </Link>
      </div>
      <div className="mx-12 mb-8 font-medium text-gray-600">{semester}</div>
      <div className="mx-12 my-4 text-lg font-semibold">
        Course Coordinator(s): <span className="font-medium">{courseCoord}</span>
      </div>
      <div className="mx-12 my-4 text-lg font-semibold">
        Closing Date:{' '}
        <span className="font-medium">
          {closingDate}
          <span className="mx-12 text-base font-light text-red-500"> # days left</span>
        </span>
      </div>
      <div className="mx-12 my-4 text-lg font-semibold">
        Number of Applications: <span className="font-medium">{getApplicationCount(courseId)}</span>
      </div>
    </div>
  );
};

export default Course;
