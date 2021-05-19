import clsx from 'clsx';
import { Formik, Form } from 'formik';
import axios from 'axios';

import NewCourseFields from './NewCourseFields';
import { CourseState } from 'models/CourseState';

import { newCourseFormSchema, FormFormatted, FormTypes } from 'models/CourseFormDefinition';

import useFetchCourse from 'hooks/useFetchCourse';
import React from 'react';
import { ResponseCourseData } from 'models/ResponseCourseData';
import { DecodeBitField, EncodeBitField } from 'utils/BitFieldHelper';
import Spinner from '../../components/common-ui/Spinner';

const api_url = process.env.REACT_APP_API_DOMAIN;

function stringToInt(value: string): number {
  return value === 'Yes' ? 1 : 0;
}

function mapToWord(value: string): string {
  return value === '1' ? 'Yes' : 'No';
}

function parseCourse(course: ResponseCourseData): FormTypes {
  return {
    courseName: course.courseName,
    enrolmentEstimate: course.enrolmentEstimate,
    enrolmentFinal: course.enrolmentFinal,
    expectedWorkload: course.expectedWorkload,
    preferredMarkerCount: course.preferredMarkerCount,
    courseCoordinators:
      course.courseCoordinators.trim() === '' ? [] : course.courseCoordinators.split(', '),
    semesters: DecodeBitField(course.semesters),
    year: course.year,
    workloadDistributions: JSON.parse(course.workloadDistributions).data,
    applicationClosingDate: course.applicationClosingDate,
    courseInfoDeadline: course.courseInfoDeadline,
    markerAssignmentDeadline: course.markerAssignmentDeadline,
    markerPrefDeadline: course.markerPrefDeadline,
    isPublished: mapToWord(course.isPublished.toString()),
    otherNotes: course.otherNotes,
  };
}

const ApplyForm = (state: CourseState): JSX.Element => {
  async function submitForm(form: FormTypes): Promise<void> {
    const data: FormFormatted = Object.assign({}, form);
    data.isPublished = stringToInt(form.isPublished);
    data.semesters = EncodeBitField(data.semesters);
    data.workloadDistributions = JSON.stringify(data.workloadDistributions);

    console.log(data);
    //TODO: replace with correct POST endpoint
    await axios.post(`${api_url}/api/course`, data);
  }

  //TODO: validate request for course using userID
  const [course, loading] = useFetchCourse(state.courseId);
  const values = parseCourse(course.data);
  return (
    <div
      className={clsx(
        'grid w-3/5 max-w-full w m-auto border-2 border-gray-600 rounded shadow-lg space-y-7',
        '3xl:w-1/3 2xl:w-1/2 lg:w-2/3 md:w-10/12 sm:p-16 xs:w-11/12 xs:p-8'
      )}
    >
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Formik
            initialValues={values}
            onSubmit={(values, actions): void => {
              submitForm(values).then(
                () => {
                  actions.setSubmitting(false);
                  actions.resetForm();
                  //TODO: Replace alert with modal
                  alert('Course Added!');
                },
                () => {
                  //TODO: Replace alert with modal
                  alert('Something went wrong, please try again');
                }
              );
            }}
            validationSchema={newCourseFormSchema}
          >
            <Form>
              <NewCourseFields
                userRole={state.userRole}
                userId={state.userId}
                courseId={state.courseId}
              />
            </Form>
          </Formik>
        </>
      )}
    </div>
  );
};

export default ApplyForm;
