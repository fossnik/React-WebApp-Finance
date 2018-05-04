import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../common/Table.css'

class SnapshotIndex extends Component {
	render() {
		const {result} = this.props;

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
							onClick={this.props.action}
						>
							<td>
								<span>{snapshot.dateCreated}</span>
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

export default SnapshotIndex