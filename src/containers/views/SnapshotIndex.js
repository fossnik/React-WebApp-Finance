import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchListOfSnapshotsForSingleCoin, fetchCoinIndex } from "../../actions"
import CoinMenu from '../navigation/Menu-coins'

class SnapshotIndex extends Component {
	constructor() {
		super();

		this.onSnapshotClick = this.onSnapshotClick.bind(this);
	}

	componentDidMount() {
		// load coin index index if not exist
		if (this.props.coins === null)
			this.props.fetchCoinIndex();
	}

	onSnapshotClick(snapId) {
		this.props.history.push(`/db/${this.props.match.params.coin}/${snapId}`)
	}

	render() {
		if (this.props.coins) {
			if (this.props.coins.find(coin => coin.symbol_safe === this.props.match.params.coin) &&
				Object.keys(this.props.allSnapshots).includes("scrapeDates") &&
				Object.keys(this.props.allSnapshots.scrapeDates).includes(this.props.match.params.coin)) {
				const snapshotsOfThisCoin = this.props.allSnapshots.scrapeDates[this.props.match.params.coin];
				const coinFullName = this.props.coins.find(coin => coin.symbol_safe === this.props.match.params.coin).name;

				return <div>
					<CoinMenu history={this.props.history} activeCoin={this.props.match.params.coin}/>
					<table className="Table">
						<thead className="Table-head">
						<tr>
							<th className="Row-header-coin" colSpan='2'>{coinFullName}</th>
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
			}

			// query API if the coin is legit
			if (this.props.coins.find(coin => coin.symbol_safe === this.props.match.params.coin))
				this.props.fetchListOfSnapshotsForSingleCoin(this.props.match.params.coin);
		}
		return <div className='Loading'>Loading Snapshot Index...</div>
	}
}

function mapStateToProps(state) {
	return {
		allSnapshots: state.allSnapshots,
		coins: state.coins,
	}
}

export default connect(mapStateToProps, {fetchListOfSnapshotsForSingleCoin, fetchCoinIndex})(SnapshotIndex)