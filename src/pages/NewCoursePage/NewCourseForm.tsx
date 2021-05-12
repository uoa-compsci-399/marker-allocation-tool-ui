import clsx from 'clsx';
import { Formik, Form } from 'formik';

import NewCourseFields from './NewCourseFields';
import { newCourseFormSchema, initialValues } from '../../models/CourseFormDefinition';

const ApplyForm = (): JSX.Element => {
  return (
    <div
      className={clsx(
        'grid w-3/5 max-w-full w m-auto border-2 border-gray-600 rounded shadow-lg space-y-7',
        '3xl:w-1/3 2xl:w-1/2 lg:w-2/3 md:w-10/12 sm:p-16 xs:w-11/12 xs:p-8'
      )}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions): void => {
          console.log(values);
        }}
        validationSchema={newCourseFormSchema}
      >
        <Form>
          <NewCourseFields />
        </Form>
      </Formik>
    </div>
  );
};

export default ApplyForm;
