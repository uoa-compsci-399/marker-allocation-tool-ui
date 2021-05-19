import { TextBox, CheckBoxes, RadioBoxes, MultiSelect, Date } from 'components/common-ui/forms';

import useFetch from 'hooks/useFetch';
import RepeatField from 'components/common-ui/forms/RepeatField';
import { CourseState } from 'models/CourseState';

import React from 'react';
import { NULL_COURSE_ID } from 'utils/Constants';
import Spinner from 'components/common-ui/Spinner';

const api_url = process.env.REACT_APP_API_DOMAIN;

const NewCourseFields = (state: CourseState): JSX.Element => {
  const [coordinators, loading] = useFetch(`${api_url}/api/coursecoordinators`);

  const identity = state.userRole;

  return (
    <div className="space-y-7">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="grid min-w-full grid-cols-2 row-span-1 gap-7">
            <TextBox field={'courseName'} label={'Course Name'} />
            <TextBox field={'preferredMarkerCount'} label={'Preferred Number of Markers'} />
            <TextBox field={'enrolmentEstimate'} label={'Estimated Enrolment'} />
            <TextBox field={'enrolmentFinal'} label={'Final Enrolment'} />
            <TextBox field={'expectedWorkload'} label={'Expected Total Workload'} />
            <Date field="applicationClosingDate" label="Application Closing Date" />
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
          <TextBox field={'year'} label={'Year'} placeholder={'YYYY'} />

          <RepeatField name={'workloadDistributions'} labels={['Assignment', 'Workload (hours)']} />

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

          <TextBox field={'otherNotes'} label={'Additional Notes'} />

          <button
            type="submit"
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            {state.courseId === NULL_COURSE_ID ? (
              <span>Add Course</span>
            ) : (
              <span>Update Course </span>
            )}
          </button>
        </>
      )}
    </div>
  );
};

export default NewCourseFields;
