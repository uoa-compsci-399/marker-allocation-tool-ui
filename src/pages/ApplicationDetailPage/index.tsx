import { RouteComponentProps } from 'react-router';

import ButtonGroup from './ButtonGroup';
import DetailSection from './DetailSection';
import Spinner from 'components/common-ui/Spinner';
import { ApplicantDetails } from 'models/ApplicantDetails';

import useFetchApplicant from 'hooks/useFetchApplicant';

function ApplicationDetails(data: any): ApplicantDetails {
  return {
    title: `N/A`, //Not sure what this value needs to be
    name: `${data.firstName} ${data.lastName}`,
    studentID: 'N/A', //from MARKER table
    email: `${data.email}`,
    areaOfStudy: `${data.areaOfStudy}`,
    currentYear: `${data.year}`,
    availableSems: `${data.availability}`,
    experience: 'N/A', //cant find anywhere
    visaStatus: `${data.workEligible === 1 ? 'Valid' : 'Invalid'}`,
    location: `${data.inAuckland === 1 ? 'In Auckland' : 'Remote'}`,
    prefCourse: 'N/A', //cant find anywhere
    files: 'Need to add components for downloading files',
  };
}

const ApplicationDetail = (props: RouteComponentProps<{ id: string }>): JSX.Element => {
  const { match } = props; //allows us to get the id of the route
  const [data, loading] = useFetchApplicant(match.params.id);

  const {
    name,
    studentID,
    email,
    areaOfStudy,
    currentYear,
    availableSems,
    experience,
    visaStatus,
    location,
    prefCourse,
    files,
  } = ApplicationDetails(data);

  return (
    <div className="w-7/12 h-full mx-auto my-12 border-2 rounded shadow-md">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="my-16 text-5xl text-center">{name}</div>
          <DetailSection title="Student ID" value={studentID} />
          <DetailSection title="Email" value={email} />
          <DetailSection title="Current Area of Study" value={areaOfStudy} />
          <DetailSection title="Year" value={currentYear} />
          <DetailSection title="Availability" value={availableSems} />
          <DetailSection title="Experience" value={experience} />
          <DetailSection title="Visa Status" value={visaStatus} />
          <DetailSection title="Location" value={location} />
          <DetailSection title="Preffered Course" value={prefCourse} />
          <DetailSection title="Files" value={files} />
          <ButtonGroup />
        </>
      )}
    </div>
  );
};

export default ApplicationDetail;
