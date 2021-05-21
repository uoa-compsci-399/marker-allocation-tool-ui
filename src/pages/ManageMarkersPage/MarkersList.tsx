import React from 'react';

import { MarkerData } from 'models/MarkerData';
import MarkerCard from './MarkerCard';

interface MarkersListProps {
  markerData: MarkerData[];
}

const MarkersList = ({ markerData }: MarkersListProps): JSX.Element => {
  const renderMarkers = markerData.map(({ markerId, name, mobile, email }) => (
    <MarkerCard markerId={markerId} name={name} mobile={mobile} email={email} key={markerId} />
  ));

  return (
    <div>
      <div className="text-center my-12 font-bold text-4xl">Current Markers</div>
      {renderMarkers}
    </div>
  );
};

export default MarkersList;
