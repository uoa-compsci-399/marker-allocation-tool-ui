import { Link } from 'react-router-dom';
import logo from './assets/classe-logo.png';
import LoginButton from './HeaderLoginButton';
import Loggedin from './HeaderLoggedin';
import { useUserContext } from 'context/UserContext';

const Header = (): JSX.Element => {
  const { userData } = useUserContext();

  // To make it fixed at the top: sticky top-0 z-50
  return (
    <nav className="sticky top-0 z-50 flex flex-wrap items-center justify-between p-6 bg-blue-600 shadow-lg">
      <div className="flex items-center mr-6 text-white flex-no-shrink">
        <Link to="/dashboard">
          <img src={logo} alt="Classe Logo" className="max-h-16" />
        </Link>
        <Link to="/dashboard" className="m-4 text-3xl font-semibold tracking-tight">
          Classe
        </Link>
      </div>
      <div className="flex-grow block w-full lg:flex lg:items-center lg:w-auto" />
      <div>{userData ? <Loggedin userInfo={userData} /> : <LoginButton />}</div>
    </nav>
  );
};

export default Header;
