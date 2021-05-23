import { CourseData } from 'models/CourseData';
import { Link } from 'react-router-dom';

import { ReactComponent as EditIcon } from './edit_icon.svg';

import { DecodeBitField } from 'utils/BitFieldHelper';
import useFetchApplicationCount from 'hooks/useFetchApplicationCount';
import USER_DETAILS from 'utils/DummyUserCredentials';

const api_url = process.env.REACT_APP_API_DOMAIN;

function getDaysLeft(markerAssignmentDeadline: string): any {
  const deadline = new Date(markerAssignmentDeadline.replace(/-/g, '/'));
  const d = new Date();

  const yyyy = d.getFullYear();
  const mm = `${d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1}`;
  const dd = `${d.getDate() < 10 ? '0' + d.getDate() : d.getDate()}`;

  const now = new Date(yyyy + '/' + mm + '/' + dd);

  return getDifferenceInDays(deadline, now);
}

function getDifferenceInDays(date1: any, date2: any): string {
  const diffInMs = date1 - date2;
  if (diffInMs < 0) return 'Closed';
  else return `${Math.round(diffInMs / (1000 * 60 * 60 * 24))} days left`;
}

const Course = ({
  courseCoordinators,
  courseID,
  courseName,
  semesters,
  applicationClosingDate,
  markerAssignmentDeadline,
  year,
  preferredMarkerCount,
  isPublished,
}: CourseData): JSX.Element => {
  const [count] = useFetchApplicationCount(`${api_url}/api/course/${courseID}/application/total`);
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
        Deadline for Marker Allocation:{' '}
        <span className="font-medium">{markerAssignmentDeadline}</span>
        <span className="mx-12 text-base font-light text-red-500">
          {getDaysLeft(markerAssignmentDeadline)}
        </span>
      </div>
      <div className="mx-12 my-4 text-lg font-semibold">
        Application Closing Date: <span className="font-medium">{applicationClosingDate}</span>
      </div>
      <div className="mx-12 my-4 text-lg font-semibold">
        Number of Applications: <span className="font-medium">{count}</span>
      </div>
    </div>
  );
};

export default Course;
