import clsx from 'clsx';
import { Formik, Form } from 'formik';
import axios from 'axios';

import { applicationSchema, FormFormatted, FormTypes, initialValues } from 'models/FormDefination';

import FormFields from './FormFields';

const ApplyForm = (): JSX.Element => {
  function stringToInt(value: string): number {
    return value === 'Yes' ? 1 : 0;
  }

  function mapToWord(value: string): string {
    return value === '1' ? 'Yes' : 'No';
  }

  function getBase64(file: File): Promise<string | ArrayBuffer | null> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (): void => resolve(reader.result);
      reader.onerror = (error): void => reject(error);
    });
  }

  async function submitForm(form: FormTypes): Promise<void> {
    const data: FormFormatted = form;
    data.workEligible = stringToInt(form.workEligible);
    data.inAuckland = stringToInt(form.inAuckland);
    data.declaration = stringToInt(form.declaration);

    data.academicRecord = await getBase64(form.academicRecord);
    data.curriculumVitae = await getBase64(form.curriculumVitae);

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
              alert('Submitted!');
            },
            () => {
              actions.setFieldValue('workEligible', mapToWord(values.workEligible.toString()));
              actions.setFieldValue('inAuckland', mapToWord(values.inAuckland.toString()));
              actions.setFieldValue('academicRecord', undefined);
              actions.setFieldValue('curriculumVitae', undefined);
              //TODO: Replace alert with modal
              alert('Something went wrong, please try again');
            }
          );
        }}
        validationSchema={applicationSchema}
      >
        <Form>
          <FormFields />
        </Form>
      </Formik>
    </div>
  );
};

export default ApplyForm;
