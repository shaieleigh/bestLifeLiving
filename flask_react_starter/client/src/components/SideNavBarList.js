import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import FilterVintageIcon from '@material-ui/icons/FilterVintage';

import { setUser } from '../store/auth';
import Cookies from 'js-cookie';

export const SideNavBarList = () => {
  // const [apptToDoOV, setApptToDoOV] = React.useState(true);
  // const [usersLi, setUsersLi] = React.useState(false);
  // const [apptLi, setApptLi] = React.useState(false);
  // const [toDoLi, setToDoLi] = React.useState(false);
  const dispatch = useDispatch();

  const logout = async () => {
    await fetch('/api/users/logout', {
      method: 'DELETE',
      headers: {
        'XSRF-TOKEN': Cookies.get('XSRF-TOKEN')
      }
    });
    dispatch(setUser({}));
    }


  const handleApptToDoOV = (e) => {
    setApptToDoOV(true)
    setUsersLi(false)
    setToDoLi(false)
    setApptLi(false)
  }

  const handleUsersLiCl = (e) => {
    setApptToDoOV(false)
    setUsersLi(true)
    setToDoLi(false)
    setApptLi(false)
  }

  const handleToDoLiCl = (e) => {
    setApptToDoOV(false)
    setUsersLi(false)
    setToDoLi(true)
    setApptLi(false)
  }

  const handleApptLiCl = (e) => {
    setApptToDoOV(false)
    setUsersLi(false)
    setToDoLi(false)
    setApptLi(true)
  }


  return (
    <div>
      <ListItem button onClick={handleApptToDoOV}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button onClick={handleUsersLiCl}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItem>
      <ListItem button onClick={handleApptLiCl}>
        <ListItemIcon>
          <CalendarTodayIcon />
        </ListItemIcon>
        <ListItemText primary="Appointments" />
      </ListItem>
      <ListItem button onClick={handleToDoLiCl}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="To Dos" />
      </ListItem>
      <ListItem button onClick={logout}>
        <ListItemIcon>
          <FilterVintageIcon />
        </ListItemIcon>
        <ListItemText primary="Log Out" />
      </ListItem>
    </div>
  )
}
