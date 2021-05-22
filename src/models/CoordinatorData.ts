import { NULL_USER_ID } from '../utils/Constants';

export interface CoordinatorData {
  userID: string;
  firstName: string;
  lastName: string;
  upi: string;
  email: string;
  courses?: string;
}

export const initialValues: CoordinatorData = {
  userID: NULL_USER_ID,
  firstName: '',
  lastName: '',
  upi: '',
  email: '',
  courses: '',
};
