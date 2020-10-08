import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import UserList from './components/UsersList';
import Dashboard from './pages/Dashboard';
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'


function App() {
  console.log("____Rendering app_____")
  return (
    <BrowserRouter>
        <nav>
            <ul>
                <li><NavLink to='/login' activeclass="active">Log in</NavLink></li>
                <li><NavLink to='/signup' activeclass="active">Sign up</NavLink></li>
                <li><NavLink to="/users" activeclass="active">Users</NavLink></li>
                <li><NavLink to="/" activeclass="active">Landing Page</NavLink></li>
                <li><NavLink to="/dashboard" activeclass="active">Dashboard</NavLink></li>
            </ul>
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
            <Route path="/">
                <h1>Landing Page</h1>
            </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
