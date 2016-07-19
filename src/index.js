import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './redux/store';

import {
  App,
  DevTools
} from 'containers';

const store = configureStore();

const component = (
  <App />
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
