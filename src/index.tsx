import App from '@/App.tsx';
import client from '@/config/Apollo';
import BaseTemplate from '@/layouts/default';
import AuthPage from '@/modules/Auth/AuthPage';
import CatalogPage from '@/modules/Catalog/CatalogPage';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import * as ReactDOM from 'react-dom';
import { Route, Router, Switch } from 'react-router';
import registerServiceWorker from './registerServiceWorker';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();
const stores = {
	routing: routingStore,
};

const history = syncHistoryWithStore(browserHistory, routingStore);

ReactDOM.render(
	<ApolloProvider client={client}>
		<Provider {...stores}>
			<BaseTemplate>
				<Router history={history}>
					<Switch>
						<App>
							<Route exact path="/" component={AuthPage} />
							<Route path="/catalog" component={CatalogPage} />
						</App>
					</Switch>
				</Router>
			</BaseTemplate>
		</Provider>
	</ApolloProvider>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
