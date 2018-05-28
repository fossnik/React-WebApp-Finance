import React, { Component } from 'react'
import { API_URL } from "../../config"
import { connect } from 'react-redux'

class SnapshotDetail extends Component {
	constructor() {
		super();

		this.onSnapNavClick = this.onSnapNavClick.bind(this);
		this.state = {
			snapDetails: null,
			prevSnapshot: null,
			nextSnapshot: null,
		}
	}

	componentDidMount() {
		this.fetchFromApi();
	}

	fetchFromApi() {
		const { coin, snapshot } = this.props.match.params;

		fetch(`${API_URL}/${coin}/${snapshot}`)
			.then(response => response.json().then(json => response.ok ? json : Promise.reject(json)))
			.then(response => this.setState({snapDetails: response.details}))
			.catch(error => console.error("Could not Load from API\n" + error));

		if (Object.keys(this.props.allSnapshots).length !== 0) {
			try {
				this.setState({prevSnapshot: this.props.allSnapshots[coin][Number(snapshot) - 1] ? Number(snapshot) - 1: null});
			} catch (e) { console.error("Type Error - Cannot Read Undefined" + e); }

			try {
				this.setState({nextSnapshot: this.props.allSnapshots[coin][Number(snapshot) + 1] ? Number(snapshot) + 1: null});
			} catch (e) { console.error("Type Error - Cannot Read Undefined" + e); }
		}
	}

	static upOrDownArrow(change, symbol) {
		if (change > 0)
			return <span className="Arrow-up">&uarr; {change} {symbol}</span>;
		else if (change < 0)
			return <span className="Arrow-down">&darr; {change} {symbol}</span>;
		else
			return <span>{change}</span>;
	}

	onSnapNavClick(event) {
		this.fetchFromApi();
		this.props.history.push(`/db/${this.props.match.params.coin}/${event.target.value}`);
	}

	render() {
		const coinSnap = this.state.snapDetails;

		if (coinSnap)
			return <div>
				<div className="Detail-coin">
					<div className='FullName'>{coinSnap.name}</div>
					<div className='Symbol'>{coinSnap.symbol_full}</div>
					<div className='Date'>{(new Date(coinSnap.dateCreated)).toLocaleString()}</div>
					<div className='SnapShot'>Snapshot {coinSnap.ID}</div>
					<button className='ShotNav left'
							value={this.state.prevSnapshot}
							onClick={this.onSnapNavClick}
							style={{display: this.state.prevSnapshot ? 'block' : 'none'}}
					>Previous</button>
					<button className='ShotNav right'
							value={this.state.nextSnapshot}
							onClick={this.onSnapNavClick}
							style={{display: this.state.nextSnapshot ? 'block' : 'none'}}
					>Next</button>
				</div>
				<table className="Table Table-container">
					<tbody className="Table-body">
					<tr>
						<td id='r'>Price</td>
						<td>{coinSnap.price} $</td>
					</tr>
					<tr>
						<td id='r'>Change</td>
						<td>{SnapshotDetail.upOrDownArrow(coinSnap.change, '$')}</td>
					</tr>
					<tr>
						<td id='r'>Percent Change</td>
						<td>{SnapshotDetail.upOrDownArrow(coinSnap.pChange, '%')}</td>
					</tr>
					<tr>
						<td id='r'>Market Cap</td>
						<td>{coinSnap.marketCap}</td>
					</tr>
					<tr>
						<td id='r'>Volume</td>
						<td>{coinSnap.volume}</td>
					</tr>
					<tr>
						<td id='r'>Volume 24h</td>
						<td>{coinSnap.volume24h}</td>
					</tr>
					<tr>
						<td id='r'>Total Volume 24h</td>
						<td>{coinSnap.totalVolume24h}</td>
					</tr>
					<tr>
						<td id='r'>Circulating Suppy</td>
						<td>{coinSnap.circulatingSupply}</td>
					</tr>
					</tbody>
				</table>
			</div>;
		else
			return <div className='Loading'>Loading Detail View...</div>
	}
}

function mapStateToProps(state) {
	return {
		allSnapshots: state.allSnapshots
	}
}

export default connect(mapStateToProps)(SnapshotDetail)