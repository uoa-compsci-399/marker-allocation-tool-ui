import Course from './Course';
import { CourseData } from 'models/CourseData';

interface CourseListProps {
  courseData: CourseData[];
}

function bitCodeDecoder(value: number): string {
  let str = '';
  if (value === 1) {
    str = 'Semester 1';
  } else if (value === 2) {
    str = 'Semester 2';
  } else if (value === 4) {
    str = 'Summer School';
  }

  return str;
}

function CourseDetails(data: any): CourseData {
  return {
    courseCoord: `N/A`,
    courseId: `${data.courseId}`,
    courseName: `${data.courseName}`,
    semester: `${bitCodeDecoder(data.whichSemestersField)}`,
    closingDate: `${data.applicationDeadline}`,
    availableSpots: ``,
    maxSpots: ``,
  };
}

const CourseList = ({ courseData }: CourseListProps): JSX.Element => {
  // render courses with fetched data

  const renderCourses = courseData.map((data: CourseData) => {
    const c = CourseDetails(data);

    return (
      <Course
        courseCoord={c.courseCoord}
        courseId={c.courseId}
        courseName={c.courseName}
        semester={c.semester}
        closingDate={c.closingDate}
        availableSpots={c.availableSpots}
        maxSpots={c.maxSpots}
      />
    );
  });

  return <div>{renderCourses}</div>;
};

export default CourseList;
