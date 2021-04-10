import React from 'react';

import Button from '../../components/common-ui/BasicButton';

const ButtonGroup = (): JSX.Element => {
  return (
    <div className="text-center space-x-12 my-24">
      <Button colour="green" title="Assign" />
      <Button colour="red" title="Back" />
    </div>
  );
};

export default ButtonGroup;
