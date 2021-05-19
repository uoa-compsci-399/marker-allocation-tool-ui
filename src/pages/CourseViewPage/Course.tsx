import { CourseData } from 'models/CourseData';
import { Link } from 'react-router-dom';

import { ReactComponent as EditIcon } from './edit_icon.svg';
import { USER_DETAILS } from '../../utils/Constants';
import { DecodeBitField } from '../../utils/BitFieldHelper';
import useFetchApplicationCount from '../../hooks/useFetchApplicationCount';

const Course = ({
  courseCoordinators,
  courseID,
  courseName,
  semesters,
  applicationClosingDate,
  year,
  preferredMarkerCount,
  isPublished,
}: CourseData): JSX.Element => {
  const [count] = useFetchApplicationCount(
    `https://dev.classe.wumbo.co.nz/api/course/${courseID}/application/total`
  );
  return (
    <div className="w-7/12 h-full py-4 mx-auto my-5 overflow-auto bg-white border-2 rounded shadow-md">
      <div className="md:flex">
        <Link
          className="w-full mx-12 mt-6 text-3xl font-semibold hover:text-blue-600"
          to={{
            pathname: `/courses/${courseID}/applications/`,
            state: {
              courseID: courseID,
              courseCoordinators: courseCoordinators,
              courseName: courseName,
              semesters: semesters,
              year: year,
              preferredMarkerCount: preferredMarkerCount,
            },
          }}
        >
          {courseName}
        </Link>

        <Link
          to={{
            pathname: `/courses/${courseID}/edit`,
            state: {
              courseId: courseID,
              userId: USER_DETAILS.userId,
              userRole: USER_DETAILS.identity,
            },
          }}
        >
          <EditIcon className="mr-4" />
        </Link>
      </div>
      <div className="mx-12 font-medium text-gray-600">{DecodeBitField(semesters).join(', ')}</div>
      <div className="mx-12 font-medium text-gray-600 mb-8">{year}</div>
      <div className="mx-12 my-4 text-lg font-semibold">
        Course Coordinator(s): <span className="font-medium">{courseCoordinators}</span>
      </div>
      <div className="mx-12 my-4 text-lg font-semibold">
        Closing Date: <span className="font-medium">{applicationClosingDate}</span>
      </div>
      <div className="mx-12 my-4 text-lg font-semibold">
        Number of Applications: <span className="font-medium">{count}</span>
      </div>
    </div>
  );
};

export default Course;
