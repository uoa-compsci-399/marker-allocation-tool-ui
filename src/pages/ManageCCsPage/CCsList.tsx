import React from 'react';

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

  return (
    <div>
      <div className="text-center my-12 font-bold text-4xl">Current Course Coordinators</div>
      {renderCCs}
    </div>
  );
};

export default CCsList;
