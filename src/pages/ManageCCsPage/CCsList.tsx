import React from 'react';

import { CCData } from '../../models/CCData';
import CCCard from './CCCard';

interface CCsListProps {
  ccData: CCData[];
}

const CCsList = ({ ccData }: CCsListProps): JSX.Element => {
  const renderCCs = ccData.map(({ ccId, name, mobile, email }) => (
    <CCCard ccId={ccId} name={name} mobile={mobile} email={email} key={ccId} />
  ));

  return (
    <div>
      <div className="text-center my-12 font-bold text-4xl">Current Course Coordinators</div>
      {renderCCs}
    </div>
  );
};

export default CCsList;
