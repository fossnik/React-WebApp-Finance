import React from 'react'
import { API_URL } from '../config'

class CoinMenu extends React.Component {
	constructor() {
		super();

		this.state = {
			result: [],
		}
	}

	componentDidMount() {
		fetch(API_URL)
			.then((response) => response.json().then(json => {
				return response.ok ? json : Promise.reject(json);
			}))
			.then((response) => {
				console.log(response)
				// this.setState({
				// 	result: response.result,
				// })
			})
			.catch(error => {
				console.log("Could not Load from API: Probable XSS/CORS Fault\n" + error);
			})
	}

	render() {
		return <div>{this.state.result.length}</div>;
	}
}

export default CoinMenu