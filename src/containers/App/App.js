import headers from '../../../config/headers';

import React from 'react';
import Helmet from 'react-helmet';

import {
  /* Containers to import */
} from 'containers';

export default class AppContainer extends React.Component {
  render() {
    return (
      <div>
        <Helmet {...headers} />
        <div>Hello, world!</div>
      </div>
    )
  }
}
