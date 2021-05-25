import { RouteComponentProps } from 'react-router';
import { DecodeBitField } from 'utils/BitFieldHelper';
import Table from './Table';
import Button from './Button';
import { useEffect, useState } from 'react';
import useFetchCourses from 'hooks/useFetchCourses';
import { CourseData } from 'models/CourseData';
import { StatusFilter, SortFilter } from 'models/TableProps';
import useFetchCourse from 'hooks/useFetchCourse';
import axios from 'axios';

const api_url = process.env.REACT_APP_API_DOMAIN;

const CourseDetail = (props: RouteComponentProps): JSX.Element => {
  const { location } = props;
  const { courseID } = location.state;

  const [courseFilter, setCourseFilter] = useState<string>(courseID);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('Pending');
  const [sortFilter, setSortFilter] = useState<SortFilter>('Name');

  const [courses] = useFetchCourses();
  const [course] = useFetchCourse(courseID);
  console.log(course)

  const [count, setCount] = useState<string>('');
  const [triggerCount, setTriggerCount] = useState<boolean>(true);

  function handleChangeSort(e: React.ChangeEvent<HTMLSelectElement>): void {
    const value = e.currentTarget.value as SortFilter;
    setSortFilter(value);
  }

  function handleChangeCourse(e: React.ChangeEvent<HTMLSelectElement>): void {
    const value = e.currentTarget.value as string;
    setCourseFilter(value);
  }

  useEffect(() => {
    async function fetchCount(): Promise<void> {
      const json = await axios.get(`${api_url}/api/course/${courseFilter}/application/open`);
      const data = json.data.data[0].count;
      setCount(data);
      setTriggerCount(false);
    }

    fetchCount();
  }, [courseFilter, triggerCount]);

  return (
    <div>
      <div className="flex flex-wrap p-1 space-x-2 bg-blue-100 shadow-md">
        <div className="flex flex-wrap w-8/12 m-auto">
          <div className="flex flex-col flex-1 ml-7 my-7">
            <div className="w-5/6 m-auto">
              <div className="mb-3 text-2xl font-semibold tracking-tight text-gray-600">
                Course Applications
              </div>
              <select
                className="w-1/2 text-lg"
                value={courseFilter}
                onChange={(e): void => handleChangeCourse(e)}
              >
                {courses.data.map((course: CourseData) => {
                  return (
                    <option value={course.courseID} key={course.courseID}>
                      {course.courseName}{' '}
                      {`${DecodeBitField(course.semesters).join(', ')} ${course.year}`}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="flex flex-col flex-1 flex-grow m-auto space-y-4">
            <div className="m-auto">
              <div className="text-xl font-semibold tracking-wide">
                Course Coordinator:{' '}
                <span className="font-normal">{course.data.courseCoordinators}</span>
              </div>
              <div className="text-xl font-semibold tracking-wide tk-neue-haas-grotesk-display">
                Current Available Spots:{' '}
                <span className="font-normal">{`${count}/${course.data.preferredMarkerCount}`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-6 text-2xl font-semibold">
        <div className="flex w-7/12 m-auto mt-10 mb-4">
          <div className="px-5 text-left">
            <Button
              statusFilter={statusFilter}
              requiredFilter={'Pending'}
              colour={'blue'}
              setStatusFilter={setStatusFilter}
              label={'Pending'}
            />
            <Button
              statusFilter={statusFilter}
              requiredFilter={'Approved'}
              colour={'green'}
              setStatusFilter={setStatusFilter}
              label={'Approved'}
            />
            <Button
              statusFilter={statusFilter}
              requiredFilter={'Denied'}
              colour={'red'}
              setStatusFilter={setStatusFilter}
              label={'Denied'}
            />
            <Button
              statusFilter={statusFilter}
              requiredFilter={''}
              colour={'gray'}
              setStatusFilter={setStatusFilter}
              label={'All'}
            />
          </div>
          <div className="flex-1"></div>
          <div className="justify-end">
            <label className="mx-4 text-lg font-semibold">Sort by:</label>
            <select className="text-lg" onChange={(e): void => handleChangeSort(e)}>
              <option value="Name">Name</option>
              <option value="Location">Location</option>
            </select>
          </div>
        </div>
        <Table
          courseID={courseFilter}
          setTriggerCount={setTriggerCount}
          statusFilter={statusFilter}
          sortFilter={sortFilter}
        />
      </div>
    </div>
  );
};

export default CourseDetail;
