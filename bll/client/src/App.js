import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import UserList from './components/UsersList';
import Dashboard from './pages/Dashboard';
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Splash from './pages/Splash'
import Appointments from './components/Appointments'
import ToDos from './components/ToDos'


function App() {
//   console.log("____Rendering app_____")

  return (
    <BrowserRouter>
        <Switch>
            <Route path='/dashboard'>
                <Dashboard />
            </Route>
            <Route path='/login'>
                <LogIn />
            </Route>
            <Route path='/signup'>
                <SignUp />
            </Route>
            <Route path="/users">
                <UserList />
            </Route>
            <Route path="/appointments">
                <Appointments />
            </Route>
            <Route path="/todos">
                <ToDos />
            </Route>
            <Route path="/">
                <Splash />
            </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
