import React, { Component } from 'react'
import '../Table.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectSnapshot, appendSnapshotList } from "../../actions"
import { API_URL } from "../../config"

class SnapshotIndex extends Component {
	constructor() {
		super();

		this.state = { snapshots: null }
	}

	componentDidMount() {
		fetch(`${API_URL}/${this.props.activeCoin}`)
			.then(response => response.json().then(json => response.ok ? json : Promise.reject(json)))
			.then(response => {
				this.setState({snapshots: response.snapshots});
				this.props.appendSnapshotList([this.props.activeCoin, response.snapshots])
			})
			.catch(error => console.error("Could not Load from API\n" + error))
	}

	render() {
		if (this.state.snapshots)
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
					{Object.keys(this.state.snapshots).reverse().map(snapId =>
						<tr
							key={snapId}
							onClick={() => this.props.selectSnapshot(snapId)}
						>
							<td id='r' value={snapId}>
								Scrape #{snapId}
							</td>
							<td value={snapId}>
								{new Date(this.state.snapshots[snapId]).toLocaleString()}
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
	return {
		activeCoin: state.activeCoin,
		activeCoinFullName: state.coins.filter(coin => coin.symbol_safe === state.activeCoin)[0].name,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({selectSnapshot, appendSnapshotList}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SnapshotIndex)