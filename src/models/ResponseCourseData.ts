import { NULL_COURSE_ID } from 'utils/Constants';

export interface ResponseCourseData {
  courseID: string;
  courseName: string;
  enrolmentEstimate?: string;
  enrolmentFinal?: string;
  expectedWorkload?: string;
  preferredMarkerCount: string;
  courseCoordinators: string;
  semesters: number;
  year: string;
  workloadDistributions: string;
  applicationClosingDate: string;
  courseInfoDeadline?: string;
  markerAssignmentDeadline: string;
  markerPrefDeadline?: string;
  isPublished: number;
  otherNotes?: string;
}

export const initialValues: ResponseCourseData = {
  courseID: NULL_COURSE_ID,
  courseName: '',
  enrolmentEstimate: '',
  enrolmentFinal: '',
  expectedWorkload: '',
  preferredMarkerCount: '',
  courseCoordinators: '',
  semesters: 0,
  year: '',
  workloadDistributions: `{"data": [{ "assignment":"", "workload":"" }]}`,
  applicationClosingDate: '',
  courseInfoDeadline: '',
  markerAssignmentDeadline: '',
  markerPrefDeadline: '',
  isPublished: 0,
  otherNotes: '',
};
