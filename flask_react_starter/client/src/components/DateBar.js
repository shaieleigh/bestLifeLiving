import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import GroupIcon from '@material-ui/icons/Group';
import DeleteIcon from '@material-ui/icons/Delete';

// import { setApptToDoOV, setUsersLi, setApptLi, setToDoLi } from '../store/AssistantVirtual'
// import ListSubheader from '@material-ui/core/ListSubheader';
// import AssignmentIcon from '@material-ui/icons/Assignment';


// import { setUser } from '../store/auth';
// import Cookies from 'js-cookie';

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
  create: {
    color: 'purple',
  },
  edit: {
    color: 'blue',
  },
  delete: {
    color: 'red',
  },
  connectedF: {
    color: 'orange',
  },

}));


export const DateBar = () => {
  const classes = useStyles();
  const usersLi = useSelector(state => state.assistV.usersLi)
  const showCreateModal = useSelector(state => state.assistV.createModal)
  const date = new Date();
  const day = ('0' + date.getDate()).slice(-2);
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear();
  const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday']
  const wDay = weekday[date.getDay()]
  const nowDate = wDay + ' ' + month + '-' + day + '-' + year

  const handleShowCreateModal = () => {
    if(!showCreateModal) {
      showCreateModal = true;
    } else {
      showCreateModal = false;
    }
  }

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <ListItem>
            {nowDate}
        </ListItem>
        <ListItem button
          className={clsx(usersLi && classes.menuButtonHidden)} onClick={handleShowCreateModal} >
          <ListItemIcon >
            <AddIcon className={classes.create} />
          </ListItemIcon>
          <ListItemText primary="Create" className={classes.create} />
        </ListItem>
        <ListItem button
          className={clsx(usersLi && classes.menuButtonHidden)}>
          <ListItemIcon>
            <EditIcon className={classes.edit} />
          </ListItemIcon>
          <ListItemText primary=" Edit" className={classes.edit} />
        </ListItem>
        <ListItem button
            className={clsx(usersLi && classes.menuButtonHidden)}>
          <ListItemIcon>
            <DeleteIcon className={classes.delete} />
          </ListItemIcon>
          <ListItemText primary="Delete" className={classes.delete} />
        </ListItem>
        <ListItem button
            className={clsx(!usersLi && classes.menuButtonHidden)}>
          <ListItemIcon>
            <GroupIcon className={classes.connectedF} />
          </ListItemIcon>
          <ListItemText primary="Connected Friends" className={classes.connectedF} />
        </ListItem>
      </Paper>
    </Grid>
  )
}
