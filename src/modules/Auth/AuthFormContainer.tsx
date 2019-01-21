import ErrorContext from '@/contexts/ErrorContext';
import { UserStore } from '@/modules/CurrentUser/UserStore';
import ButtonDefault from '@/sharedComponents/ButtonDefault';
import LogoInfo from '@/sharedComponents/LogoInfo';
import MarginView from '@/sharedComponents/MarginView';
import TextFieldDefault from '@/sharedComponents/TextFieldDefault';
import { boundMethod } from 'autobind-decorator';
import { inject, observer } from 'mobx-react'
import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import UserApi from './AuthService';

interface AuthFormContainerState {
	username: string;
}

interface AnythingProps extends Partial<RouteComponentProps> {
	userStore?: UserStore
}
@(withRouter as any)
@inject('userStore')
@observer
class AuthFormContainer extends React.Component<AnythingProps, AuthFormContainerState> {
	static contextType = ErrorContext;

	state = {
		username: ''
	}

	@boundMethod
	changeValue(val: string) {
		this.setState({
			username: val
		});
	}


	get userStore() {
		return this.props.userStore!
	}

	@boundMethod
	async login() {
		UserApi.fetchUser(this.state.username).then((user) => {
			this.userStore.setUser(user);
			this.props.history && this.props.history.push('/catalog');
		}).catch((err: TypeError) => {
			this.context.onChangeValue(err.message);
		})
	}

	render() {
		return (
			<div>
				<span>{this.userStore.user && this.userStore.user.login}</span>
				<LogoInfo />
				<MarginView top={40} />
				<TextFieldDefault
					changeValue={this.changeValue}
					placehloder='Your github username'
					label='Enter github username' />
				<MarginView top={20} />
				<ButtonDefault
					onClick={this.login}
					type='active'
					title='Enter' />
			</div>
		);
	}
}

// https://github.com/facebook/react/issues/14061
export default Object.assign(AuthFormContainer, { contextType: undefined });
