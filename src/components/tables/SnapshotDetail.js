import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../../common/Table.css'
import { API_URL } from "../../config"

class SnapshotDetail extends Component {
	constructor() {
		super();

		this.state = { response: {} }
	}

	componentDidMount() {
		fetch(`${API_URL}/${this.props.activeCoin}/${this.props.activeSnapshot}`)
			.then((response) => response.json().then(json => {
				return response.ok ? json : Promise.reject(json)
			}))
			.then((response) => {
				 this.setState({response: response.details})
			})
			.catch(error => {
				console.log("Could not Load from API\n" + error)
			})
	}

	render() {
		const coin = this.state.response;
		
		return <div className="Table-container">
			<div className="Detail-coin">
				<h3>{coin.name}</h3>
				<h6>{coin.symbol_full}</h6>
				<h4>Snapshot {coin.ID}</h4>
				<h5>{coin.dateCreated}</h5>
			</div>
			<table className="Table">
				<tbody className="Table-body">
				<tr>
					<td>Price</td>
					<td><span>{coin.price}</span></td>
				</tr>
				<tr>
					<td>Change</td>
					<td><span>{coin.change}</span></td>
				</tr>
				<tr>
					<td>Percent Change</td>
					<td><span>{coin.pChange}</span></td>
				</tr>
				<tr>
					<td>Market Cap</td>
					<td><span>{coin.marketCap}</span></td>
				</tr>
				<tr>
					<td>Volume</td>
					<td><span>{coin.volume}</span></td>
				</tr>
				<tr>
					<td>Volume 24h</td>
					<td><span>{coin.volume24h}</span></td>
				</tr>
				<tr>
					<td>Total Volume 24h</td>
					<td><span>{coin.totalVolume24h}</span></td>
				</tr>
				<tr>
					<td>Circulating Suppy</td>
					<td><span>{coin.circulatingSupply}</span></td>
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