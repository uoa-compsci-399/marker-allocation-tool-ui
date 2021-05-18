import { NULL_COURSE_ID } from '../utils/Constants';

export interface ResponseCourseData {
  courseID: string;
  courseName: string;
  enrolmentEstimate?: string;
  enrolmentFinal?: string;
  expectedWorkload?: string;
  preferredMarkerCount?: string;
  courseCoordinators: string[];
  semesters: string[];
  year: string;
  workloadDistributions: string;
  applicationClosingDate: string;
  courseInfoDeadline?: string;
  markerAssignmentDeadline?: string;
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
  courseCoordinators: [],
  semesters: [],
  year: '',
  workloadDistributions: `{"data": [{ "assignment":"", "workload":"" }]}`,
  applicationClosingDate: '',
  courseInfoDeadline: '',
  markerAssignmentDeadline: '',
  markerPrefDeadline: '',
  isPublished: 0,
  otherNotes: '',
};
