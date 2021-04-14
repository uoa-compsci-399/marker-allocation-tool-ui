import { Formik, Form } from 'formik';

import {
  Textbox,
  CheckBoxes,
  Dropdown,
  RadioBoxes,
  Upload,
  ConfirmBox,
  Date,
} from './components/common-ui/forms';

import { applicationSchema, initialValues } from './formDefination';

const ApplicationForm = (): JSX.Element => {
  return (
    <div className="grid w-3/5 max-w-full p-16 m-auto border border-gray-900 space-y-7">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions): void => {
          console.log(values);
          actions.setSubmitting(false);
        }}
        validationSchema={applicationSchema}
      >
        <Form>
          <div className="space-y-7">
            <div className="grid min-w-full grid-cols-2 row-span-1 gap-7">
              <Textbox field={'firstName'} label={'First Name'} />
              <Textbox field={'lastName'} label={'Last Name'} />
              <Textbox field={'studentId'} label={'Student ID'} />
              <Textbox field={'email'} label={'University of Auckland Email'} />
            </div>
            <Dropdown
              field={'selectedCourse'}
              options={['compsci 335', 'compsci 316', 'need to fetch from api']}
              label={'Course you are applying for'}
            />
            <Dropdown
              field={'enrolmentStatus'}
              options={['enrolled', 'waiting', 'unenrolled']}
              label={'University enrolment status'}
            />
            <Dropdown
              field={'areaOfStudy'}
              options={['science', 'engineering', 'need to fetch from api']}
              label={'Current area of study'}
            />
            <CheckBoxes
              field={'avaliability'}
              label={'Avaliability'}
              options={['Summer School', 'Semester One', 'Semester Two']}
            />
            <Date field="dateOfBirth" label="Date of birth" />
            <RadioBoxes field={'previousMarker'} label={'Have you worked as a marker before?'} />
            <RadioBoxes
              field={'workEligible'}
              label={'Are you a NZ citizen or permanant resident?'}
            />
            <RadioBoxes field={'inAuckland'} label={'Are you located in Auckland?'} />
            <Upload field={'academicRecord'} label={'Academic Record'} />
            <Upload field={'cirriculumVitae'} label={'Cirriculum Vitae'} />
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
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ApplicationForm;
