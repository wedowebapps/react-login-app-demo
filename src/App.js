import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from './modules/user/actions';
import AppLayout from './layouts/AppLayout';
import AuthLayout from './layouts/AuthLayout';

import NormalizeStyles from './assets/styles/NormalizeStyles';
import Router from './router';

class App extends Component {

  componentDidMount() {
    this.props.restoreSession();
  }

  render() {
    return (
      <React.Fragment>
        <NormalizeStyles />
        {this.props.user.isLoggedIn ? (
          <AppLayout>
            <Router />
          </AppLayout>
        ) : (
          <AuthLayout>
            <Router />
          </AuthLayout>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    user: user,
    isLoading: user.isLoading,
  };
};

const mapActionsToProps = (dispatch) => ({
  restoreSession: () => dispatch(userActions.restoreSession()),
});

export default connect(mapStateToProps, mapActionsToProps)(App);
