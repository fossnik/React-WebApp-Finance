import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../Table.css'
import { API_URL } from "../../config"
import { bindActionCreators } from 'redux'
import { selectSnapshot } from "../../actions"

class SnapshotDetail extends Component {
	constructor() {
		super();

		this.onSnapNavClick = this.onSnapNavClick.bind(this);
		this.state = { snapDetails: null }
	}

	componentDidMount() {
		this.fetchDetailFromApi(this.props.activeSnapshot)
	}

	fetchDetailFromApi(snapshot) {
		this.props.selectSnapshot(snapshot);

		fetch(`${API_URL}/${this.props.activeCoin}/${snapshot}`)
			.then(response => response.json().then(json => response.ok ? json : Promise.reject(json)))
			.then(response => this.setState({snapDetails: response.details}))
			.catch(error => console.error("Could not Load from API\n" + error))
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
		this.fetchDetailFromApi(event.target.value);
	}

	render() {
		const coinSnap = this.state.snapDetails;

		if(coinSnap)
			return <div>
				<div className="Detail-coin">
					<div className='FullName'>{coinSnap.name}</div>
					<div className='Symbol'>{coinSnap.symbol_full}</div>
					<div className='Date'>{(new Date(coinSnap.dateCreated)).toLocaleString()}</div>
					<div className='SnapShot'>Snapshot {coinSnap.ID}</div>
					<button className='ShotNav left'
							value={this.props.prevSnapshot}
							onClick={this.onSnapNavClick}
							style={{display: this.props.prevSnapshot ? 'block' : 'none'}}
					>Previous</button>
					<button className='ShotNav right'
							value={this.props.nextSnapshot}
							onClick={this.onSnapNavClick}
							style={{display: this.props.nextSnapshot ? 'block' : 'none'}}
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
	let prevSnapshot, nextSnapshot;
	try {
		prevSnapshot = state.allSnapshots[state.activeCoin][Number(state.activeSnapshot) - 1] ? Number(state.activeSnapshot) - 1 : null;
		nextSnapshot = state.allSnapshots[state.activeCoin][Number(state.activeSnapshot) + 1] ? Number(state.activeSnapshot) + 1 : null;
	} catch (e) { console.error("Type Error - Cannot Read Undefined" + e); }

	return {
		activeCoin: state.activeCoin,
		activeSnapshot: state.activeSnapshot,
		prevSnapshot: prevSnapshot || null,
		nextSnapshot: nextSnapshot || null,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({selectSnapshot}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SnapshotDetail)