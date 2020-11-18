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
        <nav>
            {/* <ul>
                <li><NavLink to="/" activeclass="active">Landing Page</NavLink></li>
                <li><NavLink to='/signup' activeclass="active">Sign up</NavLink></li>
                <li><NavLink to='/login' activeclass="active">Log in</NavLink></li>
                <li><NavLink to="/users" activeclass="active">Users</NavLink></li>
                <li><NavLink to="/dashboard" activeclass="active">Dashboard</NavLink></li>
                <li><NavLink to="/appointments" activeclass="active">Appointments</NavLink></li>
                <li><NavLink to="/todos" activeclass="active">To Dos</NavLink></li>
            </ul> */}

        </nav>
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
