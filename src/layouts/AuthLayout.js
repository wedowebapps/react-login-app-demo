import React, { Component } from 'react';

import Toast from '../components/App/Toast';

export class AuthLayout extends Component {
  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <Toast />
        {children}
      </React.Fragment>
    );
  }
}

export default AuthLayout;
