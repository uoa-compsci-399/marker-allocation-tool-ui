import { FormApplication } from './FormApplication';

export interface CourseData {
  courseCoord: string;
  courseId: string;
  courseName: string;
  semester: string;
  closingDate: string;
  availableSpots: string;
  maxSpots: string;
  applications: FormApplication[];
  currentMarkers: string[];
}
