import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../common/Table.css'

export default class CoinIndex extends Component {
	render() {
		if (this.props.result.coins) {
			return <div className="Table-container">
				<table className="Table">
					<thead className="Table-head">
					<tr>
						<th>Name</th>
						<th>Pair Symbol</th>
					</tr>
					</thead>
					<tbody className="Table-body">
					{this.props.result.coins.map(coin => (
						<tr
							key={coin.symbol_safe}
							onClick={this.props.action}
						>
							<td value={coin.symbol_safe}>{coin.name}</td>
							<td value={coin.symbol_safe}>{coin.symbol_full}</td>
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

CoinIndex.propTypes = {
	result: PropTypes.object.isRequired,
};