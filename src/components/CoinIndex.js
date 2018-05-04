import React, { Component } from 'react'
import '../common/Table.css'

export default class CoinIndex extends Component {
	render() {
		if (this.props.result.names) {
			return <div className="Table-container">
				<table className="Table">
					<thead className="Table-head">
					<tr>
						<th>Coins</th>
					</tr>
					</thead>
					<tbody className="Table-body">
					{this.props.result.names.map(coin => (
						<tr
							key={coin}
							onClick={this.props.action}
						>
							<td>
								<span>{coin}</span>
							</td>
						</tr>
					))}
					</tbody>
				</table>
			</div>;
		} else {
			return <div/>;
		}
	}
};