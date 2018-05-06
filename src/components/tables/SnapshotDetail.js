import React from 'react'
import PropTypes from 'prop-types'
import '../../common/Table.css'

const SnapshotDetail = (props) => {
	const coin = props.result.details;

	return (
		<div className="Table-container">
			<table className="Table">
				<tbody className="Table-body">
					<tr>
						<td>ID</td>
						<td><span>{coin.ID}</span></td>
					</tr>
					<tr>
						<td>Date Created</td>
						<td><span>{coin.dateCreated}</span></td>
					</tr>
					<tr>
						<td>Symbol</td>
						<td><span>{coin.symbol}</span></td>
					</tr>
					<tr>
						<td>Name</td>
						<td><span>{coin.name}</span></td>
					</tr>
					<tr>
						<td>Price</td>
						<td><span>{coin.price}</span></td>
					</tr>
					<tr>
						<td>Change</td>
						<td><span>{coin.change}</span></td>
					</tr>
					<tr>
						<td>Percent Change</td>
						<td><span>{coin.pChange}</span></td>
					</tr>
					<tr>
						<td>Market Cap</td>
						<td><span>{coin.marketCap}</span></td>
					</tr>
					<tr>
						<td>Volume</td>
						<td><span>{coin.volume}</span></td>
					</tr>
					<tr>
						<td>Volume 24h</td>
						<td><span>{coin.volume24h}</span></td>
					</tr>
					<tr>
						<td>Total Volume 24h</td>
						<td><span>{coin.totalVolume24h}</span></td>
					</tr>
					<tr>
						<td>Circulating Suppy</td>
						<td><span>{coin.circulatingSupply}</span></td>
					</tr>
				</tbody>
			</table>
		</div>
	)
};

SnapshotDetail.propTypes = {
	result: PropTypes.object.isRequired,
};

export default SnapshotDetail