// import client from '@/config/Apollo';
import ErrorContext from '@/contexts/ErrorContext';
import User from '@/modules/CurrentUser/User';
import ButtonDefault from '@/sharedComponents/ButtonDefault';
import MarginView from '@/sharedComponents/MarginView';
import TextFieldDefault from '@/sharedComponents/TextFieldDefault';
import { boundMethod } from 'autobind-decorator';
// import gql from 'graphql-tag';
import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import UserApi from './AuthService';
import LogoInfo from './components/LogoInfo';

interface AuthFormContainerState {
	username: string;
}

interface AnythingProps extends Partial<RouteComponentProps> {
}
@(withRouter as any)
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

	@boundMethod
	async login() {
		UserApi.fetchUser(this.state.username).then((user) => {
			User.userInfo = user;
			this.props.history && this.props.history.push('/catalog');
		}).catch((err: TypeError) => {
			this.context.onChangeValue(err.message);
		})
		// client.query({
		// 	query: gql`
		// 		{
		// 			search (query: ${this.state.username}, type: USER, first: 1){
		// 				edges {
		// 					node {
		// 						... on User {
		// 							login
		// 						}
		// 					}
		// 				}
		// 			}
		// 		}
		// 	`
		// });
	}

	render() {
		return (
			<div>
				<LogoInfo />
				<MarginView top={40} />
				<TextFieldDefault
					changeValue={this.changeValue}
					placehloder='Your github username'
					label='Enter github username' />
				<MarginView top={20} />
				<ButtonDefault
                    onClick={this.login}
                    title='Enter' />
			</div>
		);
	}
}

// https://github.com/facebook/react/issues/14061
AuthFormContainer.contextType = ErrorContext;

export default Object.assign(AuthFormContainer, { contextType: undefined });
