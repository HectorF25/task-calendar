import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import Home from './views/NavBar';

function App() {
  return (
    <Router>
      <Route component={Home} path={'/home'} />
    </Router> 
  );
}

export default App;
