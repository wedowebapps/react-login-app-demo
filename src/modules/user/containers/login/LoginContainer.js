import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginView from './LoginView';
import * as userActions from '../../actions';

export class LoginContainer extends Component {
  render() {
    return <LoginView {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  isLoading: state.user.isLoading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (data) => dispatch(userActions.loginUser(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
