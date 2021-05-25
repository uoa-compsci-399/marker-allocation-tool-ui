import { UserInfo } from 'models/Auth';
import LogoutButton from './HeaderLogoutButton';

interface HeaderLoggedinProps {
  userInfo: UserInfo;
}

const HeaderLoggedin = ({ userInfo }: HeaderLoggedinProps): JSX.Element => {
  const { firstName, role } = userInfo;
  return (
    <div className="text-white text-lg mr-12">
      Hi, {firstName}! <span className="ml-4">You are a: {role}</span>
      <LogoutButton />
    </div>
  );
};

export default HeaderLoggedin;
