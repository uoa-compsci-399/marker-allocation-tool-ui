import React from 'react';
import { RouteComponentProps } from 'react-router';

import ButtonGroup from './ButtonGroup';
import DetailSection from './DetailSection';
import { ApplicantDetails } from '../../models/ApplicantDetails';

//TODO: Send GET request to get applicant details using ID
const applicantDetails = (id: string): ApplicantDetails => {
  return {
    title: 'Application #1',
    name: 'Honger',
    studentID: '18051980',
    email: 'hong518@aucklanduni.ac.nz',
    areaOfStudy: 'Computer Science',
    currentYear: '3',
    availabeSems: 'Semester One, Two',
    experience: 'No',
    visaStatus: 'Valid',
    location: 'In Auckland',
    prefCourse: 'COMPSCI 399',
    files: 'Some files',
  };
};

const ApplicationDetail = (props: RouteComponentProps<{ id: string }>): JSX.Element => {
  const { match } = props;

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
  } = applicantDetails(match.params.id);

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
