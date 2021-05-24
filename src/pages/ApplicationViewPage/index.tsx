import { RouteComponentProps } from 'react-router';

import Application from './Application';
import { FormApplication, FormApplication as ApplicationType } from 'models/FormApplication';
import { DecodeBitField } from 'utils/BitFieldHelper';
import useFetchAvailableCount from 'hooks/useFetchAvailableCount';
import useFetchSummaries from 'hooks/useFetchSummaries';

const api_url = process.env.REACT_APP_API_DOMAIN;

const renderMarkers = (): JSX.Element => {
  return (
    <p
      className="text-xl font-semibold tracking-wide text-indigo-800 cursor-pointer tk-neue-haas-grotesk-display"
      onClick={(): void => {
        //TODO: Query current markers from DB and show in a modal
      }}
    >
      View Current Markers
    </p>
  );
};

const renderApplications = (
  courseId: string,
  courseName: string,
  applications: FormApplication[]
): JSX.Element[] =>
  applications.map((application: ApplicationType) => {
    const { applicantName, applicationID } = application;

    return (
      <Application
        courseID={courseId}
        courseName={courseName}
        applicantName={applicantName}
        applicationID={applicationID}
      />
    );
  });

const CourseDetail = (props: RouteComponentProps): JSX.Element => {
  const { location } = props;

  const { courseCoordinators, courseID, courseName, semesters, year, preferredMarkerCount } =
    location.state;

  const [count] = useFetchAvailableCount(`${api_url}/api/course/${courseID}/application/open`);
  const [applications] = useFetchSummaries(courseID);

  return (
    <div>
      <div className="flex flex-wrap p-1 m-auto bg-blue-100 shadow-md">
        <div className="flex flex-col m-auto ml-7 my-7">
          <div className="mb-3 text-2xl font-semibold tracking-tight text-gray-600">
            Course Applications
          </div>
          <div className="text-xl tracking-wide text-gray-600 tk-neue-haas-grotesk-display">
            {courseName}
          </div>
          <div className="text-lg tracking-wide text-gray-500 tk-neue-haas-grotesk-display">
            {`${DecodeBitField(semesters).join(', ')} ${year}`}
          </div>
        </div>
        <div className="flex flex-grow m-auto place-content-evenly">
          <div className="text-xl font-semibold tracking-wide tk-neue-haas-grotesk-display">
            Course Coordinator:{' '}
            <a href="/" className="font-normal">
              {courseCoordinators}
            </a>
          </div>
          <div className="text-xl font-semibold tracking-wide tk-neue-haas-grotesk-display">
            Current Available Spots:{' '}
            <span className="font-normal">{`${count}/${preferredMarkerCount}`}</span>
          </div>
          <div>{renderMarkers()}</div>
        </div>
      </div>
      <div className="my-6 text-2xl font-semibold">
        {applications.data.length === 0 ? (
          <div className="text-center my-12 font-bold text-2xl">No Applications Yet</div>
        ) : (
          <div>
            <div className="w-7/12 m-auto mt-10 mb-4 text-right">
              <label className="mx-4 text-lg font-semibold">Sort by:</label>
              <select className="text-lg">
                <option>Latest</option>
                <option>GPA</option>
                <option>Location</option>
              </select>
            </div>
            <div>{renderApplications(courseID, courseName, applications.data)}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetail;
