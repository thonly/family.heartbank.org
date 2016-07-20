import headers from '../../../config/headers';

import React from 'react';
import Helmet from 'react-helmet';

import {
  /* Containers to import */
  SplashPage
} from 'containers';

export default class AppContainer extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Helmet {...headers} />
        <SplashPage />
      </div>
    )
  }
}
