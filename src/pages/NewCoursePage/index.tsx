import NewCourseForm from './NewCourseForm';

const NewCoursePage = (): JSX.Element => {
  return (
    <div className="flex m-auto my-10 font-sans text-sm 3xl:max-w-screen-2xl">
      <NewCourseForm />
    </div>
  );
};

export default NewCoursePage;
