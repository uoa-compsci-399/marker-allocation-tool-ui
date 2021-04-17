import React from 'react';

import Button from '../../components/common-ui/BasicButton';

const ButtonGroup = (): JSX.Element => {
  return (
    <div className="text-center space-x-12 my-24 transition ease-in duration-200 focus:outline-none">
      <Button colour="green" title="Accept" />
      <Button colour="red" title="Reject" />
      <Button colour="yellow" title="Maybe" />
    </div>
  );
};

export default ButtonGroup;
