import CCCard from './CCCard';
import { CoordinatorData } from 'models/CoordinatorData';

interface CCsListProps {
  ccData: CoordinatorData[];
}

const CCsList = ({ ccData }: CCsListProps): JSX.Element => {
  const renderCCs = ccData.map(({ userID, firstName, lastName, email, upi, courses }) => (
    <CCCard
      userID={userID}
      firstName={firstName}
      lastName={lastName}
      email={email}
      upi={upi}
      courses={courses}
      key={userID}
    />
  ));

  return <div>{renderCCs}</div>;
};

export default CCsList;
