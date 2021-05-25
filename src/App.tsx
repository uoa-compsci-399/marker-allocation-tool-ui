import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from 'components/common-ui/Header';
import Routes from './routes';
import { UserContext } from 'context/UserContext';

function App(): JSX.Element {
  const [userData, setUserData] = useState(undefined);

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
