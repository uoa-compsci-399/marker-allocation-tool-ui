import React from 'react';

import ButtonGroup from './ButtonGroup';
import DetailSection from './DetailSection';

interface ApplicationDetailProps {
  info: Record<string, string>;
}

const ApplicationDetail = ({ info }: ApplicationDetailProps): JSX.Element => {
  const {
    title,
    name,
    studentID,
    email,
    areaOfStudy,
    currentYear,
    availabeSems,
    experience,
    visaStatus,
    location,
    prefCourse,
    files,
  } = info;

  return (
    <div className="w-11/12 h-full border-2 mx-auto shadow-md my-12 rounded">
      <div className="text-center text-5xl my-16">{title}</div>
      <DetailSection title="Name" value={name} />
      <DetailSection title="Student ID" value={studentID} />
      <DetailSection title="Email" value={email} />
      <DetailSection title="Current Area of Study" value={areaOfStudy} />
      <DetailSection title="Year" value={currentYear} />
      <DetailSection title="Availability" value={availabeSems} />
      <DetailSection title="Experience" value={experience} />
      <DetailSection title="Visa Status" value={visaStatus} />
      <DetailSection title="Location" value={location} />
      <DetailSection title="Preffered Course" value={prefCourse} />
      <DetailSection title="Files" value={files} />
      <ButtonGroup />
    </div>
  );
};

export default ApplicationDetail;
