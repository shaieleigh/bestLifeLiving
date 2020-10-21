import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import FilterVintageIcon from '@material-ui/icons/FilterVintage';

import { setUser } from '../store/auth';
import Cookies from 'js-cookie';
import { setApptToDoOV, setUsersLi, setApptLi, setToDoLi } from '../store/assistantVirtual'

const useStyles = makeStyles((theme) => ({
  dashbrdIcon: {
    color: 'teal'
  },
  usersIcon: {
    color: 'mediumblue'
  },
  apptIcon: {
    color: 'mediumvioletred'
  },
  toDoIcon: {
    color: 'darkmagenta'
  },
  logOutIcon: {
    color: 'indigo'
  },

}));


export const SideNavBarList = () => {
  const classes = useStyles();
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
      <ListItem button onClick={handleApptToDoOV} className={classes.dashbrdIcon}>
        <ListItemIcon>
          <DashboardIcon className={classes.dashbrdIcon} />
        </ListItemIcon>
        <ListItemText primary="Daily Overview" />
      </ListItem>
      <ListItem button onClick={handleUsersLiCl} className={classes.usersIcon}>
        <ListItemIcon>
          <PeopleIcon className={classes.usersIcon}/>
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItem>
      <ListItem button onClick={handleApptLiCl} className={classes.apptIcon}>
        <ListItemIcon>
          <CalendarTodayIcon className={classes.apptIcon}/>
        </ListItemIcon>
        <ListItemText primary="Appointments" />
      </ListItem>
      <ListItem button onClick={handleToDoLiCl} className={classes.toDoIcon}>
        <ListItemIcon>
          <AssignmentIcon className={classes.toDoIcon} />
        </ListItemIcon>
        <ListItemText primary="To Dos" />
      </ListItem>
      <ListItem button onClick={logout} className={classes.logOutIcon}>
        <ListItemIcon>
          <FilterVintageIcon className={classes.logOutIcon}/>
        </ListItemIcon>
        <ListItemText primary="Log Out" />
      </ListItem>
    </div>
  )
}
