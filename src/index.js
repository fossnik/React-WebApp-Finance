import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import promise from 'redux-promise'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import CoinIndex from './containers/views/CoinIndex'
import SnapshotIndex from './containers/views/SnapshotIndex'
import SnapshotDetail from './containers/views/SnapshotDetail'
import About from './components/About'

// redux
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const Root = () =>
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<Switch>
				<Route path="/db/:coin/:snapshot" component={SnapshotDetail}/>
				<Route path="/db/:coin/" component={SnapshotIndex}/>
				<Route path="/db/" component={CoinIndex}/>
				<Route path="/" component={About}/>
			</Switch>
		</BrowserRouter>
	</Provider>;

ReactDOM.render(<Root/>, document.getElementById('root'));