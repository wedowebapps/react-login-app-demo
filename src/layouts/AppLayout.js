import React, { Component } from 'react';
import { connect } from 'react-redux';
import Toast from '../components/App/Toast';
import * as userActions from '../modules/user/actions';
import { AppContainer, AppContent } from './styles';
import Topbar from '../components/App/Topbar';

export class AppLayout extends Component {
  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        <Toast />
        <AppContainer>
          <Topbar logoutUser={this.props.logoutUser} />
          <AppContent>{children}</AppContent>
        </AppContainer>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: (data) => dispatch(userActions.logoutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
