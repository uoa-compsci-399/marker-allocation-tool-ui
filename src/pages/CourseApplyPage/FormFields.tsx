import {
  TextBox,
  CheckBoxes,
  Dropdown,
  RadioBoxes,
  Upload,
  ConfirmBox,
  MultiSelect,
  Date,
} from 'components/common-ui/forms';
import Spinner from 'components/common-ui/Spinner';

import useFetchCourseNames from 'hooks/useFetchCourseNames';

const FormFields = (): JSX.Element => {
  const [courses, loading] = useFetchCourseNames();

  return (
    <div className="space-y-7">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="grid min-w-full grid-cols-2 row-span-1 gap-7">
            <TextBox field={'firstName'} label={'First Name'} />
            <TextBox field={'lastName'} label={'Last Name'} />
            <TextBox field={'email'} label={'University of Auckland Email'} />
            <div className="grid min-w-full grid-cols-2 row-span-1 gap-7">
              <TextBox field={'studentId'} label={'Student ID'} />
              <TextBox field={'upi'} label={'UPI'} />
            </div>
          </div>
          <MultiSelect
            field={'selectedCourses'}
            options={courses}
            label={'Courses you are applying for'}
          />
          <Dropdown
            field={'enrolmentStatus'}
            options={['Bachelors', 'Honours', 'Postgrad Diploma', 'Masters', 'PhD']}
            label={'Current University enrolment status'}
          />
          <Dropdown
            field={'areaOfStudy'}
            options={['Computer Science', 'Other']}
            label={'What Department of the University is your current area of study'}
          />
          <CheckBoxes
            field={'availability'}
            label={'Availability'}
            options={['Summer School', 'Semester One', 'Semester Two']}
          />
          <Date field="dateOfBirth" label="Date of birth" />
          <RadioBoxes
            field={'workEligible'}
            label={'Are you a NZ citizen or permanent resident?'}
          />
          <RadioBoxes
            field={'inAuckland'}
            label={'Are you able to be physically present if required?'}
          />
          <TextBox
            field={'availabilityConstraint'}
            label={'Please state any constraints to your availability'}
          />
          <TextBox
            field={'relevantExperience'}
            label={'Describe briefly any relevant experience you may have for your chosen courses'}
          />
          <Upload field={'academicRecord'} label={'Academic Record'} />
          <Upload field={'curriculumVitae'} label={'Curriculum Vitae'} />
          <ConfirmBox
            field={'declaration'}
            label={'Declaration'}
            terms={
              'I agree to take responsibility for monitoring my workload and undertake to inform the Head of School if any offer of work takes my combined University employment over 0.5 FTE.'
            }
          />
          <button
            type="submit"
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
};

export default FormFields;
