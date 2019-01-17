import '@/App.css';
import LogoIcon from '@/sharedComponents/Icons/Logo';
import * as React from 'react';

export default class App extends React.Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<div className="App-logo">
						<LogoIcon color="#0ee" />
					</div>
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.tsx</code> and save to reload.
				</p>
			</div>
		);
	}
}
