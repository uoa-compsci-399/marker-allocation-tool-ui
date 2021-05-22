import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

function App(): JSX.Element {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
