import Button from 'components/common-ui/BasicButton';

const ButtonGroup = (): JSX.Element => {
  return (
    <div className="my-24 space-x-12 text-center">
      <Button colour="green" title="Accept" />
      <Button colour="red" title="Reject" />
      <Button colour="yellow" title="Maybe" />
    </div>
  );
};

export default ButtonGroup;
