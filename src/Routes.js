import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LoginScreen from './components/LoginScreen';
import JobBoard from './components/JobBoard';
import Navbar from './components/Navbar';

import firebase from './firebase/index';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';

const auth = firebase.auth();

export default function Routes() {
  const [user] = useAuthState(auth);

  return (
    <React.Fragment>
      {user ? (
        <React.Fragment>
          <nav>
            <Navbar user={user} />
          </nav>
          <Switch>
            <Route
              exact
              path='/job-board'
              render={(routeProps) => <JobBoard {...routeProps} user={user} />}
            />
          </Switch>
          <Redirect from='/' to='/job-board' />
        </React.Fragment>
      ) : (
        // **** ROUTES WHEN USER NOT LOGGED IN
        <Switch>
          <Route
            exact
            path='/login'
            render={(routeProps) => <LoginScreen {...routeProps} />}
          />
          <Redirect from='/' to='/login' />
        </Switch>
      )}
    </React.Fragment>
  );
}
