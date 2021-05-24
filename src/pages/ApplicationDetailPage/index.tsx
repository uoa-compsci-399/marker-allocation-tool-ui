import { RouteComponentProps } from 'react-router';

import ButtonGroup from './ButtonGroup';
import DetailSection from './DetailSection';
import Spinner from 'components/common-ui/Spinner';
import DownloadButton from 'components/common-ui/DownloadButton';
import { ApplicantDetails } from 'models/ApplicantDetails';

import useFetchApplicant from 'hooks/useFetchApplicant';
import { DecodeBitField } from '../../utils/BitFieldHelper';

function ApplicationDetails(data: any): ApplicantDetails {
  return {
    name: `${data.firstName} ${data.lastName}`,
    studentID: `${data.studentID}`,
    email: `${data.email}`,
    areaOfStudy: `${data.areaOfStudy}`,
    currentYear: `${data.year}`,
    availableSems: `${data.availability}`,
    experience: 'N/A',
    visaStatus: `${data.workEligible === 1 ? 'Valid' : 'Invalid'}`,
    location: `${data.inAuckland === 1 ? 'In Auckland' : 'Remote'}`,
    prefCourse: 'N/A',
    academicRecord: ``,
    curriculumVitae: ``,
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
    academicRecord,
    curriculumVitae,
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
          <DetailSection
            title="Availability"
            value={DecodeBitField(parseInt(availableSems)).join(', ')}
          />
          <DetailSection title="Experience" value={experience} />
          <DetailSection title="Visa Status" value={visaStatus} />
          <DetailSection title="Location" value={location} />
          <DetailSection title="Preferred Course" value={prefCourse} />
          <div className="mx-32 mb-4">
            <div className="mb-1 ml-4 text-2xl font-semibold">Files</div>
            <div className="mb-2 border-t-2"></div>
            <div className="flex mb-12 ml-4 text-xl">
              <DownloadButton title="Academic Record" downloadLink={academicRecord} />
              <DownloadButton title="Curriculum Vitae" downloadLink={curriculumVitae} />
            </div>
          </div>
          <ButtonGroup />
        </>
      )}
    </div>
  );
};

export default ApplicationDetail;
