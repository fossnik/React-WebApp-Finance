import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../Table.css'
import { API_URL } from "../../config"

class SnapshotDetail extends Component {
	constructor() {
		super();

		this.state = { snapDetails: null }
	}

	componentDidMount() {
		fetch(`${API_URL}/${this.props.activeCoin}/${this.props.activeSnapshot}`)
			.then(response => response.json().then(json => {
				return response.ok ? json : Promise.reject(json)
			}))
			.then(response => {
				 this.setState({snapDetails: response.details})
			})
			.catch(error => {
				console.error("Could not Load from API\n" + error)
			})
	}

	static upOrDownArrow(change, symbol) {
		if (change > 0)
			return <span className="Arrow-up">&uarr; {change} {symbol}</span>;
		else if (change < 0)
			return <span className="Arrow-down">&darr; {change} {symbol}</span>;
		else
			return <span>{change}</span>;
	}

	render() {
		const coinSnap = this.state.snapDetails;

		if(coinSnap)
			return <div>
				<div className="Detail-coin">
					<div className='FullName'>{coinSnap.name}</div>
					<div className='Symbol'>{coinSnap.symbol_full}</div>
					<div className='Date'>{coinSnap.dateCreated}</div>
					<div className='SnapShot'>Snapshot {coinSnap.ID}</div>
				</div>
				<table className="Table Table-container">
					<tbody className="Table-body">
					<tr>
						<td>Price</td>
						<td>{coinSnap.price} $</td>
					</tr>
					<tr>
						<td>Change</td>
						<td>{SnapshotDetail.upOrDownArrow(coinSnap.change, '$')}</td>
					</tr>
					<tr>
						<td>Percent Change</td>
						<td>{SnapshotDetail.upOrDownArrow(coinSnap.pChange, '%')}</td>
					</tr>
					<tr>
						<td>Market Cap</td>
						<td>{coinSnap.marketCap}</td>
					</tr>
					<tr>
						<td>Volume</td>
						<td>{coinSnap.volume}</td>
					</tr>
					<tr>
						<td>Volume 24h</td>
						<td>{coinSnap.volume24h}</td>
					</tr>
					<tr>
						<td>Total Volume 24h</td>
						<td>{coinSnap.totalVolume24h}</td>
					</tr>
					<tr>
						<td>Circulating Suppy</td>
						<td>{coinSnap.circulatingSupply}</td>
					</tr>
					</tbody>
				</table>
			</div>;
		else
			return <div>Loading Detail View...</div>
	}
}

function mapStateToProps(state) {
	return {
		activeCoin: state.activeCoin,
		activeSnapshot: state.activeSnapshot,
	}
}

export default connect(mapStateToProps)(SnapshotDetail)