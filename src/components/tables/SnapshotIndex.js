import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../common/Table.css'

export default class SnapshotIndex extends Component {
	render() {
		const { result, action } = this.props;
		return (
			<div className="Table-container">
				<table className="Table">
					<thead className="Table-head">
					<tr>
						<th>Coins</th>
					</tr>
					</thead>
					<tbody className="Table-body">
					{result.snapshots.map(snapshot => (
						<tr
							key={snapshot[0]}
							onClick={action}
						>
							<td value={snapshot[0]}>
								{snapshot[1]}
							</td>
						</tr>
					))}
					</tbody>
				</table>
			</div>
		)
	}
}

SnapshotIndex.propTypes = {
	result: PropTypes.object.isRequired,
};