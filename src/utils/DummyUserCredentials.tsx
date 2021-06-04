import { UserRole } from '../models/UserRole';

//TODO: GET user role using /whoami from backend
//0: Marker, 1: MC, 2: CC
const USER_DETAILS: UserRole = {
  identity: Math.floor(Math.random() * 3).toString(),
  userId: '12345678',
};

export default USER_DETAILS;
