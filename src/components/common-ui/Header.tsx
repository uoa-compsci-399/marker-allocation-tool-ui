// import { useState } from 'react';
import logo from './assets/classe-logo.png';
import LoginButton from './HeaderLoginButton';
// import Loggedin from './HeaderLoggedin';

// import useFetchLoginStatus from 'hooks/useFetchLoginStatus';
import { useUserContext } from 'context/UserContext';

const Header = (): JSX.Element => {
  // const [user, loginStatus] = useFetchLoginStatus();
  const { authenticated, userData, setUserData } = useUserContext();
  console.log(authenticated);
  // console.log(userData, setUserData);

  // To make it fixed at the top: sticky top-0 z-50
  return (
    <nav className="sticky top-0 z-50 flex flex-wrap items-center justify-between p-6 bg-blue-600 shadow-lg">
      <div className="flex items-center mr-6 text-white flex-no-shrink">
        <a href="/dashboard">
          <img src={logo} alt="Classe Logo" className="max-h-16" />
        </a>
        <a href="/dashboard" className="m-4 text-3xl font-semibold tracking-tight">
          Classe
        </a>
      </div>
      <div className="flex-grow block w-full lg:flex lg:items-center lg:w-auto" />
      <button onClick={(): void => setUserData('userData changed!')}>Click</button>
      <div>{userData ? userData : <LoginButton />}</div>
    </nav>
  );
};

export default Header;
