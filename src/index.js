import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Using Material UI: http://www.material-ui.com
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin'; injectTapEventPlugin();

import configureStore from './redux/store';

import {
  App,
  DevTools
} from 'containers';

const store = configureStore();

const component = (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

const hook = 'app';

if (process.env.NODE_ENV === 'production') {
  render((
    <Provider store={store}>
      {component}
    </Provider>
  ), document.getElementById(hook));
} else {
  render((
    <Provider store={store}>
      <div>
        {component}
        <DevTools />
      </div>
    </Provider>
  ), document.getElementById(hook));
}
