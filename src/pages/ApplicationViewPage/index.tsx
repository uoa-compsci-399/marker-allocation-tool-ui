import { RouteComponentProps } from 'react-router';

// import Application from './Application';
// import { FormApplication, FormApplication as ApplicationType } from 'models/FormApplication';
import { DecodeBitField } from 'utils/BitFieldHelper';
import useFetchAvailableCount from 'hooks/useFetchAvailableCount';
import Table from './Table';

const api_url = process.env.REACT_APP_API_DOMAIN;

//TODO: Send GET request to get a list applications for that course
// const applicantDetails = (id: string, name: string): FormApplication[] => {
//   return [
//     {
//       courseID: id,
//       title: `${name}  Application #1`,
//       date: '11/04/21',
//       applicantName: 'Songyan Teng',
//       applicationID: '1',
//     },
//     {
//       courseID: id,
//       title: `${name}  Application #2`,
//       date: '08/04/21',
//       applicantName: 'Isaac Kaabel',
//       applicationID: '2',
//     },
//     {
//       courseID: id,
//       title: `${name}  Application #3`,
//       date: '05/04/21',
//       applicantName: 'Darren Chen',
//       applicationID: '3',
//     },
//   ];
// };

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

// const renderApplications = (courseId: string, courseName: string): JSX.Element[] =>
//   applicantDetails(courseId, courseName).map((application: ApplicationType) => {
//     const { title, date, applicantName, applicationID } = application;
//     return (
//       <Application
//         courseID={courseId}
//         title={title}
//         date={date}
//         applicantName={applicantName}
//         applicationID={applicationID}
//       />
//     );
//   });

const CourseDetail = (props: RouteComponentProps): JSX.Element => {
  const { location } = props;

  const { courseCoordinators, courseID, courseName, semesters, year, preferredMarkerCount } =
    location.state;

  const [count] = useFetchAvailableCount(`${api_url}/api/course/${courseID}/application/open`);

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
        <div className="flex w-7/12 m-auto mt-10 mb-4">
          <div className="px-5 text-left">
            <button className="px-4 py-2 mx-3 text-lg font-bold text-white bg-blue-500 rounded-full w-44 hover:bg-blue-700">
              Current Markers
            </button>
            <button className="w-32 px-4 py-2 mx-3 text-lg font-bold text-white bg-green-500 rounded-full hover:bg-green-700">
              Applied
            </button>
            <button className="w-32 px-4 py-2 mx-3 text-lg font-bold text-white bg-red-500 rounded-full hover:bg-red-700">
              Rejected
            </button>
          </div>
          <div className="w-6/12"></div>
          <div className="justify-end">
            <label className="mx-4 text-lg font-semibold">Sort by:</label>
            <select className="text-lg">
              <option>Date Submitted</option>
              <option>Location</option>
            </select>
          </div>
        </div>
        {/* <div>{renderApplications(courseID, courseName)}</div> */}
        <Table />
      </div>
    </div>
  );
};

export default CourseDetail;
