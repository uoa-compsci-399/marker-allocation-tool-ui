import React from 'react';

import CourseView from './pages/CourseViewPage/';

// Dummy ApplicationDetail data
// const dummyDataOne = {
//   title: 'Application #1',
//   name: 'Honger',
//   studentID: '18051980',
//   email: 'hong518@aucklanduni.ac.nz',
//   areaOfStudy: 'Computer Science',
//   currentYear: '3',
//   availabeSems: 'Semester One, Two',
//   experience: 'No',
//   visaStatus: 'Valid',
//   location: 'In Auckland',
//   prefCourse: 'COMPSCI 399',
//   files: 'Some files',
// };

// const dummyDataTwo = {
//   title: 'Application #2',
//   name: 'Applicant',
//   studentID: '584412',
//   email: 'appl487@aucklanduni.ac.nz',
//   areaOfStudy: 'Mathematics',
//   currentYear: '2',
//   availabeSems: 'Semester Two',
//   experience: 'Yes',
//   visaStatus: 'Valid',
//   location: 'Not in Auckland',
//   prefCourse: 'COMPSCI 367',
//   files: 'Some files',
// };

function App(): JSX.Element {
  return (
    <div>
      <CourseView />
    </div>
  );
}

export default App;
