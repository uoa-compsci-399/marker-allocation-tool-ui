import { createPortal } from 'react-dom';
import { MouseEventHandler } from 'react';

import useFetchCoursesDetails from 'hooks/useFetchCoursesDetails';
import Spinner from 'components/common-ui/Spinner';
import { CoursesDetails } from 'models/CoursesDetails';
import CourseDetail from './CourseDetail';

interface Modal {
  isShown: boolean;
  toggle: MouseEventHandler;
}

const CourseDetails = ({ courseDetails }: any): JSX.Element => {
  const renderCourseDetails = courseDetails.map(
    ({ courseName, expectedWorkload, workloadDistributions }: CoursesDetails) => (
      <CourseDetail
        courseName={courseName}
        expectedWorkload={expectedWorkload}
        workloadDistributions={workloadDistributions}
      />
    )
  );
  return <div>{renderCourseDetails}</div>;
};

const CourseDetailsModal = ({ isShown, toggle }: Modal): React.ReactPortal | null => {
  const [coursesDetails, loading] = useFetchCoursesDetails();
  return isShown
    ? createPortal(
        <div
          className="fixed z-10 inset-0 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            />

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              {loading ? (
                <Spinner />
              ) : (
                <>
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 max-h-96 overflow-y-auto ">
                    <div className="sm:flex sm:items-start">
                      <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                        Course Details
                      </h3>
                    </div>
                    <CourseDetails courseDetails={coursesDetails.data} />
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={toggle}
                    >
                      Close
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>,
        document.body
      )
    : null;
};
export default CourseDetailsModal;
