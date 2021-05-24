type Modify<T, R> = Omit<T, keyof R> & R;

export interface Applicant {
  courseID: string;
  name: string;
  location: 'Auckland' | 'Remote';
  email: string;
  status: 'Approved' | 'Pending' | 'Denied';
  applicationID: string;
}

export interface TableProps {
  statusFilter: string;
  sortFilter: string;
  courseID: string;
}

export type TableRowProps = Modify<
  TableProps,
  {
    person: Applicant;
    courseID: string;
    setIsFetching: any;
  }
>;

export type StatusFilter = 'Approved' | 'Pending' | 'Denied' | '';

export type SortFilter = 'Name' | 'Location' | 'Date Submitted' | '';
