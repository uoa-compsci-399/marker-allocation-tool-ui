import { useUserContext } from 'context/UserContext';
import axios from 'axios';

const api_url = process.env.REACT_APP_API_DOMAIN;
const login = async (): Promise<void> => {
  const json = await axios.get(`${api_url}/api/authn/whoami`, { withCredentials: true });
  const data = json.data;
  return data;
};

// TODO: <a> tag is for redirecting the user to /api/authn/login
// once logged in redirect the user back to client side with the auth data

const HeaderLoginButton = (): JSX.Element => {
  const { setUserData } = useUserContext();

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
        onClick={async (): Promise<any> => {
          const userData: any = await login();
          // console.log('From Login Button:', userData);
          setUserData(userData.user);
        }}
      >
        Login
      </button>
    </div>
  );
};

export default HeaderLoginButton;
