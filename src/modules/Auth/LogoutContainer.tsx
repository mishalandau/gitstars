import LogoutView from '@/modules/Auth/components/Logout';
import { UserStore } from '@/modules/CurrentUser/UserStore';
import { boundMethod } from 'autobind-decorator';
import { inject, observer } from 'mobx-react'
import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

interface AuthFormContainerState {
	username: string;
}

interface AnythingProps extends Partial<RouteComponentProps> {
	userStore?: UserStore
}
@(withRouter as any)
@inject('userStore')
@observer
class LogoutContainer extends React.Component<AnythingProps, AuthFormContainerState> {
	get userStore() {
		return this.props.userStore!
    }
    
    get userLogin() {
        return this.userStore.user && this.userStore.user.login || '';
	}

	@boundMethod
	logout() {
		this.userStore.clearUser();
	}

	render() {
		return (
			<div onClick={this.logout}>
				<LogoutView title={this.userLogin} />
			</div>
		);
	}
}

// https://github.com/facebook/react/issues/14061
export default Object.assign(LogoutContainer, { contextType: undefined });
