import React from 'react'
import PropTypes from 'prop-types'
import '../../common/Table.css'

const SnapshotDetail = (props) => {
	const coin = props.result.details;

	return (
		<div className="Table-container">
			<div className="Detail-coin">
				<h3>{coin.name}</h3>
				<h6>{coin.symbol_full}</h6>
				<h4>Snapshot {coin.ID}</h4>
				<h5>{coin.dateCreated}</h5>
			</div>
			<table className="Table">
				<tbody className="Table-body">
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