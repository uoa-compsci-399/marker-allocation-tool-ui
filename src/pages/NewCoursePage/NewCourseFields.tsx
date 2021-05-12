import {
  Textbox,
  CheckBoxes,
  RadioBoxes,
  MultiSelect,
  Date,
} from '../../components/common-ui/forms';

import useFetch from '../../hooks/useFetch';
import RepeatField from '../../components/common-ui/forms/RepeatField';

import React from 'react';
import { UserRole } from '../../models/UserRole';

const NewCourseFields = (userRole: UserRole): JSX.Element => {
  //TODO: replace with new endpoint of avaiable course coordinators + their upi
  const [coordinators, loading] = useFetch('https://dev.classe.wumbo.co.nz/api/courses/available');

  const identity = userRole.identity;

  return (
    <div className="space-y-7">
      {loading ? (
        <div className="m-auto ease-linear border-8 border-t-8 border-gray-200 rounded-full w-14 h-14 loader"></div>
      ) : (
        <>
          <div className="grid min-w-full grid-cols-2 row-span-1 gap-7">
            <Textbox field={'courseName'} label={'Course Name'} />
            <Textbox field={'enrolmentEstimate'} label={'Estimated Enrolment'} />
            <Textbox field={'expectedWorkload'} label={'Expected Total Workload'} />
          </div>
          <MultiSelect
            field={'courseCoordinators'}
            options={coordinators}
            label={'Course Coordinators'}
          />
          <CheckBoxes
            field={'semesters'}
            label={'Semesters'}
            options={['Summer School', 'Semester One', 'Semester Two']}
          />
          <Textbox field={'year'} label={'Year'} placeholder={'YYYY'} />

          <RepeatField name={'workloadDistributions'} labels={['Assignment', 'Workload (hours)']} />

          <Date field="applicationClosingDate" label="Application Closing Date" />
          {identity === '1' ? (
            <Date field="markerAssignmentDeadline" label="Deadline for Marker Allocation" />
          ) : null}
          {identity === '1' ? (
            <Date field="courseInfoDeadline" label="Deadline to Submit Course Information" />
          ) : null}
          {identity === '1' ? (
            <Date field="markerPrefDeadline" label="Deadline for Submitting Marker Preferences" />
          ) : null}
          <RadioBoxes field={'isPublished'} label={'Publish this Course?'} />

          <Textbox field={'otherNotes'} label={'Additional Notes'} />

          <button
            type="submit"
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Add Course
          </button>
        </>
      )}
    </div>
  );
};

export default NewCourseFields;
