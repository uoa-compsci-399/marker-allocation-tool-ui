import { RouteComponentProps } from 'react-router';

import Application from './Application';
import { FormApplication, FormApplication as ApplicationType } from 'models/FormApplication';

//TODO: Send GET request to get a list applications for that course
const applicantDetails = (id: string): FormApplication[] => {
  const courseNumber = id.substr(2);

  return [
    {
      courseID: id,
      title: `${courseNumber}  Application #1`,
      date: '11/04/21',
      applicantName: 'Songyan Teng',
      applicationID: '1',
    },
    {
      courseID: id,
      title: `${courseNumber}  Application #2`,
      date: '08/04/21',
      applicantName: 'Isaac Kaabel',
      applicationID: '2',
    },
    {
      courseID: id,
      title: `${courseNumber}  Application #3`,
      date: '05/04/21',
      applicantName: 'Darren Chen',
      applicationID: '3',
    },
  ];
};

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

const renderApplications = (courseId: string): JSX.Element[] =>
  applicantDetails(courseId).map((application: ApplicationType) => {
    const { title, date, applicantName, applicationID } = application;
    return (
      <Application
        courseID={courseId}
        title={title}
        date={date}
        applicantName={applicantName}
        applicationID={applicationID}
      />
    );
  });

const CourseDetail = (props: RouteComponentProps): JSX.Element => {
  const { location } = props;

  const { courseCoord, courseId, courseName, semester } = location.state;

  //TODO: Get this data using API Call
  const availableSpots = 7;
  const maxSpots = 10;

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
            {semester}
          </div>
        </div>
        <div className="flex flex-grow m-auto place-content-evenly">
          <div className="text-xl font-semibold tracking-wide tk-neue-haas-grotesk-display">
            Course Coordinator:{' '}
            <a href="/" className="font-normal">
              {courseCoord}
            </a>
          </div>
          <div className="text-xl font-semibold tracking-wide tk-neue-haas-grotesk-display">
            Current Available Spots:{' '}
            <span className="font-normal">{`${availableSpots}/${maxSpots}`}</span>
          </div>
          <div>{renderMarkers()}</div>
        </div>
      </div>
      <div className="my-6 text-2xl font-semibold">
        <div className="w-7/12 m-auto mt-10 mb-4 text-right">
          <label className="mx-4 text-lg font-semibold">Sort by:</label>
          <select className="text-lg">
            <option>Latest</option>
            <option>GPA</option>
            <option>Location</option>
          </select>
        </div>
        <div>{renderApplications(courseId)}</div>
      </div>
    </div>
  );
};

export default CourseDetail;
