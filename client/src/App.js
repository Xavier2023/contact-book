import React, {Fragment} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layouts/Alerts';
import PrivateRoute from './components/routing/PrivateRoute';

import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken';
import './App.css';


if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App =() => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <BrowserRouter>
            <Fragment>
              <Navbar />
                <div className="container">
                  <Alerts />
                  <Switch>
                    <PrivateRoute exact path= '/' component={Home} />
                    <Route exact path= '/about' component={About} />
                    <Route exact path= '/register' component={Register} />
                    <Route exact path= '/login' component={Login} />
                  </Switch>
                </div>
            </Fragment>
          </BrowserRouter>
        </AlertState>
      </ContactState>
    </AuthState>
    
  );
}

export default App;
