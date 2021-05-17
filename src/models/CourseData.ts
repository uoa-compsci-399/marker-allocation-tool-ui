import { WorkloadDistribution } from './WorkloadDistribution';

export interface CourseData {
  courseID: string;
  courseName: string;
  enrolmentEstimate?: string;
  enrolmentFinal?: string;
  expectedWorkload?: string;
  preferredMarkerCount?: string;
  courseCoordinators: string[];
  semesters: string[];
  year: string;
  workloadDistributions?: WorkloadDistribution[];
  applicationClosingDate: string;
  courseInfoDeadline?: string;
  markerAssignmentDeadline?: string;
  markerPrefDeadline?: string;
  isPublished: number;
  otherNotes?: string;
}
