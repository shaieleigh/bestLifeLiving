import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'

const initState = {
  appToDoOV: true,
  usersLi: false,
  apptLi: false,
  toDoLi: false
}

  // const [apptToDoOV, setApptToDoOV] = React.useState(true);
  // const [usersLi, setUsersLi] = React.useState(false);
  // const [apptLi, setApptLi] = React.useState(false);
  // const [toDoLi, setToDoLi] = React.useState(false);

const store = configureStore(initState);
// if (ProcessingInstruction.env.Node_ENV !== 'production') {
//   window.store = store;
// }

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
