import React from 'react';
import useFetchLoginStatus from 'hooks/useFetchLoginStatus';

// TODO: <a> tag is for redirecting the user to /api/authn/login
// once logged in redirect the user back to client side with the auth data

const HeaderLoginButton = (): JSX.Element => {
  return (
    <div>
      {/* <a
        className="text-white hover:text-gray-300 mr-12 text-lg"
        href={`${process.env.REACT_APP_API_DOMAIN}/api/authn/login`}
      >
        Login
      </a> */}
      <button
        className="text-white hover:text-gray-300 mr-12 text-lg"
        /* FIXME: breaking the Rules of Hook */
        onClick={useFetchLoginStatus}
      >
        Login
      </button>
    </div>
  );
};

export default HeaderLoginButton;
