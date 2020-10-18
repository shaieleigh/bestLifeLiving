import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import GroupIcon from '@material-ui/icons/Group';


import { setUser } from '../store/auth';
import Cookies from 'js-cookie';
import { setApptToDoOV, setUsersLi, setApptLi, setToDoLi } from '../store/AssistantVirtual'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    top: '80px',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(),
    display: 'flex',
    overflow: 'auto',
    // flexDirection: 'column',
  },
  fixedHeight: {
    height: 340,
  },

}));


export const DateBar = () => {

  const classes = useStyles();
  const currentUserId = useSelector(state => state.auth.id);
  const apptToDoOV = useSelector(state => state.assistV.apptToDoOV);
  const usersLi = useSelector(state => state.assistV.usersLi)
  const apptLi = useSelector(state => state.assistV.apptLi)
  const toDoLi = useSelector(state => state.assistV.toDoLi)
  const dispatch = useDispatch();

  const date = new Date();
  const day = ('0' + date.getDate()).slice(-2);
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear();
  const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday']
  const wDay = weekday[date.getDay()]
  const nowDate = wDay + ' ' + month + ' ' + day + ' ' + year

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
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <ListItem>
            {nowDate}
        </ListItem>
        <ListItem button
          className={clsx(usersLi && classes.menuButtonHidden)}>
          <ListItemIcon >
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="Create New" />
        </ListItem>
        <ListItem button
          className={clsx(usersLi && classes.menuButtonHidden)}>
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          <ListItemText primary=" Edit" />
        </ListItem>
        <ListItem button
            className={clsx(usersLi && classes.menuButtonHidden)}>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText primary="Delete" />
        </ListItem>
        <ListItem button
            className={clsx(!usersLi && classes.menuButtonHidden)}>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Connected Friends" />
        </ListItem>
      </Paper>
    </Grid>
  )
}
