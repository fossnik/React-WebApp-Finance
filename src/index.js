import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import About from './About'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(homePage(), document.getElementById('root'));

// app start button
document.getElementById('startButton').onclick = () => {
	ReactDOM.render(<App/>, document.getElementById('root'));
};

function homePage() {
	return <div>
		<button id="startButton" className="btn btn-primary btn-lg">Start</button>
		<About/>
	</div>
}