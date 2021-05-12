import clsx from 'clsx';
import { Formik, Form } from 'formik';
import axios from 'axios';

import NewCourseFields from './NewCourseFields';

import {
  newCourseFormSchema,
  initialValues,
  FormFormatted,
  FormTypes,
} from '../../models/CourseFormDefinition';

function stringToInt(value: string): number {
  return value === 'Yes' ? 1 : 0;
}

function mapToWord(value: string): string {
  return value === '1' ? 'Yes' : 'No';
}

const ApplyForm = (): JSX.Element => {
  async function submitForm(form: FormTypes): Promise<void> {
    const data: FormFormatted = form;
    data.isPublished = stringToInt(form.isPublished);

    console.log(data);
    //TODO: replace with correct POST endpoint
    await axios.post('http://dev.classe.wumbo.co.nz/api/application', data);
  }

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
          submitForm(values).then(
            () => {
              actions.setSubmitting(false);
              actions.resetForm();
              //TODO: Replace alert with modal
              alert('Course Added!');
            },
            () => {
              actions.setFieldValue('isPublished', mapToWord(values.isPublished.toString()));
              //TODO: Replace alert with modal
              alert('Something went wrong, please try again');
            }
          );
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
