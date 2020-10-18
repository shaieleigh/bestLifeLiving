import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Drawer from '@material-ui/core/Drawer';
// import Box from '@material-ui/core/Box';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import Badge from '@material-ui/core/Badge';
// import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';

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
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 340,
  },
}));






export default function  ToDos () {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [toDosLi, setToDo] = useState([]);
  const toDoLi = useSelector(state => state.assistV.toDoLi);

  useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/todos');
            const data = await response.json();
            setToDo(data.todos);
        }
        fetchData();
    }, []);

  const types = [null, 'To Do (General)', 'Groceries', 'High Priority', 'Low Priority', 'Extra Curricular Projects', 'Bucket List']
  const toDoList = {}
  toDosLi.forEach(ele => {
    if (!toDoList[types[ele.typeId]]) {
      toDoList[types[ele.typeId]] = []
      toDoList[types[ele.typeId]].push(<p key={ele.id}>{ele.item}</p>)
    } else {
      toDoList[types[ele.typeId]].push(<p key={ele.id}>{ele.item}</p>)
    }

  })

  types.shift()
  const todos = types.map(todoCat => {

    return (
      <Grid item xs={12} md={6} lg={6}
      className={clsx(!toDoLi && classes.menuButtonHidden )}
      key={types.indexOf(todoCat)}
      >
        <Paper className={fixedHeightPaper}>
          <h1>{todoCat}</h1>
          {toDoList[todoCat]}
        </Paper>
      </Grid>
    )
  })

  return (
    <>
     {todos}
    </>
  )

}

// const userComponents = users.map((user) => <User key={user.id} user={user} />)
//     console.log("____Rendering User List____")
//     return (
//         <>
//             <h1>User List: </h1>
//             {userComponents}
//         </>
//         );
