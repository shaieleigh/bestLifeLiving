import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline';






const store = configureStore();
// if (ProcessingInstruction.env.Node_ENV !== 'production') {
//   window.store = store;
// }

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <>
        <CssBaseline />
        <App />
      </>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
