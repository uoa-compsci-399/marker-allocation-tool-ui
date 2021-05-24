import { useState, useEffect } from 'react';
import TableHead from './TableHead';
import TableRow from './TableRow';
import { Applicant, TableProps } from 'models/TableProps';
import axios from 'axios';

const api_url = process.env.REACT_APP_API_DOMAIN;

function getStatus(val: number): string {
  if (val === 0) {
    return 'Pending';
  }
  if (val === 1) {
    return 'Approved';
  }
  return 'Denied';
}

function formatRows(data: any): Applicant[] {
  const Applications: Applicant[] = data.map((val: any) => {
    return {
      courseID: val.courseID,
      name: val.applicantName,
      location: `${val.inAuckland === 1 ? 'Auckland' : 'Remote'}`,
      email: `${val.email}`,
      status: `${getStatus(val.status)}`,
      applicationID: val.applicationID,
    };
  });
  return Applications;
}

const Table = ({ statusFilter, sortFilter, courseID }: TableProps): JSX.Element => {
  const [fetchTrigger, setIsFetching] = useState(true);
  const [rows, setData] = useState<string[]>([]);

  const applications: Applicant[] = formatRows(rows);

  useEffect(() => {
    async function fetchUrl(): Promise<void> {
      const json = await axios.get(`${api_url}/api/course/${courseID}/applications`);
      const values = json.data.data;
      setData(values);
    }

    fetchUrl();
    setIsFetching(false);
  }, [fetchTrigger, courseID, statusFilter, sortFilter]);
  //I want to trigger refetch if any of these parameters change

  return (
    <div className="flex flex-col w-7/12 m-auto">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-gray-200 shadow-md sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <TableHead />
              <tbody className="bg-white divide-y divide-gray-200">
                {applications
                  .filter((person: Applicant) => {
                    if (statusFilter === 'Approved') {
                      return person.status === 'Approved';
                    }
                    if (statusFilter === 'Pending') {
                      return person.status === 'Pending';
                    }
                    if (statusFilter === 'Denied') {
                      return person.status === 'Denied';
                    }
                    return true;
                  })
                  .sort((a: Applicant, b: Applicant) => {
                    if (sortFilter === 'Name') {
                      if (a.name < b.name) {
                        return -1;
                      }
                      if (a.name > b.name) {
                        return 1;
                      }
                      return 0;
                    }
                    if (sortFilter === 'Location') {
                      if (a.name === 'Auckland' && b.name === 'Remote') {
                        return -1;
                      }
                      if (a.name === 'Remote' && b.name === 'Auckland') {
                        return 1;
                      }
                      return 0;
                    }
                    return 0;
                  })
                  .map((person: Applicant) => {
                    return (
                      <TableRow
                        person={person}
                        courseID={courseID}
                        statusFilter={statusFilter}
                        sortFilter={sortFilter}
                        setIsFetching={setIsFetching}
                      />
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
