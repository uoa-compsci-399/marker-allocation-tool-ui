export interface CCData {
  // CC stands for Course Coordinator
  ccId: string;
  name: string;
  mobile: string;
  email: string;
  assignedCourses?: string[];
}
