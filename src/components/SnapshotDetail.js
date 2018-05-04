import React from 'react'
import PropTypes from 'prop-types'
import '../common/Table.css'

const CoinMenuList = (props) => {
	const { result } = props;

	return (
		<div className="Table-container">
			<table className="Table">
				<thead className="Table-head">
				<tr>
					<th>ID</th>
					<th>Date Created</th>
					<th>Symbol</th>
					<th>Name</th>
					<th>Price</th>
					<th>Change</th>
					<th>Percent Change</th>
					<th>Market Cap</th>
					<th>Volume</th>
					<th>Volume 24h</th>
					<th>Total Volume 24h</th>
					<th>Circulating Suppy</th>
				</tr>
				</thead>
				<tbody className="Table-body">
				{result.map(coin => (
					<tr key={coin.MarketID}>
						<td><span>{coin.ID}</span></td>
						<td><span>{coin.dateCreated}</span></td>
						<td><span>{coin.symbol}</span></td>
						<td><span>{coin.name}</span></td>
						<td><span>{coin.price}</span></td>
						<td><span>{coin.change}</span></td>
						<td><span>{coin.pChange}</span></td>
						<td><span>{coin.marketCap}</span></td>
						<td><span>{coin.volume}</span></td>
						<td><span>{coin.volume24h}</span></td>
						<td><span>{coin.totalVolume24h}</span></td>
						<td><span>{coin.circulatingSupply}</span></td>
					</tr>
				))}
				</tbody>
			</table>
		</div>
	)
};

CoinMenuList.propTypes = {
	result: PropTypes.array.isRequired,
};

export default CoinMenuList