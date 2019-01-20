import User from '@/modules/CurrentUser/User';
import * as React from 'react';
import { Redirect, RouteComponentProps, withRouter } from 'react-router';

interface AnythingProps extends Partial<RouteComponentProps> {
}
@(withRouter as any)
export default class App extends React.Component<AnythingProps>{
	render() {
		const pathname = this.props.location && this.props.location.pathname;
		if (User.userInfo) {
			if (pathname === '/') {
				return <Redirect to="/catalog" />
			}
		} else {
			if (pathname !== '/') {
				return <Redirect to="/" />
			}
		}

		return this.props.children;
	}
}