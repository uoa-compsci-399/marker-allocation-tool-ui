type label = {
  label: 'Approved' | 'Pending' | 'Denied';
};

const StatusLabel = ({ label }: label): JSX.Element => {
  if (label === 'Approved') {
    return (
      <span className="inline-flex px-3 py-2 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
        Approved
      </span>
    );
  } else if (label === 'Pending') {
    return (
      <span className="inline-flex px-3 py-2 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">
        Pending
      </span>
    );
  } else if (label === 'Denied') {
    return (
      <span className="inline-flex px-3 py-2 text-xs font-semibold text-red-800 bg-red-100 rounded-full">
        Denied
      </span>
    );
  }
  return <></>;
};

export default StatusLabel;
