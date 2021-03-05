import React from 'react'

function DashboardView(props) {
	const { email, refresh_token} = props.user;
	return (
		<React.Fragment>
			Welcome, {email}<br/><br/><br/>
			Your token is :<br/><br/>
			<code>{refresh_token}</code>
		</React.Fragment>
	)
}

export default DashboardView
