import React, { Component } from 'react'
import '../common/Table.css'

export default class CoinIndex extends Component {
	render() {
		return (
			<div className="Table-container">
				<table className="Table">
					<thead className="Table-head">
					<tr>
						<th>Coins</th>
					</tr>
					</thead>
					<tbody className="Table-body">
					{this.props.result.map(coin => (
						<tr
							// onClick={this.props.onClick.bind(null, this)}
						>
							<td>
								<span>{coin}</span>
							</td>
						</tr>
					))}
					</tbody>
				</table>
			</div>
		)
	}
};
//
// CoinIndex.propTypes = {
// 	result: PropTypes.object.isRequired,
// };
//
// export default CoinIndex