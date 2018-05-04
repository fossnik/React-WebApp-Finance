import React from 'react'
import { API_URL } from '../config'
import CoinIndex from '../components/CoinIndex'
import SnapshotIndex from '../components/SnapshotIndex'
import SnapshotDetail from '../components/SnapshotDetail'

class Table extends React.Component {
	constructor() {
		super();

		this.state = {
			view: 'coinIndex',
			coin: null,
			snapId: null,
			result: []
		}
		this.callDetailView = this.callDetailView.bind(this);
		this.callSnapshotIndex = this.callSnapshotIndex.bind(this);
		this.callCoinIndex = this.callCoinIndex.bind(this);
	}

	componentDidMount() {
		if (this.state.snapId != null && this.state.coin != null)
			this.callDetailView();
		else if (this.state.coin != null)
			this.callSnapshotIndex();
		else
			this.callCoinIndex();
	}

	callCoinIndex() {
		fetch(API_URL)
			.then((response) => response.json().then(json => {
				return response.ok ? json : Promise.reject(json);
			}))
			.then((response) => {
				this.setState({result: response.names});
			})
			.catch(error => {
				console.log("Could not Load from API\n" + error);
			})
	}

	callSnapshotIndex() {
		fetch(`${API_URL}/${this.state.coin}`)
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

	callDetailView() {
		fetch(`${API_URL}/${this.state.coin}/${this.state.snapid}`)
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
		switch (this.state.view) {
			case 'coinIndex':
				console.log(this.state)
				return <CoinIndex result={this.state.result}/>;
			case 'snapshotIndex':
				return <SnapshotIndex coin={this.state.coin}/>;
			case 'detailView':
				return <SnapshotDetail snapId={this.state.snapId} coin={this.state.coin}/>;
			default:
				console.error("Invalid View Parameter");
				break;
		}
	}
}

export default Table