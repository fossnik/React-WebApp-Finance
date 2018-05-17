import React, { Component } from 'react'
import '../Table.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectSnapshot } from "../../actions"

class SnapshotIndex extends Component {
	render() {
		if (this.props.snapshots)
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
					{this.props.snapshots.map(snapshot => (
						<tr
							key={snapshot[0]}
							onClick={() => this.props.selectSnapshot(snapshot[0])}
						>
							<td value={snapshot[0]}>
								Scrape #{snapshot[0]}
							</td>
							<td value={snapshot[0]}>
								{snapshot[1]}
							</td>
						</tr>
					))}
					</tbody>
				</table>
			</div>;
		else
			return <div/>;
	}
}

function mapStateToProps(state) {
	return {
		snapshots: state.snapshots,
		activeCoin: state.activeCoin,
		activeCoinFullName: state.coins.filter(coin => coin.symbol_safe === state.activeCoin)[0].name,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({selectSnapshot}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SnapshotIndex)