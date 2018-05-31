import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSnapshotDetail, fetchListOfSnapshotsForSingleCoin } from "../../actions"
import CoinMenu from '../navigation/Menu-coins'

class SnapshotDetail extends Component {
	constructor() {
		super();

		this.onSnapNavClick = this.onSnapNavClick.bind(this);
	}

	componentDidMount() {
		this.props.fetchSnapshotDetail(this.props.match.params);

		// load scrapeDates index if not exist
		if (Object.keys(this.props.allSnapshots).length === 0 || !Object.keys(this.props.allSnapshots.scrapeDates).includes(this.props.match.params.coin))
			this.props.fetchListOfSnapshotsForSingleCoin(this.props.match.params.coin);
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
		this.props.match.params.snapshot = event.target.value;
		this.props.fetchSnapshotDetail(this.props.match.params);
		this.props.history.push(`/db/${this.props.match.params.coin}/${event.target.value}`)
	}

	render() {
		if (Object.keys(this.props.allSnapshots).includes("details") &&
			Object.keys(this.props.allSnapshots.details).includes(this.props.match.params.coin) &&
			Object.keys(this.props.allSnapshots).includes("scrapeDates") &&
			Object.keys(this.props.allSnapshots.scrapeDates).includes(this.props.match.params.coin) &&
			Object.keys(this.props.allSnapshots.details[this.props.match.params.coin]).includes(this.props.match.params.snapshot))
		{
			const snap = this.props.allSnapshots.details[this.props.match.params.coin][this.props.match.params.snapshot];
			const prevSnapshot = Object.keys(this.props.allSnapshots.scrapeDates[this.props.match.params.coin]).includes(String(Number(snap.ID) - 1)) ? Number(snap.ID) - 1 : null;
			const nextSnapshot = Object.keys(this.props.allSnapshots.scrapeDates[this.props.match.params.coin]).includes(String(Number(snap.ID) + 1)) ? Number(snap.ID) + 1 : null;

			return <div>
				<CoinMenu activeCoin={this.props.match.params.coin} history={this.props.history}/>
				<div className="Detail-coin">
					<div className='FullName'>{snap.name}</div>
					<div className='Symbol'>{snap.symbol_full}</div>
					<div className='Date'>{(new Date(snap.dateCreated)).toLocaleString()}</div>
					<div className='SnapShot'>Snapshot {snap.ID}</div>
					<button className='ShotNav left'
							value={prevSnapshot}
							onClick={this.onSnapNavClick}
							style={{display: prevSnapshot ? 'block' : 'none'}}
					>Previous
					</button>
					<button className='ShotNav right'
							value={nextSnapshot}
							onClick={this.onSnapNavClick}
							style={{display: nextSnapshot ? 'block' : 'none'}}
					>Next
					</button>
				</div>
				<table className="Table Table-container">
					<tbody className="Table-body">
					<tr>
						<td id='r'>Price</td>
						<td>{snap.price} $</td>
					</tr>
					<tr>
						<td id='r'>Change</td>
						<td>{SnapshotDetail.upOrDownArrow(snap.change, '$')}</td>
					</tr>
					<tr>
						<td id='r'>Percent Change</td>
						<td>{SnapshotDetail.upOrDownArrow(snap.pChange, '%')}</td>
					</tr>
					<tr>
						<td id='r'>Market Cap</td>
						<td>{snap.marketCap}</td>
					</tr>
					<tr>
						<td id='r'>Volume</td>
						<td>{snap.volume}</td>
					</tr>
					<tr>
						<td id='r'>Volume 24h</td>
						<td>{snap.volume24h}</td>
					</tr>
					<tr>
						<td id='r'>Total Volume 24h</td>
						<td>{snap.totalVolume24h}</td>
					</tr>
					<tr>
						<td id='r'>Circulating Suppy</td>
						<td>{snap.circulatingSupply}</td>
					</tr>
					</tbody>
				</table>
			</div>
		}

		return <div className='Loading'>Loading Detail View...</div>
	}
}

function mapStateToProps(state) {
	return {
		allSnapshots: state.allSnapshots,
	}
}

export default connect(mapStateToProps, {fetchSnapshotDetail, fetchListOfSnapshotsForSingleCoin})(SnapshotDetail)