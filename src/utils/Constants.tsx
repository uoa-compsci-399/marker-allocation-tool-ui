import { UserRole } from '../models/UserRole';

export const NULL_COURSE_ID = '-9999';

//TODO: GET user role using /whoami from backend
//0: Marker, 1: MC, 2: CC
export const USER_DETAILS: UserRole = {
  identity: Math.floor(Math.random() * 3).toString(),
  userId: '12345678',
};
