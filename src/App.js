import React, { Component } from 'react'
import Table from './common/Table'
// import NaviBox from './common/NaviBox'
import { API_URL } from './config'

export default class App extends Component {
	constructor() {
		super();

		this.state = {
			coin: null,
			snapId: null,
			resultFirst: null,
			resultSecond: null,
			resultThird: null
		};

		this.callApi = this.callApi.bind(this);
		this.coinSelectHandler = this.coinSelectHandler.bind(this);
		this.snapshotSelectHandler = this.snapshotSelectHandler.bind(this);
	}

	componentDidMount() {
		this.callApi({})
	}

	callApi(endpoint) {
		let url = API_URL;

		if (endpoint.coin)
			url += endpoint.coin;

		if (endpoint.snapId && endpoint.coin)
			url += "/" + endpoint.snapId;

		console.log("Fetch: " + url);

		fetch(url)
			.then((response) => response.json().then(json => {
				return response.ok ? json : Promise.reject(json);
			}))
			.then((response) => {
				if (endpoint.snapId)
					this.setState({resultThird: response});

				else if (endpoint.coin)
					this.setState({resultSecond: response});

				else
					this.setState({resultFirst: response});
			})
			.catch(error => {
				console.log("Could not Load from API\n" + error);
			});
	}

	coinSelectHandler(event) {
		const coin = event.target.getAttribute("value");

		this.setState({
			coin: coin,
			action: this.callApi({
				coin: coin,
				snapId: null
			})
		})
	}

	snapshotSelectHandler(event) {
		const snapId = event.target.getAttribute("value");

		this.setState({
			snapId: snapId,
			action: this.callApi({
				coin: this.state.coin,
				snapId: snapId
			})
		})
	}

	render() {
		return <div>
			{/*<NaviBox state={this.state}/>*/}
			<Table
					resultFirst={this.state.resultFirst}
					resultSecond={this.state.resultSecond}
					resultThird={this.state.resultThird}
					coinSelectHandler={this.coinSelectHandler}
					snapshotSelectHandler={this.snapshotSelectHandler}
				/>
		</div>;
	}
}