import * as React from 'react';
import AuthFormContainer from './AuthFormContainer';
import styles from './styles/auth-page.scoped.scss';

export default class AuthPage extends React.Component {
	render() {
		return (
			<div className={styles['auth-page']}>
				<AuthFormContainer />
			</div>
		);
	}
}