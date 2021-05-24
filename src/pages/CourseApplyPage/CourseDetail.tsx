import { CoursesDetails } from 'models/CoursesDetails';
import { WorkloadDistribution } from 'models/WorkloadDistribution';

interface Workload {
  workload: WorkloadDistribution[];
}

function ifWorkload(workloads: WorkloadDistribution[]): boolean {
  return workloads[0].assignment !== '' || workloads[0].workload !== '';
}

const Workloads = ({ workload }: Workload): JSX.Element => {
  const renderWorkloads = workload.map(({ assignment, workload }: WorkloadDistribution) => (
    <div className="grid min-w-full grid-cols-2 row-span-1 gap-7">
      <div className="text-sm text-gray-500">{assignment}</div>
      <div className="text-sm text-gray-500">{workload}</div>
    </div>
  ));
  return <div>{renderWorkloads}</div>;
};

const CourseDetail = ({
  courseName,
  expectedWorkload,
  workloadDistributions,
}: CoursesDetails): JSX.Element => {
  const workloads = JSON.parse(workloadDistributions).data;
  return (
    <div>
      {expectedWorkload || ifWorkload(workloads) ? (
        <div className="my-4">
          {expectedWorkload ? (
            <div className="text-sm">{`${courseName}: ${expectedWorkload} hours required`}</div>
          ) : (
            <div className="text-sm">{`${courseName}`}</div>
          )}
          {ifWorkload(workloads) ? (
            <div>
              {' '}
              <div className="grid min-w-full grid-cols-2 row-span-1 gap-7 mb-1">
                <div className="text-sm text-gray-700">Assignment</div>
                <div className="text-sm text-gray-700">Workload (hours)</div>
              </div>
              <Workloads workload={workloads} />{' '}
            </div>
          ) : null}
          <hr className="mt-2" />
        </div>
      ) : null}
    </div>
  );
};

export default CourseDetail;
