import NewCourseForm from './NewCourseForm';
import { RouteComponentProps } from 'react-router';

const NewCoursePage = (props: RouteComponentProps): JSX.Element => {
  const { location } = props;

  const { userRole, userId, courseId } = location.state;

  return (
    <div className="flex m-auto my-10 font-sans text-sm 3xl:max-w-screen-2xl">
      <NewCourseForm userRole={userRole} userId={userId} courseId={courseId} />
    </div>
  );
};

export default NewCoursePage;
