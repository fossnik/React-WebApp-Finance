import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import About from './About'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(startButton(), document.getElementById('startButton'));
ReactDOM.render(homePage(), document.getElementById('root'));

// app start button
document.getElementById('startButton').onclick = () => {
	document.getElementById('startButton').style.visibility = "hidden";
	ReactDOM.render(<App/>, document.getElementById('root'));
};

function homePage() {
	return <About/>
}

function startButton() {
	return <button id="startButton" className="btn btn-primary btn-lg">Start</button>
}
