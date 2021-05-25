import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import StatusLabel from './StatusLabel';
import { ReactComponent as ViewIcon } from './view_icon.svg';
import { TableRowProps } from 'models/TableProps';
import axios from 'axios';

const api_url = process.env.REACT_APP_API_DOMAIN;

function changeStatus(val: '1' | '-1', courseID: string, applicationID: string): void {
  const statusBody = {
    applicationID: applicationID,
    courseID: courseID,
    status: val,
  };

  axios.post(`${api_url}/api/status`, statusBody);
}

const TableRow = ({
  person,
  courseID,
  statusFilter,
  sortFilter,
  setIsFetching,
  setTriggerCount,
}: TableRowProps): JSX.Element => {
  const [showPopper, setShowPopper] = useState(false);
  const [applicationID, setApplicationID] = useState(''); //to track selected application
  const history = useHistory();
  const buttonRef = useRef(null);

  useEffect(() => {
    setShowPopper(false);
  }, [courseID, statusFilter, sortFilter]);
  // Triggers if these params change

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
              history.push(`/courses/${courseID}/applications/${person.applicationID}`);
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
                  changeStatus('1', courseID, applicationID);
                  setIsFetching(true);
                  setTriggerCount(true);
                  setShowPopper(false);
                }}
              >
                Approve
              </button>
              <button
                className="font-medium text-red-500 hover:text-red-800"
                onClick={(): void => {
                  changeStatus('-1', courseID, applicationID);
                  setIsFetching(true);
                  setTriggerCount(true);
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
};

export default TableRow;
