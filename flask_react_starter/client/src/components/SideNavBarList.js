import React from 'react';
import { useDispatch } from 'react-redux';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import FilterVintageIcon from '@material-ui/icons/FilterVintage';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import PersonIcon from '@material-ui/icons/Person';
// import LayersIcon from '@material-ui/icons/Layers';

import { setUser } from '../store/auth';
import Cookies from 'js-cookie';
import { setApptToDoOV, setUsersLi, setApptLi, setToDoLi } from '../store/assistantVirtual'

export const SideNavBarList = () => {
  // const [apptToDoOV1, setApptToDoOV] = React.useState(true);
  // const [usersLi2, setUsersLi] = React.useState(false);
  // const [apptLi2, setApptLi] = React.useState(false);
  // const [toDoLi1, setToDoLi] = React.useState(false);
  // const currentUserId = useSelector(state => state.auth.id);
  // const apptToDoOV = useSelector(state => state.assistV.apptToDoOV);
  // const usersLi = useSelector(state => state.assistV.usersLi)
  // const apptLi = useSelector(state => state.assistV.apptLi)
  // const toDoLi = useSelector(state => state.assistV.toDoLi)
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
    e.preventDefault();
    dispatch(setApptToDoOV(true))
    dispatch(setUsersLi(false))
    dispatch(setToDoLi(false))
    dispatch(setApptLi(false))
  }

  const handleUsersLiCl = (e) => {
    e.preventDefault();
    dispatch(setApptToDoOV(false))
    dispatch(setUsersLi(true))
    dispatch(setToDoLi(false))
    dispatch(setApptLi(false))
  }

  const handleToDoLiCl = (e) => {
    e.preventDefault();
    dispatch(setApptToDoOV(false))
    dispatch(setUsersLi(false))
    dispatch(setToDoLi(true))
    dispatch(setApptLi(false))
  }

  const handleApptLiCl = (e) => {
    e.preventDefault();
    dispatch(setApptToDoOV(false))
    dispatch(setUsersLi(false))
    dispatch(setToDoLi(false))
    dispatch(setApptLi(true))
  }


  return (
    <div>
      <ListItem button onClick={handleApptToDoOV}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Daily Overview" />
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
