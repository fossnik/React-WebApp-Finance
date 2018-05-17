import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../Table.css'
import { API_URL } from "../../config"

class SnapshotDetail extends Component {
	constructor() {
		super();

		this.state = { response: {} }
	}

	getSnapshot() {
		fetch(`${API_URL}/${this.props.activeCoin}/${this.props.activeSnapshot}`)
			.then(response => response.json().then(json => {
				return response.ok ? json : Promise.reject(json)
			}))
			.then(response => {
				 this.setState({response: response.details})
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
		this.getSnapshot();

		const coin = this.state.response;
		
		return <div>
			<div className="Detail-coin">
				<h3>{coin.name}</h3>
				<h6>{coin.symbol_full}</h6>
				<h4>Snapshot {coin.ID}</h4>
				<h5>{coin.dateCreated}</h5>
			</div>
			<table className="Table Table-container">
				<tbody className="Table-body">
				<tr>
					<td>Price</td>
					<td>{coin.price} $</td>
				</tr>
				<tr>
					<td>Change</td>
					<td>{SnapshotDetail.upOrDownArrow(coin.change, '$')}</td>
				</tr>
				<tr>
					<td>Percent Change</td>
					<td>{SnapshotDetail.upOrDownArrow(coin.pChange, '%')}</td>
				</tr>
				<tr>
					<td>Market Cap</td>
					<td>{coin.marketCap}</td>
				</tr>
				<tr>
					<td>Volume</td>
					<td>{coin.volume}</td>
				</tr>
				<tr>
					<td>Volume 24h</td>
					<td>{coin.volume24h}</td>
				</tr>
				<tr>
					<td>Total Volume 24h</td>
					<td>{coin.totalVolume24h}</td>
				</tr>
				<tr>
					<td>Circulating Suppy</td>
					<td>{coin.circulatingSupply}</td>
				</tr>
				</tbody>
			</table>
		</div>
	}
}

function mapStateToProps(state) {
	return {
		activeCoin: state.activeCoin,
		activeSnapshot: state.activeSnapshot,
	}
}

export default connect(mapStateToProps)(SnapshotDetail)