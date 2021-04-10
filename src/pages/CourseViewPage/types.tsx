export type Application = {
  title: string;
  applicantName: string;
  date: string;
};

export type CourseData = {
  courseCood: string;
  courseId: string;
  courseName: string;
  availableSpots: string;
  maxSpots: string;
  applications: Application[];
  currentMarkers: string[];
};
