import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import Header from 'components/common-ui/Header';
import Routes from './routes';
import { UserContext } from 'context/UserContext';

const api_url = process.env.REACT_APP_API_DOMAIN;

function App(): JSX.Element {
  const [userData, setUserData] = useState(undefined);
  useEffect(() => {
    async function fetchUserData(): Promise<void> {
      const json = await axios.get(`${api_url}/api/authn/whoami`, { withCredentials: true });
      const data = json.data;
      setUserData(data.user);
    }

    fetchUserData();
  }, []);

  return (
    <Router>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Header />
        <Routes />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
