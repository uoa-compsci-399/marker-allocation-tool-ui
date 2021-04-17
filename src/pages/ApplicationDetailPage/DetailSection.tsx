import React from 'react';

interface DetailSectionProps {
  title: string;
  value: string;
}

const DetailSection = ({ title, value }: DetailSectionProps): JSX.Element => {
  return (
    <div className="mx-32 mb-4">
      <div className="text-2xl font-semibold mb-1 ml-4">{title}</div>
      <div className="border-t-2 mb-2"></div>
      <div className="text-xl mb-12 ml-4">{value}</div>
    </div>
  );
};

export default DetailSection;
