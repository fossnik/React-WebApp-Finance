import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Table from './common/Table'
import NaviBar from './components/NaviBar'
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

		try {
			if (endpoint.coin)
				url += endpoint.coin;

			if (endpoint.snapId)
				url += "/" + endpoint.snapId;
		}
		catch(e) {
			console.log(e)
		}

		console.log(url);

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
		this.setState({
			coin: event.target.innerText,
			action: this.callApi({coin: event.target.innerText})
		})
	}

	snapshotSelectHandler(event) {
		const re = new RegExp(/(?<=<span snapid=")(.*)(?=">)/);
		const snapId = re.exec(event.target.outerHTML)[0];

		this.setState({
			snapId: snapId,
			action: this.callApi({
				coin: this.state.coin,
				snapId: snapId
			})
		})
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Yz Finance</h1>
					<h4 className="App-subtitle">Interface for Yahoo! Finance Web-Scraped Data</h4>
					<NaviBar/>
				</header>
				<Table
					resultFirst={this.state.resultFirst}
					resultSecond={this.state.resultSecond}
					resultThird={this.state.resultThird}
					coinSelectHandler={this.coinSelectHandler}
					snapshotSelectHandler={this.snapshotSelectHandler}
				/>
			</div>
		);
	}
}