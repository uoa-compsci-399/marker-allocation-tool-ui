import React from 'react';

import MarkerCard from './MarkerCard';
import FloatingButton from './FAB';
import { MarkerData } from '../../models/MarkerData';

interface MarkersListProps {
  markerData: MarkerData[];
}

const MarkersList = ({ markerData }: MarkersListProps): JSX.Element => {
  const renderMarkers = markerData.map(({ markerId, name, mobile, email }) => (
    <MarkerCard markerId={markerId} name={name} mobile={mobile} email={email} />
  ));

  return (
    <div>
      <div className="text-center my-12 font-bold text-4xl">Current Markers</div>
      {renderMarkers}
      <div className="text-right mx-24 my-12">
        <FloatingButton />
      </div>
    </div>
  );
};

export default MarkersList;
