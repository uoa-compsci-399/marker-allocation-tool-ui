import { useState, useRef, useEffect } from 'react';
import TableHead from './TableHead';
import { Applicant, TableProps } from 'models/TableProps';
import StatusLabel from './StatusLabel';
import { useHistory } from 'react-router-dom';
import { ReactComponent as ViewIcon } from './view_icon.svg';
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

function changeStatus(val: '1' | '-1', courseID: string, applicationID: string): void {
  const statusBody = {
    applicationID: applicationID,
    courseID: courseID,
    status: val,
  };

  axios.post(`${api_url}/api/status`, statusBody);
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

const Table = (data: TableProps): JSX.Element => {
  const [showPopper, setShowPopper] = useState(false);
  const [applicationID, setApplicationID] = useState(''); //to track selected application
  const history = useHistory();

  const [fetchTrigger, setIsFetching] = useState(true);
  const [rows, setData] = useState<string[]>([]);

  const buttonRef = useRef(null);
  const applications: Applicant[] = formatRows(rows);

  useEffect(() => {
    async function fetchUrl(): Promise<void> {
      const json = await axios.get(`${api_url}/api/course/${data.courseID}/applications`);
      const values = json.data.data;
      setData(values);
    }

    fetchUrl();
    setIsFetching(false);
  }, [fetchTrigger, data.courseID, data.statusFilter, data.sortFilter]);
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
                    if (data.statusFilter === 'Approved') {
                      return person.status === 'Approved';
                    }
                    if (data.statusFilter === 'Pending') {
                      return person.status === 'Pending';
                    }
                    if (data.statusFilter === 'Denied') {
                      return person.status === 'Denied';
                    }
                    return true;
                  })
                  .sort((a: Applicant, b: Applicant) => {
                    if (data.sortFilter === 'Name') {
                      if (a.name < b.name) {
                        return -1;
                      }
                      if (a.name > b.name) {
                        return 1;
                      }
                      return 0;
                    }
                    if (data.sortFilter === 'Location') {
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
                      <tr key={person.applicationID}>
                        <td className="w-1/5 px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{person.name}</div>
                              <div className="text-sm text-gray-500">{person.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="w-1/6 px-3 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{person.location}</div>
                        </td>
                        <td className="w-1/6 px-3 py-4 whitespace-nowrap">
                          <StatusLabel label={person.status} />
                        </td>
                        <td className="w-1/6 py-4 text-base font-medium whitespace-nowrap">
                          <div className="flex space-x-3 text-left">
                            <button
                              className="flex text-indigo-600 hover:text-indigo-900"
                              onClick={(): void => {
                                history.push(
                                  `/courses/${data.courseID}/applications/${person.applicationID}`
                                );
                              }}
                            >
                              <ViewIcon />
                            </button>
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-900"
                              ref={buttonRef}
                              onClick={(): void => {
                                setShowPopper(!showPopper);
                                setApplicationID(person.applicationID);
                              }}
                            >
                              Respond
                            </button>
                            {showPopper && applicationID === person.applicationID ? (
                              <>
                                <button
                                  className="font-medium text-green-500 hover:text-green-800"
                                  onClick={(): void => {
                                    changeStatus('1', data.courseID, applicationID);
                                    setIsFetching(true);
                                    setShowPopper(false);
                                  }}
                                >
                                  Approve
                                </button>
                                <button
                                  className="font-medium text-red-500 hover:text-red-800"
                                  onClick={(): void => {
                                    changeStatus('-1', data.courseID, applicationID);
                                    setIsFetching(true);
                                    setShowPopper(false);
                                  }}
                                >
                                  Deny
                                </button>
                              </>
                            ) : null}
                          </div>
                        </td>
                      </tr>
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
