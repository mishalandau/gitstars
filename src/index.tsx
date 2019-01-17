import AuthPage from '@/modules/Auth/AuthPage';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Router, Switch } from 'react-router';
// import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();
const stores = {
	routing: routingStore,
};

const history = syncHistoryWithStore(browserHistory, routingStore);

ReactDOM.render(
	<Provider {...stores}>
    	<Router history={history}>
			<Switch>
				<Route exact path="/" component={AuthPage} />
			</Switch>
    	</Router>
	  </Provider>,
	  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
