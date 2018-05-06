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
					{result.snaps.map(snapshot => (
						<tr
							key={snapshot.ID}
							onClick={action}
						>
							<td>
								<span snapid={snapshot.ID}>
									{snapshot.dateCreated}
								</span>
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