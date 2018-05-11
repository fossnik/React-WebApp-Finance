import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import About from './components/About'
import StartButton from './components/StartButton'

ReactDOM.render(<StartButton/>, document.querySelector('.StartButton-container'));
ReactDOM.render(<About/>, document.getElementById('root'));

// app start button
document.querySelector('.StartButton').onclick = () => {
	document.querySelector('.StartButton').style.visibility = "hidden";
	ReactDOM.render(<App/>, document.getElementById('root'));
};