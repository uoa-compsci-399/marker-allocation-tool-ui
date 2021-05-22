import { Form, Formik } from 'formik';
import axios from 'axios';

import AddCCFields from './AddCCFields';
import clsx from 'clsx';
import {
  CCFormatted,
  CCTypes,
  courseCoordinatorSchema,
  initialCCValues,
} from 'models/CoordinatorFormDefinition';

const api_url = process.env.REACT_APP_API_DOMAIN;

const AddCCForm = (): JSX.Element => {
  async function submitForm(form: CCTypes): Promise<void> {
    const data: CCFormatted = Object.assign({}, form);
    console.log(data);
    await axios.post(`${api_url}/api/user/coordinator`, data);
  }

  return (
    <div
      className={clsx(
        'grid w-3/5 max-w-full w m-auto border-2 border-gray-600 rounded shadow-lg space-y-7',
        '3xl:w-1/3 2xl:w-1/2 lg:w-2/3 md:w-10/12 sm:p-16 xs:w-11/12 xs:p-8'
      )}
    >
      <Formik
        initialValues={initialCCValues}
        onSubmit={(values, actions): void => {
          submitForm(values).then(() => {
            actions.setSubmitting(false);
            actions.resetForm();
            alert('A New Course Coordinator Added');
          });
        }}
        validationSchema={courseCoordinatorSchema}
      >
        <Form>
          <AddCCFields />
        </Form>
      </Formik>
    </div>
  );
};

export default AddCCForm;
