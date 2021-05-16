import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import JobBoard from './components/JobBoard';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Navbar />
            <JobBoard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
