import { UserStore } from '@/modules/CurrentUser/UserStore';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { Redirect, RouteComponentProps, withRouter } from 'react-router';

interface AnythingProps extends Partial<RouteComponentProps> {
	userStore?: UserStore
}
@(withRouter as any)
@inject('userStore')
@observer
export default class App extends React.Component<AnythingProps>{
	get userStore() {
		return this.props.userStore!;
	}

	render() {
		const { user } = this.userStore
		const pathname = this.props.location && this.props.location.pathname;
		if (user) {
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
