import { UserInfo } from 'models/Auth';
import LogoutButton from './HeaderLogoutButton';

interface HeaderLoggedinProps {
  userInfo: UserInfo;
}

const HeaderLoggedin = ({ userInfo }: HeaderLoggedinProps): JSX.Element => {
  const { firstName, role } = userInfo;
  const friendlyRole =
    { CourseCoordinator: 'Course Coordinator', MarkerCoordinator: 'Marker Coordinator' }[role] ||
    role;
  return (
    <div className="text-white text-lg mr-12">
      Hi, {firstName}! <span className="ml-4">You are a {friendlyRole}</span>
      <LogoutButton />
    </div>
  );
};

export default HeaderLoggedin;
