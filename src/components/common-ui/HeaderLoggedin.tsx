import { UserInfo } from 'models/Auth';
import LogoutButton from './HeaderLogoutButton';

interface HeaderLoggedinProps {
  userInfo: UserInfo;
}

const HeaderLoggedin = ({ userInfo }: HeaderLoggedinProps): JSX.Element => {
  const { firstName, role } = userInfo;
  return (
    <div className="text-white text-lg mr-12">
      Hi, {firstName}! You are a: {role}
      <LogoutButton />
    </div>
  );
};

export default HeaderLoggedin;
