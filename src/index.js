import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import About from './components/About'
import StartButton from './components/StartButton'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import promise from 'redux-promise'

ReactDOM.render(<StartButton/>, document.querySelector('.StartButton-container'));
ReactDOM.render(<About/>, document.getElementById('root'));

// redux
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// app start button
document.querySelector('.StartButton').onclick = () => {
	document.querySelector('.StartButton').style.visibility = "hidden";
	ReactDOM.render(
		<Provider store={createStoreWithMiddleware(reducers)}>
			<App/>
		</Provider>, document.getElementById('root'));
};