import { useState, useEffect } from 'react';
import { Auth } from 'models/Auth';
import axios from 'axios';

const api_url = process.env.REACT_APP_API_DOMAIN;

// How actual 'data' looks like:
// {
//   authenticated: true,
//   user: {
//     userID: 7,
//     firstName: 'Jim',
//     lastName: 'Park',
//     email: 'jpar000@awklanduni.ac.nz',
//     upi: 'jpar000',
//     role: 'Marker',
//   },
// }

function useFetchLoginStatus(): [Auth, boolean] {
  const [user, setUser] = useState<any>();
  const [loginStatus, setLoginStatus] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const json = await axios.get(`${api_url}/api/authn/whoami`, { withCredentials: true });
      const data = json.data;
      setUser(data.user);
      setLoginStatus(data.authenticated);
    }

    fetchData();
  }, []);

  return [user, loginStatus];
}

export default useFetchLoginStatus;
