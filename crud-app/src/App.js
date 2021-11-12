import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
