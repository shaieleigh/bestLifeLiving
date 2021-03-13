import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom'
import Cookies from 'js-cookie';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FilterVintageIcon from '@material-ui/icons/FilterVintage';

import { setUser } from '../store/auth';
import {
  pullAppointments,
  pullAppointmentCats,
  setShowCreateModal,
  setShowDeleteModal,
  setShowEditModal,
  setShowQuoteModal,
  pullToDoTypes,
  pullToDos } from '../store/assistantVirtual'
import { SideNavBarList } from '../components/SideNavBarList'
import ToDos from '../components/ToDos'
import Appointments from '../components/Appointments'
import UsersList from '../components/UsersList';
import ToDoOV from '../components/ToDoOV'
import ApptOV from '../components/ApptOV'
import { DateBar } from '../components/DateBar'
import CreateModal from '../components/CreateModal'
import DeleteModal from '../components/DeleteModal'
import EditModal from '../components/EditModal'
import Quote from '../components/Quote'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Best Life Living
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundImage: 'repeating-radial-gradient(rgba(255, 0, 0, .8), rgba(255, 165, 0, .8), rgba(255, 255, 0, .8), rgba(0, 128, 0, .8), rgba(0, 0, 255, .8), rgba(75, 0, 130, .8), rgba(238, 138, 238, .8) 10%)',
    height: '100%',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    backgroundColor: 'rgba(0, 128, 128, .8)',

  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  heading: {
    backgroundColor: 'rgba(255,255,255, .7)',
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
    flexGrow: 5,
  },
  drawerPaper: {
    position: 'relative',
    top: '80px',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    height: '80vh',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: 'rgba(255,255,255, .9)',
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
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(2),
  },
  paper: {
    paddingLeft: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    backgroundColor: 'rgba(255,255,255, .9)',
  },
  fixedHeight: {
    height: 310,
  },
  logoutButton: {
    flexGrow: 2,
    justifyContent: 'flex-end',
    width: '5%'
  },
  logoutBtnIcon: {
    color: 'white',
    textAlign: 'center',
  },
  logoutBtnText: {
    color: 'white',
    textAlign: 'center',
  },

}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const currentUserId = useSelector(state => state.auth.id);
  const showCreateModal = useSelector(state => state.assistV.createModal)
  const showEditModal = useSelector(state => state.assistV.editModal)
  const showDeleteModal = useSelector(state => state.assistV.deleteModal)
  const showQuoteModal = useSelector(state => state.assistV.quoteModal)
  const apptToDoOV = useSelector(state => state.assistV.apptToDoOV);
  const usersLi = useSelector(state => state.assistV.usersLi)
  const apptLi = useSelector(state => state.assistV.apptLi)
  // const appointList = useSelector(state => state.assistV.appointments)
  // const toDoLi = useSelector(state => state.assistV.toDoLi)
  const dispatch = useDispatch();

  useEffect(() => {
        dispatch(pullAppointments());
        dispatch(pullAppointmentCats());
        dispatch(pullToDos());
        dispatch(pullToDoTypes())
      });

  const logout = async () => {
    await fetch('/api/users/logout', {
      method: 'DELETE',
      headers: {
        'XSRF-TOKEN': Cookies.get('XSRF-TOKEN')
      }
    });
    dispatch(setUser({}));
  }



  if (!currentUserId) return <Redirect to='login'/>

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };


  const handleHideModal = (e) => {
    if(showCreateModal) {
      dispatch(setShowCreateModal(false));
    } else if (showEditModal) {
      dispatch(setShowEditModal(false));
    } else if (showDeleteModal) {
      dispatch(setShowDeleteModal(false));
    } else if (showQuoteModal) {
      dispatch(setShowQuoteModal(false));
    } else {
      return null;
    }
  }

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <>
      <div className={classes.root} onClick={handleHideModal}>
        <CssBaseline />
        <AppBar position="absolute" className={classes.heading}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
            <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" noWrap
              className={classes.title}>
              Demo's Best Life Dashboard
            </Typography>
            <ListItem button onClick={logout} className={classes.logoutButton}>
              <ListItemIcon>
                <FilterVintageIcon className={classes.logoutBtnIcon} />
              </ListItemIcon>
              <ListItemText primary="Log Out" className={classes.logoutBtnText} />
            </ListItem>
            {/* <button onClick={logout}>Log out</button> */}
            {/* <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
             </IconButton> */}
          </Toolbar>
        </AppBar>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <DateBar />
              <Grid
                item xs={12} md={6} lg={6}
                className={clsx(!apptToDoOV && classes.menuButtonHidden )}
              >
                <Paper className={fixedHeightPaper}>
                  <ApptOV />
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={6}
                className={clsx(!apptToDoOV && classes.menuButtonHidden )}
              >
                <Paper className={fixedHeightPaper}>
                  <ToDoOV />
                </Paper>
              </Grid>
              <Grid item xs={12}
                className={clsx(!usersLi && classes.menuButtonHidden )}
              >
                <Paper className={fixedHeightPaper}>
                  <UsersList />
                </Paper>
              </Grid>
              <Grid item xs={12}
                className={clsx(!apptLi && classes.menuButtonHidden )}
              >
                <Paper className={fixedHeightPaper}>
                  <Appointments />
                </Paper>
              </Grid>
              <ToDos />
              {/* <Grid item xs={12} md={6} lg={6}
                className={clsx(!toDoLi && classes.menuButtonHidden )}
              >
                <Paper className={fixedHeightPaper}>
                  <ToDos />
                </Paper>
              </Grid> */}
            </Grid>
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
        </main>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronRightIcon className={clsx(!open && classes.menuButtonHidden)} />
            </IconButton>
            <IconButton onClick={handleDrawerOpen}>
              <ChevronLeftIcon className={clsx(open && classes.menuButtonHidden)} />
            </IconButton>
          </div>
          <Divider />
          <List><SideNavBarList/></List>
          {/* <Divider /> */}
          {/* <List>{secondaryListItems}</List> */}
        </Drawer>
      </div>
      {showCreateModal ? <CreateModal /> : null}
      {showEditModal ? <EditModal /> : null}
      {showDeleteModal ? <DeleteModal /> : null}
      {showQuoteModal ? <Quote /> : null}
    </>
  );
}
