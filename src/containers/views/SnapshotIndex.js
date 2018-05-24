import React, { Component } from 'react'
import '../Table.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectSnapshot, fetchListOfSnapshotsForSingleCoin } from "../../actions"

class SnapshotIndex extends Component {
	componentDidMount() {
		this.props.fetchListOfSnapshotsForSingleCoin(this.props.activeCoin)
	}

	render() {
		if (this.props.snapshotsForSingleCoin)
			return <div className="Table-container">
				<table className="Table">
					<thead className="Table-head">
					<tr>
						<th className="Row-header-coin" colSpan='2'>{this.props.activeCoinFullName}</th>
					</tr>
					<tr>
						<th>Selenium Web Scrape</th>
						<th>Log Time</th>
					</tr>
					</thead>
					<tbody className="Table-body Click-able">
					{Object.keys(this.props.snapshotsForSingleCoin).reverse().map(snapId =>
						<tr
							key={snapId}
							onClick={() => this.props.selectSnapshot(snapId)}
						>
							<td id='r' value={snapId}>
								Scrape #{snapId}
							</td>
							<td value={snapId}>
								{new Date(this.props.snapshotsForSingleCoin[snapId]).toLocaleString()}
							</td>
						</tr>)}
					</tbody>
				</table>
			</div>;
		else
			return <div className='Loading'>Loading Snapshot Index...</div>
	}
}

function mapStateToProps(state) {
	const activeCoin = state.activeCoin;
	const activeCoinFullName = state.coins.filter(coin => coin.symbol_safe === state.activeCoin)[0].name;
	const snapshotsForSingleCoin = state.allSnapshots[state.activeCoin];

	return { activeCoin, activeCoinFullName, snapshotsForSingleCoin }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({selectSnapshot, fetchListOfSnapshotsForSingleCoin}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SnapshotIndex)