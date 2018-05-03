import React from 'react'
import { API_URL } from '../../config'
import CoinMenuList from './CoinMenuList'

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
				this.setState({
					result: response,
				})
			})
			.catch(error => {
				console.log("Could not Load from API\n" + error);
			})
	}

	render() {
		return <CoinMenuList result={this.state.result}/>
	}
}

export default CoinMenu