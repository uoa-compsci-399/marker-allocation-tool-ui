import { Form, Formik } from 'formik';
import axios from 'axios';
import clsx from 'clsx';

import AddCCFields from './AddCCFields';
import { CCFormatted, CCTypes, courseCoordinatorSchema } from 'models/CoordinatorFormDefinition';
import { NULL_USER_ID } from 'utils/Constants';

import useFetchCoordinator from 'hooks/useFetchCoordinator';
import Spinner from 'components/common-ui/Spinner';
import { User } from 'models/User';

const api_url = process.env.REACT_APP_API_DOMAIN;

const AddCCForm = (state: User): JSX.Element => {
  async function submitForm(form: CCTypes): Promise<void> {
    const data: CCFormatted = Object.assign({}, form);
    console.log(data);

    if (state.userID === NULL_USER_ID) {
      await axios.post(`${api_url}/api/user/coordinator`, data);
    } else {
      data.userID = state.userID;
      await axios.post(`${api_url}/api/user/coordinator/edit`, data);
    }
  }

  const [coordinator, loading] = useFetchCoordinator(state.userID);
  const values = coordinator.data;
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
                  alert('Course Coordinator Added');
                },
                () => {
                  //TODO: Replace alert with modal
                  alert('Something went wrong, please try again');
                }
              );
            }}
            validationSchema={courseCoordinatorSchema}
          >
            <Form>
              <AddCCFields userID={state.userID} />
            </Form>
          </Formik>
        </>
      )}
    </div>
  );
};

export default AddCCForm;
