import React from 'react';

import InputField from '../../components/common-ui/InputField';
import NameInputField from './NameInputField';

const ApplicationPage = (): JSX.Element => {
  return (
    <React.Fragment>
      <NameInputField />
      <InputField type="text" placeholder="Student ID" size="1/4" />
      <InputField type="text" placeholder="UoA Email" size="1/4" />
    </React.Fragment>
  );
};

export default ApplicationPage;
