import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchListOfSnapshotsForSingleCoin } from "../../actions"
import CoinMenu from '../navigation/Menu-coins'

class SnapshotIndex extends Component {
	constructor(props) {
		super(props);

		this.onSnapshotClick = this.onSnapshotClick.bind(this);

		this.state = {
			activeCoin: props.match.params.coin,
		}
	}

	componentDidMount() {
		this.props.fetchListOfSnapshotsForSingleCoin(this.state.activeCoin)
	}

	onSnapshotClick(snapId) {
		this.props.history.push(`/db/${this.state.activeCoin}/${snapId}`)
	}

	render() {
		try {
			const snapshotsOfThisCoin = this.props.allSnapshots.scrapeDates[this.state.activeCoin];

			return <div>
				<CoinMenu activeCoin={this.state.activeCoin} history={this.props.history}/>
				<table className="Table">
					<thead className="Table-head">
					<tr>
						<th className="Row-header-coin" colSpan='2'>{this.state.activeCoin}</th>
					</tr>
					<tr>
						<th>Selenium Web Scrape</th>
						<th>Log Time</th>
					</tr>
					</thead>
					<tbody className="Table-body Click-able">
					{Object.keys(snapshotsOfThisCoin).reverse().map(snapId =>
						<tr
							key={snapId}
							onClick={() => this.onSnapshotClick(snapId)}
						>
							<td id='r' value={snapId}>
								Scrape #{snapId}
							</td>
							<td value={snapId}>
								{new Date(snapshotsOfThisCoin[snapId]).toLocaleString()}
							</td>
						</tr>)}
					</tbody>
				</table>
			</div>
		} catch (e) {
			return <div className='Loading'>Loading Snapshot Index...</div>
		}
	}
}

function mapStateToProps(state) {
	return {
		allSnapshots: state.allSnapshots
	}
}

export default connect(mapStateToProps, {fetchListOfSnapshotsForSingleCoin})(SnapshotIndex)