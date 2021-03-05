import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashboardView from './DashboardView';

export class DashboardContainer extends Component {
	render() {
		return <DashboardView {...this.props} onButtonPress={this.onButtonPress} />;
	}
}

const mapStateToProps = state => ({
	user: state.user.user,
});

const mapDispatchToProps = dispatch => ({
	
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
