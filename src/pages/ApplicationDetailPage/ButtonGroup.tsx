import React from 'react';

import Button from '../../components/common-ui/BasicButton';

// Currently not being used - delete it if it shows buttons

const ButtonGroup = (): JSX.Element => {
  return (
    <div className="text-center space-x-12 my-24">
      <Button colour="green" title="Accept" />
      <Button colour="red" title="Reject" />
      <Button colour="yellow" title="Maybe" />
    </div>
  );
};

export default ButtonGroup;
