import { Form, Formik } from 'formik';
import axios from 'axios';

import { courseCoordinatorSchema, CCType, initialCCValues } from '../../models/FormDefination';
import AddCCFields from './AddCCFields';

const AddCCPage = (): JSX.Element => {
  //   const [state, setState] = useState({ loading: false });
  //   const [firstName, setFirstName] = useState('');
  //   const [lastName, setLastName] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [upi, setUpi] = useState('');
  //   const [role, setRole] = useState('CC');

  async function addNewCC(cc: CCType): Promise<void> {
    // setState({ ...state, loading: true });
    const data: CCType = cc;
    data.userID = data.UPI;
    await axios.post('https://dev.classe.wumbo.co.nz/api/user/coordinator', data);
  }

  return (
    <>
      <Formik
        initialValues={initialCCValues}
        onSubmit={(values, actions): void => {
          addNewCC(values).then(() => {
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
    </>
  );
};

export default AddCCPage;
