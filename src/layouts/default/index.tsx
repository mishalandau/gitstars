import '@/assets/main.scss';
import ErrorContext from '@/contexts/ErrorContext';
import BottomError from '@/sharedComponents/BottomError';
import { boundMethod } from 'autobind-decorator';
import * as React from 'react';
import styles from './default.scoped.scss';

interface TemplateState {
	errorMsg: string;
}

export default class BaseTemplate extends React.Component<{}, TemplateState> {
	state = {
		errorMsg: ''
	}

	@boundMethod
	changeValue(val: string) {
		this.setState({
			errorMsg: val
		})
	}

	render() {
		return (
            <main className={styles['g-container']}>
				<ErrorContext.Provider
					value={{
						onChangeValue: this.changeValue,
						value: this.state.errorMsg
					}}>
					{this.props.children}
					{this.state.errorMsg.length > 0 && <BottomError>{this.state.errorMsg}</BottomError>}
				</ErrorContext.Provider>
			</main>
		);
	}
}
