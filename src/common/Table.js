import React from 'react'
import { API_URL } from '../config'
import CoinIndex from '../components/CoinIndex'
import SnapshotIndex from '../components/SnapshotIndex'
import SnapshotDetail from '../components/SnapshotDetail'

class Table extends React.Component {
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
		console.log(event.target.innerText,this.state.resultSecond)
		const snapId = this.state.resultSecond[1]
		// event.target.innerText;
		this.setState({
			snapId: snapId,
			action: this.callApi({
				coin: this.state.coin,
				snapId: snapId
			})
		})
	}

	render() {
		if (this.state.resultThird)
			return <SnapshotDetail
				result={this.state.resultThird}
			/>;

		else if (this.state.resultSecond)
			return <SnapshotIndex
				result={this.state.resultSecond}
				action={this.snapshotSelectHandler}
			/>;

		else if (this.state.resultFirst)
			return <CoinIndex
				result={this.state.resultFirst}
				action={this.coinSelectHandler}
			/>;

		else
			return <div>Loading...</div>
	}
}

export default Table